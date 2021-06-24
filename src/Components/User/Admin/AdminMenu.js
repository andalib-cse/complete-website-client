import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../CommonHeader.css';
import persona from '../../../img/persona.png';
import checklist from '../../../img/admin/checklist.png';
import add_service from '../../../img/admin/plus.png';
import add_admin from '../../../img/admin/add_admin.png';
import manage_service from '../../../img/admin/edit.png';
import logout from '../../../img/admin/logout.png';
import { UserLoginContext } from '../../Context/UserLoginContext';



const AdminMenu = () => {

    const {setLoginUser} = useContext(UserLoginContext);

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

                <Link to='/admin/order_list' >
                    <img src={checklist} className="admin_link_icon" alt="" />
                    <span>OrderList</span>
                </Link>

                <Link to='/admin/add_service' >
                    <img src={add_service} className="admin_link_icon" alt="" />
                    <span>Add Service</span>

                </Link>

                {/* <Link to='' >
                    <img src={delete_service} className="admin_link_icon" alt="" />
                    <span>Delete Service</span>
                </Link> */}

                <Link to='/admin/make_admin'>
                    <img src={add_admin} className="admin_link_icon" alt="" />
                    <span>Make Admin</span>
                </Link>

                <Link to='/admin/manage_services'>
                    <img src={manage_service} className="admin_link_icon" alt="" />
                    <span>List of Users Service</span>
                </Link>

                <Link onClick={handleLogOut} >
                    <img src={logout} className="admin_link_icon" alt="" />
                    <span>Log-out</span>
                </Link>

            </nav>

        </header>
    );
};

export default AdminMenu;