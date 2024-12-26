import React from 'react'
import { useRouteError } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    const err = useRouteError();
    const goBackHome = () =>{
        navigate("/");
    }
    return (
        <div className="error-container">
            <h1 className="error-code">{err.status}</h1>
            <h2 className="error-message">Oops! Page Not Found</h2>
            <p className="error-description">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <button className="error-button" onClick={goBackHome}>
                Go Back Home
            </button>
        </div>
    )
}

export default Error