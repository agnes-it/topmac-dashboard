import React from 'react';

const EditMessages = ({ shouldWarn, setShouldWarn }) => {
    const onChange = () => {
        if (!shouldWarn) setShouldWarn(true);
    }

    return (
        <div className="form container has-text-left ">
            <form onChange={onChange} className="is-left" action="" method="get">
                <h1 className="title">Geral:</h1>
                <div className="field">
                    <label className="label">Usuários Blindados (separados por vírgula)</label>
                    <div className="control">
                        <textarea name="whitelist" id="whitelist" className="textarea" type="text" placeholder="insira aqui seu text" />
                    </div>
                </div>
                <hr />
                <h1 className="title">Mensagens:</h1>
                <div className="field">
                    <label className="label">Início da autenticação</label>
                    <div className="control">
                        <textarea name="start_message" id="start_message" className="textarea" type="text" placeholder="insira aqui seu text" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Boas vindas</label>
                    <div className="control">
                        <textarea name="greetings" id="greetings" className="textarea" type="text" placeholder="insira aqui seu text" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Contato recebido</label>
                    <div className="control">
                        <textarea name="received" id="received" className="textarea" type="text" placeholder="insira aqui seu text" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Sobrescrever contato</label>
                    <div className="control">
                        <textarea name="override" id="override" className="textarea" type="text" placeholder="insira aqui seu text" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">limite de tempo excedido</label>
                    <div className="control">
                        <textarea name="exceeded_timeout" id="exceeded_timeout" className="textarea" type="text" placeholder="insira aqui seu text" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">número ativo</label>
                    <div className="control">
                        <textarea name="active_number" id="active_number" className="textarea" type="text" placeholder="insira aqui seu text" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">número inativo</label>
                    <div className="control">
                        <textarea name="inactive_number" id="inactive_number" className="textarea" type="text" placeholder="insira aqui seu text" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">fim do tempo limite</label>
                    <div className="control">
                        <textarea name="end_of_timeout" id="end_of_timeout" className="textarea" type="text" placeholder="insira aqui seu text" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">botão de compartilhamento de número</label>
                    <div className="control">
                        <textarea name="shared_button" id="shared_button" className="textarea" type="text" placeholder="insira aqui seu text" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">problemas na assinatura</label>
                    <div className="control">
                        <textarea name="cancel_association" id="cancel_association" className="textarea" placeholder="insira aqui seu text" />
                    </div>
                </div>

                <h1 className="title">Timeouts: <small className="is-size-5 has-text-weight-light">(valores em segundos)</small></h1>
                <div className="field">
                    <label className="label">tempo limite para recebimento do número</label>
                    <div class="control">
                        <input className="input" name="timeout_receive" id="timeout_receive" type="text" placeholder="Text input" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">tempo limite para bloqueio de usuário</label>
                    <div class="control">
                        <input className="input" name="timeout_block" id="timeout_block" type="text" placeholder="Text input" />
                    </div>
                </div>

                <br />
                <br />

                <button className="button is-link" type="submit">Salvar todas as modificações</button>
            </form>
        </div>
    );
};

export default EditMessages;