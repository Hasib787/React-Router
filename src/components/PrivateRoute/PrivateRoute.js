import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    return (
        <div>
            {
                auth ? children : <Navigate to="/login"/>
            }
        </div>
    );
};

export default PrivateRoute;