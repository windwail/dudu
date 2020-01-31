import React, {useEffect} from 'react';
import $ from 'jquery';
import EditorJs from 'react-editor-js';
import Editor from "./Editor";


function App() {


    let burgerRef = React.createRef();
    let navbarMenuRef = React.createRef();

    const handleClick = () => {
        burgerRef.current.classList.toggle("is-active");
        navbarMenuRef.current.classList.toggle("is-active");
    }

    return (
        <>
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
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


            <div className="container ">
                <div className="section">
                    <h3 className="ce-header">Контент вопроса</h3>
                    <Editor holder="my-editor-1"/>
                </div>

                <div className="section">
                    <h3 className="ce-header">Контент вопроса</h3>
                    <Editor holder="my-editor-2"/>

                    <h3 className="ce-header">Контент вопроса</h3>
                    <div className="control">
                        <textarea className="textarea" placeholder="Textarea"></textarea>
                    </div>

                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox"/>
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question"/>
                                Yes
                            </label>
                            <label className="radio">
                                <input type="radio" name="question"/>
                            </label>
                        </div>
                    </div>

                    <div className="buttons has-addons">
                        <button className="button">Yes</button>
                        <button className="button">Maybe</button>
                        <button className="button">No</button>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default App;
