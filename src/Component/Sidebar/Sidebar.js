import React, { useContext,useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Sidebar.css'
const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://morning-caverns-13555.herokuapp.com/checkAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    return (
        <div className='d-flex flex-column justify-content-between col-md-2 py-5 px-4 sidebar text-white' style={{ height: '100vh' }}>
            <ul className='list-unstyled'>
                <li className='mb-3 text-center'>
                    <Link to='/admin' className='text-white'>
                        Dashboard
                    </Link>
                </li>
                <li className='mb-3 text-center'>
                    <Link to='/appointment' className='text-white'>
                        Appointment
                    </Link>
                </li>
                <li className='mb-3 text-center'>
                    <Link to='/shop' className='text-white'>
                        Shop
                    </Link>
                </li>

                <li className='mb-3 text-center'>
                    <Link to='/review' className='text-white'>
                        Review
                    </Link>
                </li>
                {isAdmin.length>0 &&
                    <div>
                    <li className='mb-3 text-center'>
                        <Link to='/addServiceAndOffer' className='text-white'>
                            Add Service,Order and Product
                        </Link>
                    </li>
                    <li className='mb-3 text-center'>
                        <Link to='/allOrder' className='text-white'>
                            Order List
                        </Link>
                    </li>
                    <li className='mb-3 text-center'>
                        <Link to='/makeAdmin' className='text-white'>
                            Make admin
                        </Link>
                    </li>
                    <li className='mb-3 text-center'>
                        <Link to='/manageService' className='text-white'>
                            Manage Service
                        </Link>
                    </li>
                </div>
                }
                
            </ul>
            <div className='mb-5 text-center'>
                <Link to='/' className='text-white'>Log out</Link>
            </div>
        </div>
    );
};

export default Sidebar;