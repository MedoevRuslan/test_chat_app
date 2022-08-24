import React from "react"
import { Navigate } from 'react-router-dom'

export const withAuth = (Component) => {
    const AuthComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/login' />
        return <Component {...props}/>
    }
}