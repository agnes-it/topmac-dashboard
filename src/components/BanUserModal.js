import React from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import { api } from '../config.json';

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
const groupBan = async (userId, groupId, reason) => {
    await fetch(
        api.banUserById,
        {
            method: 'POST',
            body: JSON.stringify({ userId, groupId, reason })
        }
    ).then((res) => {
        console.log(res)
        if (res && res.data && !res.data.ok) {
            alert("problema ao deletar o usuario, contate o suporte!");
        } else {
            alert("usuario deletado com sucesso!");
            window.location.reload();
        }
    });
    console.log(userId, groupId);
}

const BanUserModal = ({ isOpen, closeModal, data }) => {
    const [ reason, setReason ] = React.useState(null);
    const banMember = () => {
        const userId = _.get(data, 'userId', '');
        // TODO: make groupId available here
        const groupId = _.get(data, 'groupId');
        groupBan(userId, groupId, reason);
        closeModal();
    };

    const onChange = event => {
        event.persist();
        setReason(event.target.value);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick
        >
            <h2>{`Descreva para o usuario o motivo do banimento`}</h2>
            <div className="control reason">
                <textarea onChange={onChange} className="textarea"></textarea>
            </div>
            <div className="action-buttons">
                <button onClick={banMember} className="button is-primary">Confirmar</button>
                <button onClick={closeModal} className="button is-secondary">Cancelar</button>
            </div>
        </Modal>
    );
}

export default BanUserModal;