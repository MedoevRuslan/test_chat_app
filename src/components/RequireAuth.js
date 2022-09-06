import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import Login from './Login';

function RequireAuth({children}) {

    const isAuth = useSelector(({auth}) => auth.isAuth);

    if (!isAuth) return <Navigate to='/login'  />

    return children
}

export default RequireAuth;