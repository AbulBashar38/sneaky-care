import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory()
    const goLogin=()=>{
        history.replace('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5 text-color" to="/home"><strong>Sneaky Care</strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <Link className="nav-link text-color active" aria-current="page" to="/home"><strong>Home</strong></Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link to='/shop' className="nav-link text-color"><strong>Shop</strong></Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link to='/appointment' className="nav-link text-color"><strong>Appointment</strong></Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link to='/about' className="nav-link text-color"><strong>About us</strong></Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link to='/admin' className="nav-link text-color"><strong>Admin</strong></Link>
                        </li>
                    </ul>
                    <button className="btn btn-custom me-5" onClick={goLogin}>Login</button>
                </div>

            </div>
        </nav>
    );
};

export default Header;