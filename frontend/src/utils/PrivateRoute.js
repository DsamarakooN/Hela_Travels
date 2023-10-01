import React, { useEffect } from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function PrivateRoute({ element: Component, ...rest }) {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            Swal.fire({
                title: "Oops...",
                text: "Please log in before accessing this page!",
                icon: "warning",
                button: "OK",
            });
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <Route {...rest} element={Component} />
    );
}

export default PrivateRoute;
