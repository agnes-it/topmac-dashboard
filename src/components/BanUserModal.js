import React from 'react';
import Modal from 'react-modal';
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
const groupBan = (user, group) => console.log(user, group);

const BanUserModal = ({ isOpen, closeModal, data }) => {
    const banMember = () => {
        const username = _.get(data, 'username', '');
        // TODO: make groupId available here
        const groupId = _.get(data, 'groupId');
        groupBan(username, groupId);
        closeModal();
    };

    return (
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
    );
}

export default BanUserModal;