import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Outlet, Navigate } from 'react-router-dom';
const PrivateOutlet = () => {
    const auth = useAuth();
    return (
        <div>
            {
                auth ? <Outlet />: <Navigate to="/login"/>
            }
        </div>
    );
};

export default PrivateOutlet;