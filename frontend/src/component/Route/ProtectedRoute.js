import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
    // const location = useLocation();
    const { loading, isAuthenticated } = useSelector(state => state.user);
    return (
        <Fragment>
            {!loading && (
                !isAuthenticated ? <Navigate to="/login" replace /> : <Outlet />
            )}
        </Fragment>
    )
}

export default ProtectedRoute

// || (isAdmin && user.role !== 'admin') ? <Navigate to="/login" /> :
// ((!isAuthenticated) ? <Navigate to="/login" /> : <Outlet />)
// &&
// ((isAdmin === true && user.role !== "admin") ? <Navigate to="/login" /> : <Outlet />)

/* (() => {
    if (isAuthenticated === false) {
        return <Navigate to="/login" replace />;
    }
    if ((user.role !== "admin")) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />
})() */