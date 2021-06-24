import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserLoginContext } from '../Context/UserLoginContext';


const PrivateRoute = ({ children, ...rest }) => {

    const {loginUser} = useContext(UserLoginContext);

    const urlPathName = children.type.name;
    //console.log("urlPathName : " , urlPathName);

    // in local host its works ok |
    // but after firebase hosting... link name weirdly change

    let role;
    if (urlPathName === '' || urlPathName === 'A_OrderList') {
        role = 'admin';
    } else if (urlPathName === 'V' || urlPathName === 'A_Service') {
        role = 'client';
    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                (loginUser.name || loginUser.email || sessionStorage.getItem('token')) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: `/login/${role}`,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;