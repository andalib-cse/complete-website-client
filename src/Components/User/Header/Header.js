import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { UserLoginContext } from '../../Context/UserLoginContext';


const Header = () => {

    const {loginUser} = useContext(UserLoginContext);
    const { name , email} = loginUser;

    const location = useLocation();
    const firstWord = location.pathname.slice(0, 6);

    let toggleClassName ;
    if(firstWord === '/admin'){
        toggleClassName = 'admin_name';
    } else {
        toggleClassName = 'client_name';
    }

    return (
        <div className="heading_title">
            
            <h2 className="titleText">{document.title}</h2>

            <h3 className={toggleClassName}>Hello {name} | {email} </h3>
            
        </div>
    );
};

export default Header;