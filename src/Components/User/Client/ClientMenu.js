import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../CommonHeader.css';
import persona from '../../../img/persona.png';
import service from '../../../img/client/service.png';
import service_list from '../../../img/client/service_list.png';
import review from '../../../img/client/review.png';
import logout from '../../../img/client/logout.png';
import { UserLoginContext } from '../../Context/UserLoginContext';



const ClientMenu = () => {

    const { setLoginUser } = useContext(UserLoginContext);

    const handleLogOut = () => {
        setLoginUser({})
        sessionStorage.clear('token');
    }

    return (

        <header className="commonHeading">

            <div className="logo">
                <Link to="/">
                    <img src={persona} alt="" />
                </Link>
            </div>

            <nav className="admin_menu_list">

                <Link to='/client/service'>
                    <img src={service} className="client_link_icon" alt="" />
                    <span>Service</span>
                </Link>

                <Link to='/client/service_list'>
                    <img src={service_list} className="client_link_icon" alt="" />
                    <span>Service List</span>
                </Link>

                <Link to='/client/review'>
                    <img src={review} className="client_link_icon" alt="" />
                    <span>Review</span>
                </Link>

                <Link onClick={handleLogOut} >
                    <img src={logout} className="client_link_icon" alt="" />
                    <span>Logout</span>
                </Link>

            </nav>

        </header>
    );
};

export default ClientMenu;