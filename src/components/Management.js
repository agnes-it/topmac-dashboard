import React from 'react';
import Collapsible from 'react-collapsible';
import Modal from 'react-modal';
import {
    MdArrowDownward,
    MdArrowUpward,
    MdDelete
} from 'react-icons/md';
import _ from 'lodash';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
    },
};

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

const groupBan = (user, group) => console.log(user, group);

const Management = props => {
    const [ isOpen, setOpen ] = React.useState(false);
    const [ data, setData ] = React.useState(null);
    
    const closeModal = () => {
        setOpen(false);
        setData(null);
    };
    
    const onDelete = (username, productId) => {
        setOpen(true);
        setData({ username, productId });
    };
    
    const banMember = () => {
        const username = _.get(data, 'username', '');
        // TODO: make groupId available here
        const groupId = _.get(data, 'groupId');
        groupBan(username, groupId);
        closeModal();
    };

    return (
        <React.Fragment>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                shouldCloseOnOverlayClick
            >
                <h2>{`Descreva para o usuario o motivo do banimento`}</h2>
                <div className="control reason">
                    <textarea className="textarea"></textarea>
                </div>
                <div className="action-buttons">
                    <button onClick={banMember} className="button is-primary">Confirmar</button>
                    <button onClick={closeModal} className="button is-secondary">Cancelar</button>
                </div>
            </Modal>
            {mockData.map(group => {
                return (
                    <React.Fragment key={group.productId}>
                        <CollapsibleTable
                            {...group}
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
    productId,
    productName,
    users,
    onDelete
}) => {
    const classname = "container has-background-info has-text-white";
    return (
        <Collapsible
            className={classname}
            openedClassName={classname}
            contentOuterClassName={"has-background-white"}
            trigger={Trigger(productName)(false)}
            triggerWhenOpen={Trigger(productName)(true)}
            key={productId}>
            <GroupTable users={users} id={productId} onDelete={onDelete} />
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
                    {users.map(({ username, status }) => (
                        <tr key={username}>
                            <td>{username}</td>
                            <td><span className={`tag ${status.toLowerCase() === 'active' ? 'is-success' : 'is-danger'}`}>{status}</span></td>
                            <td>
                                <MdDelete
                                    className="icon"
                                    onClick={() => onDelete(username, id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Management;