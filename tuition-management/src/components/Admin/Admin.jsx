import React from 'react';
import { useCookies } from 'react-cookie';

const Admin = () =>{

    const [cookies, setCookie] = useCookies(['user']);

    return(
        <h1>Admin</h1>
        
    )
}

export default Admin;