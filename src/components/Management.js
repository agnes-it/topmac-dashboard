import React from 'react';
import Collapsible from 'react-collapsible';
import BanUserModal from './BanUserModal';
import {
    MdArrowDownward,
    MdArrowUpward,
    MdDelete
} from 'react-icons/md';

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
    
    const closeModal = () => {
        setOpen(false);
        setData(null);
    };
    
    const onDelete = (username, productId) => {
        setOpen(true);
        setData({ username, productId });
    };

    return (
        <React.Fragment>
            <BanUserModal
                isOpen={isOpen}
                data={data}
                closeModal={closeModal}
            />
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