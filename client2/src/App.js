import React, {useEffect} from 'react';
import $ from 'jquery';

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





            <div className="container">
                <p>Topics</p>
            </div>

            <div className="container">
                <div className="card">
                    <header className="card-header has-background-info ">
                        <p className="card-header-title has-text-white-ter">
                            Component
                        </p>
                        <a href="#" className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Save</a>
                        <a href="#" className="card-footer-item">Edit</a>
                        <a href="#" className="card-footer-item">Delete</a>
                    </footer>
                </div>

            </div>





            <div className="container">
                <div className="card">
                    <header className="card-header has-background-info ">
                        <p className="card-header-title has-text-white-ter">
                            Component
                        </p>
                        <a href="#" className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Save</a>
                        <a href="#" className="card-footer-item">Edit</a>
                        <a href="#" className="card-footer-item">Delete</a>
                    </footer>
                </div>

            </div>






            <div className="container">
                <div className="card">
                    <header className="card-header has-background-info ">
                        <p className="card-header-title has-text-white-ter">
                            Component
                        </p>
                        <a href="#" className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Save</a>
                        <a href="#" className="card-footer-item">Edit</a>
                        <a href="#" className="card-footer-item">Delete</a>
                    </footer>
                </div>

            </div>






            <div className="container">
                <div className="card">
                    <header className="card-header has-background-info ">
                        <p className="card-header-title has-text-white-ter">
                            Component
                        </p>
                        <a href="#" className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Save</a>
                        <a href="#" className="card-footer-item">Edit</a>
                        <a href="#" className="card-footer-item">Delete</a>
                    </footer>
                </div>

            </div>





            <div className="container">
                <div className="card">
                    <header className="card-header has-background-info ">
                        <p className="card-header-title has-text-white-ter">
                            Component
                        </p>
                        <a href="#" className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Save</a>
                        <a href="#" className="card-footer-item">Edit</a>
                        <a href="#" className="card-footer-item">Delete</a>
                    </footer>
                </div>

            </div>






            <div className="container">
                <div className="card">
                    <header className="card-header has-background-info ">
                        <p className="card-header-title has-text-white-ter">
                            Component
                        </p>
                        <a href="#" className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Save</a>
                        <a href="#" className="card-footer-item">Edit</a>
                        <a href="#" className="card-footer-item">Delete</a>
                    </footer>
                </div>

            </div>


        </>
    );
}

export default App;
