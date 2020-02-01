import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../context';
import auth from "../services/auth";
import {LOGIN} from "../actions/actionTypes";
import register from "../services/register";

function Register({active, close}) {

    const {store, dispatch} = useContext(Context);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [spin, setSpin] = useState(false);

    const doClose = () => {
        // clear
        setError("");
        setSuccess(false);
        setUsername("");
        setPassword("");
        setEmail("");
        setSpin(false);

        close();
    }

    const doRegister = () => {
        setSpin(true);
        setError("");

        register({
            username,
            password,
            email,
            success: (user) => {
                setPassword("");
                setSpin(false);
                setSuccess(true);

            },
            error: (e) => {
                setSpin(false);
                setError(e);
            }
        }, dispatch);
    }

    return (
        <>
            <div id="modal-ter" className={`modal ${active ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Register</p>
                        <button className="delete" aria-label="close" onClick={doClose}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="content">

                            {error &&
                            <div className="field has-text-danger">
                                {error}
                            </div>
                            }

                            {success &&
                            <div className="field has-text-danger">
                                User registered!
                            </div>
                            }

                            {!success &&
                            <>
                                <div className="field is-horizontal">
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control">
                                                <input className="input" type="email" placeholder="Login"
                                                       onChange={(e) => setUsername(e.target.value)} value={username}/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control">
                                                <input className="input" type="email" placeholder="Email"
                                                       onChange={(e) => setEmail(e.target.value)} value={email}/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control">
                                                <input className="input" type="password" placeholder="Password"
                                                       onChange={(e) => setPassword(e.target.value)} value={password}/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                            }

                        </div>
                    </section>
                    <footer className="modal-card-foot">

                        {!success &&
                        <button className={`button is-success ${spin ? 'is-loading' : ''}`}
                                onClick={doRegister}>Register
                        </button>
                        }

                        <button className="button" onClick={doClose}>Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Register;
