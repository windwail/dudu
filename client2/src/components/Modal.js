import React, {useEffect} from 'react';

function Modal({active, close}) {

    return (
        <>
            <div id="modal-ter" className={`modal ${ active ? 'is-active' : ''}`} >
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Login</p>
                        <button className="delete" aria-label="close" onClick={ close }></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="content">

                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="email" placeholder="Login"/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="password" placeholder="Password"/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Login</button>
                        <button className="button" onClick={close}>Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Modal;
