import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () =>{

    const err = useRouteError();
    console.log(err);
    
    return(
        <>
        <h1>Error was found</h1>
        
        <h2>{err.status} : {err.statusText}</h2>
        </>
        
    );
}

export default ErrorPage;