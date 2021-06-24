import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {

    return (
        <div className="error_info_container">
            <h1>404 | Page Not Found</h1>
            <Link to='/'>Click Me - For Go To Home Page</Link>
        </div>
    );

};

export default PageNotFound;