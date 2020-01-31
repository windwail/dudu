import React, {useEffect, useState} from 'react';
import $ from 'jquery';
import Modal from "./Modal";


function Navbar() {

    let [login, showLogin] = useState(false);

    let burgerRef = React.createRef();
    let navbarMenuRef = React.createRef();

    const handleClick = () => {
        burgerRef.current.classList.toggle("is-active");
        navbarMenuRef.current.classList.toggle("is-active");
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
                        <a className="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            Documentation
                        </a>

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
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <button className="button is-light" onClick={() => showLogin(true)}>
                                    Log in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Modal active={login} close={() => showLogin(false)}/>

        </>
    );
}

export default Navbar;