import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { GetAuthUser } from '../helper/Storge';

const Guest = () => {
    const auth = GetAuthUser();
    return <>{!auth ? <Outlet /> : <Navigate to={"/home"} />}</>
};

export default Guest;