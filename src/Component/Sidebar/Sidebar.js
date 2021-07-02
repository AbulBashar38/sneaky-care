import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faUserMd, faStoreAlt, faCommentAlt, faPlusSquare, faListAlt, faUserPlus, faCogs, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState([])
    const [openBar, setOpenBar] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://morning-caverns-13555.herokuapp.com/checkAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    const style ={
        border:'5px solid red'
    }
    return (
        <div className='sidebar' style={openBar?{width: '200px',overflow:'scroll'}:{width:'70px'}}>
            <div className='d-flex flex-column justify-content-between py-5 px-3 text-white text-center' style={{height: '100vh'}}>
                <div className="logo-container">
                    <div style={openBar===false?{display:'none'}:{display:'block'}} className="logo-name">
                       <Link to='/home'> Sneaky Care</Link>
                    </div>
                    <FontAwesomeIcon id='menuBtn' onClick={()=>setOpenBar(!openBar)} icon={faBars} />
                </div>
                <ul className='list-unstyled'>
                    <li className='mb-2'>
                        <Link to='/admin' className='text-white'>
                            <FontAwesomeIcon className='font-icon' icon={faBorderAll} /> <span style={openBar===false?{display:'none'}:{display:'block'}}>Dashboard</span>
                        </Link>
                        <span className='toltip' style={openBar?{display:'none'}:{}} >Dashboard</span>
                    </li>
                    <li className='mb-2 '>
                        <Link to='/appointment' className='text-white'>
                            <FontAwesomeIcon className='font-icon' icon={faUserMd} /> <span style={openBar===false?{display:'none'}:{display:'block'}}>Appointment</span>
                        </Link>
                        <span style={openBar?{display:'none'}:{}} className='toltip'>Appointment</span>

                    </li>
                    <li className='mb-2 '>
                        <Link to='/shop' className='text-white'>
                            <FontAwesomeIcon className='font-icon' icon={faStoreAlt} /> <span style={openBar===false?{display:'none'}:{display:'block'}}>Shop</span>
                        </Link>
                        <span style={openBar?{display:'none'}:{}}  className='toltip'>Shop</span>
                    </li>

                    <li className='mb-2 '>
                        <Link to='/review' className='text-white'>
                            <FontAwesomeIcon className='font-icon' icon={faCommentAlt} /> <span style={openBar===false?{display:'none'}:{display:'block'}}> Review</span>
                        </Link>
                        <span style={openBar?{display:'none'}:{}}  className='toltip'>Review</span>
                    </li>
                    {isAdmin.length > 0 &&
                        <div>
                            <li className='mb-2 '>
                                <Link to='/addServiceAndOffer' className='text-white'>
                                    <FontAwesomeIcon className='font-icon' icon={faPlusSquare} /> <span style={openBar===false?{display:'none'}:{display:'block'}}> Add to Database</span>
                                </Link>
                                <span className='toltip' style={openBar?{display:'none'}:{}} >Add</span>
                            </li>
                            <li className='mb-2 '>
                                <Link to='/allOrder' className='text-white'>
                                    <FontAwesomeIcon className='font-icon' icon={faListAlt} /> <span style={openBar===false?{display:'none'}:{display:'block'}}>  Order List</span>
                                </Link>
                                <span className='toltip' style={openBar?{display:'none'}:{}} > Order</span>
                            </li>
                            <li className='mb-2 '>
                                <Link to='/makeAdmin' className='text-white'>
                                    <FontAwesomeIcon className='font-icon' icon={faUserPlus} /> <span style={openBar===false?{display:'none'}:{display:'block'}}>Make admin</span>
                                </Link>
                                <span className='toltip' style={openBar?{display:'none'}:{}} >admin</span>
                            </li>
                            <li className='mb-2 '>
                                <Link to='/manageService' className='text-white'>
                                    <FontAwesomeIcon className='font-icon' icon={faCogs} /><span style={openBar===false?{display:'none'}:{display:'block'}}>Manage Service</span> 
                                </Link>
                                <span className='toltip' style={openBar?{display:'none'}:{}} >Manage</span>
                            </li>
                        </div>
                    }

                </ul>
                <div className='mb-5 logOut'>
                    <Link to='/' className='text-white'><FontAwesomeIcon className='font-icon' icon={faSignOutAlt} /><span style={openBar===false?{display:'none'}:{display:'block'}}> Log out</span></Link>
                    <span className='toltip' style={openBar?{display:'none'}:{}} >LogOut</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;