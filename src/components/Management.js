import React from 'react';
import Collapsible from 'react-collapsible';
import BanUserModal from './BanUserModal';
import {
    MdArrowDownward,
    MdArrowUpward,
    MdRemoveCircle
} from 'react-icons/md';
import Loader from './Loader';
import _ from 'lodash';
import { api } from '../config.json';

const Management = props => {
    const [ isOpen, setOpen ] = React.useState(false);
    const [ data, setData ] = React.useState(null);
    const [ groups, setGroups ] = React.useState(null);
    const [ filter, setFilter ] = React.useState({});
    
    const closeModal = () => {
        setOpen(false);
        setData(null);
    };
    
    const onDelete = (userId, groupId) => {
        setOpen(true);
        setData({ userId, groupId });
    };

    React.useEffect(() => {
        async function fetchData() {
            const res = await fetch(api.getAllUsers).then(res => res.json());
            setGroups(_.groupBy(_.orderBy(res.users, ['active'], ['desc']), 'group_id'));
        }
        
        fetchData();
    }, []);

    if (!groups) return <Loader />;

    const debouncedSetFilter = _.debounce((input, key) => setFilter({ ...filter, [key]: input.target.value || undefined }), 500);

    return (
        <React.Fragment>
            <BanUserModal
                isOpen={isOpen}
                data={data}
                closeModal={closeModal}
            />
            <label htmlFor="filter_name">
              Filtro Nome
            </label><input type="text" onChange={event => {
              event.persist();
              return debouncedSetFilter(event, "user.name"); }} name="filter_name"/>
            <label htmlFor="filter_number">
              Filtro Número 
            </label><input type="text" onChange={event => {
              event.persist();
              debouncedSetFilter(event, "phone_number"); }} name="filter_number"/>
            <button className="button is-primary" onClick={() => setFilter({ ...filter, active: true })}>Filtrar ativos</button>
            <button className="button is-danger" onClick={() => setFilter({ ...filter, active: false })}>Filtrar inativos</button>
            <button className="button" onClick={() => setFilter({ ...filter, active: undefined })}>Mostrar ativos e inativos</button>
            <button className="button" onClick={() => setFilter({})}>Limpar</button>
            {_.map(groups, (users, key) => {
                return (
                    <React.Fragment key={key}>
                        <CollapsibleTable
                            users={users}
                            groupId={key}
                            onDelete={onDelete}
                            filter={filter}
                        />
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
}

const Trigger = (productName) => (opened) => (
    <span className="trigger-container">
        {productName}
        {opened ? <MdArrowUpward /> : <MdArrowDownward />}
    </span>
);

const CollapsibleTable = ({
    groupId,
    users,
    filter,
    onDelete
}) => {
    const productName = groupId === '-1001241265705' ? 'COMUNIDADE TOPMAC DE SINAIS E ACOMPANHAMENTOS' : 'Grupo de teste';
    const classname = "container has-background-info has-text-white";
    return (
        <Collapsible
            className={classname}
            openedClassName={classname}
            contentOuterClassName={"has-background-white"}
            trigger={Trigger(productName)(false)}
            triggerWhenOpen={Trigger(productName)(true)}
            key={groupId}>
            <GroupTable users={users} id={groupId} onDelete={onDelete} filter={filter} />
        </Collapsible>
    )
};

const applyFilter = (user, _filters) => {
  const filters = _.reduce(_filters, (acc, value, index) => {
    if (value === undefined) {
      delete acc[index];
    }
    return acc;
  }, _filters);
  return Object.keys(filters).length === 0 ? true : Object.keys(filters).some(filterKey => _.isBoolean(_.get(user, filterKey)) ? filters[filterKey] === _.get(user, filterKey) : _.get(user, filterKey) && _.get(user, filterKey).toLowerCase().includes((filters[filterKey] || "").toLowerCase()));
};

const GroupTable = ({ users, id, filter, onDelete }) => {
  return (
        <div className="container">
            <table className="table group-table">
                <thead>
                    <tr>
                        <th>nome</th>
                        <th>telefone</th>
                        <th>estado</th>
                        <th>ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.filter(user => applyFilter(user, filter) && !user.removed).map(({ phone_number, active, user_id, user }) => {
                        return (
                            <tr key={user_id}>
                                <td>{user ? user.name : ''}</td>
                                <td>{phone_number}</td>
                                <td><span className={`tag ${active ? 'is-success' : 'is-danger'}`}>{active ? 'ativo' : 'inativo'}</span></td>
                                <td>
                                    <MdRemoveCircle
                                        className="icon"
                                        onClick={() => onDelete(user_id, id)} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Management;
