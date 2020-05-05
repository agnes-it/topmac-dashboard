import React from 'react';
import Collapsible from 'react-collapsible';
import BanUserModal from './BanUserModal';
import {
    MdArrowDownward,
    MdArrowUpward,
    MdDelete
} from 'react-icons/md';
import Loader from './Loader';
import _ from 'lodash';
import { api } from '../config.json';

const mockData = [
    {
        productId: 1,
        productName: "TOPMAC DIGITAL PRODUTO 1",
        users: [
            { username: "netoguimaraes", status: "active" },
            { username: "stefan", status: "delayed" },
            { username: "vbarcelos", status: "expired" },
            { username: "neto2", status: "canceled" },
        ]
    },
    {
        productId: 2,
        productName: "TOPMAC DIGITAL PRODUTO 2",
        users: [
            { username: "netoguimaraes", status: "active" },
            { username: "stefan", status: "delayed" },
            { username: "vbarcelos", status: "expired" },
            { username: "neto2", status: "canceled" },
        ]
    },
    {
        productId: 3,
        productName: "TOPMAC DIGITAL PRODUTO 3",
        users: [
            { username: "netoguimaraes", status: "active" },
            { username: "stefan", status: "delayed" },
            { username: "vbarcelos", status: "expired" },
            { username: "neto2", status: "canceled" },
        ]
    }
];

const Management = props => {
    const [ isOpen, setOpen ] = React.useState(false);
    const [ data, setData ] = React.useState(null);
    const [ groups, setGroups ] = React.useState(null);
    
    const closeModal = () => {
        setOpen(false);
        setData(null);
    };
    
    const onDelete = (username, productId) => {
        setOpen(true);
        setData({ username, productId });
    };

    React.useEffect(() => {
        async function fetchData() {
            const res = await fetch(api.getAllUsers).then(res => res.json());
            setGroups(_.groupBy(res.users, 'group_id'));
        }
        
        fetchData();
    }, [setGroups]);

    if (!groups) return <Loader />;

    return (
        <React.Fragment>
            <BanUserModal
                isOpen={isOpen}
                data={data}
                closeModal={closeModal}
            />
            {_.map(groups, (users, key) => {
                return (
                    <React.Fragment key={key}>
                        <CollapsibleTable
                            users={users}
                            groupId={key}
                            onDelete={onDelete}
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
            <GroupTable users={users} id={groupId} onDelete={onDelete} />
        </Collapsible>
    )
};

const GroupTable = ({ users, id, onDelete }) => {
    return (
        <div className="container">
            <table className="table group-table">
                <thead>
                    <tr>
                        <th>usuário</th>
                        <th>estado</th>
                        <th>ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ phone_number, active }) => (
                        <tr key={phone_number}>
                            <td>{phone_number}</td>
                            <td><span className={`tag ${active ? 'is-success' : 'is-danger'}`}>{active ? 'ativo' : 'inativo'}</span></td>
                            <td>
                                <MdDelete
                                    className="icon"
                                    onClick={() => onDelete(phone_number, id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Management;