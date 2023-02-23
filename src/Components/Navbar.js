import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



function Navbar(props) {
    return (
        <>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to='/home'>{props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">{props.Text}</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <link className={`nav-link dropdown-toggle text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More Menu + </link>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li> */}
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                            <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                <input className="form-check-input" onClick={props.mymodes} type="checkbox" role="switch" id="myswitch" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                            </div>


                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
Navbar.propTypes =
{
    title: PropTypes.string.isRequired,
    Text: PropTypes.string.isRequired
}

