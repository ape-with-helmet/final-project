import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import axios from 'axios'

const Adminacess = () => {
    const authority = localStorage.getItem('loginData');
    const [admin, setAdmin] = useState(false);
    const [email, setedata] = useState(authority);
    useEffect(()=>{
        auth2();
        setedata(authority)
    })
    const auth2 = async (e) => {
        try {
            console.log(authority)
            const response = await axios.post("http://localhost:8080/userFind", {
                email
            })
            setAdmin(response.data.admin)
            console.log(admin)

        } catch (error) {
            console.log(error);
        }
    }
    console.log("Checking admin access: ", admin)
    return admin ? <Outlet /> : <Navigate to='' />
}

export default Adminacess