import React, {useEffect} from 'react';

function Modal({active, close}) {

    return (
        <>
            <div id="modal-ter" className={`modal ${ active ? 'is-active' : ''}`} >
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modal title</p>
                        <button className="delete" aria-label="close" onClick={ close }></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="content">


                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                        <button className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Modal;
