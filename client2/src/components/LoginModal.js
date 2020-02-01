import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../context';
import auth from "../services/auth";

import jwt from 'jwt-decode';
import {LOGIN} from "../actions/actionTypes";

function LoginModal({active, close}) {

    const {store, dispatch} = useContext(Context);
    const [error, setError] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [spin, setSpin] = useState(false);

    const doLogin = () => {
        setSpin(true);
        setError("");
        auth({
            username,
            password,
            success: (user) => {
                setPassword("");
                setSpin(false);
                close();
                dispatch({ type: LOGIN, user});
            },
            error: (e) => {
                setSpin(false);
                setError(e);
            }
        }, dispatch);
    }

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

                            {error &&
                            <div className="field has-text-danger">
                                { error }
                            </div>
                            }

                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="email" placeholder="Login"
                                                   onChange={ (e) => setUsername(e.target.value) } value={username}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="password" placeholder="Password"
                                                   onChange={ (e) => setPassword(e.target.value) }
                                                   value={password}/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <footer className="modal-card-foot">


                        <button className={`button is-success ${ spin  ? 'is-loading' : ''}`}
                        onClick={doLogin}>Login</button>


                        <button className="button" onClick={close}>Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default LoginModal;
