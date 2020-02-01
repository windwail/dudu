import React, {useContext, useEffect, useState} from 'react';
import $ from 'jquery';
import LoginModal from "./LoginModal";
import {Link} from "react-router-dom";
import {Context} from "../context";
import {LOGOUT} from "../actions/actionTypes";
import Register from "./Register";


function Navbar() {

    const {store, dispatch} = useContext(Context);

    let [login, showLogin] = useState(false);
    let [register, showRegister] = useState(false);

    let burgerRef = React.createRef();
    let navbarMenuRef = React.createRef();

    const handleClick = () => {
        burgerRef.current.classList.toggle("is-active");
        navbarMenuRef.current.classList.toggle("is-active");
    }

    const logOut = () => {
        dispatch({ type: LOGOUT })
    }

    return (<>

            <nav className="navbar is-dark has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample" ref={burgerRef} onClick={handleClick}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu" ref={navbarMenuRef}>
                    <div className="navbar-start has-text-weight-normal">

                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/courses" className="navbar-item">Courses</Link>

                        {store.user && store.user.roles && store.user.roles.indexOf("admin") >= 0 &&
                        <Link to="/admin" className="navbar-item">Admin</Link>
                        }

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider"/>
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">

                        {store.user &&
                        <div className="navbar-item">

                            <div className="navbar-item is-hoverable">
                                <span className="has-text-grey-lighter"> Logged as {store.user.sub} </span>
                            </div>

                            <button className="button is-light" onClick={logOut}>
                                Log out
                            </button>
                        </div>
                        }

                        {!store.user &&
                        <>
                            <div className="navbar-item">
                                <div className="buttons">
                                    <button className="button is-primary" onClick={() => showRegister(true)}>
                                        Sign up
                                    </button>
                                    <button className="button is-light" onClick={() => showLogin(true)}>
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                </div>
            </nav>

            <LoginModal active={login} close={() => showLogin(false)}/>
            <Register active={register} close={() => showRegister(false)}/>

        </>
    );
}

export default Navbar;