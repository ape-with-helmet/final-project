import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import axios from 'axios'

const Adminacess = () => {
    const authority = localStorage.getItem('loginData');
    const [admin, setAdmin] = useState(true);
    const [email, setedata] = useState(authority);
    useEffect(()=>{
        auth2()
        setedata(authority)
    })
    const auth2 = async () => {
        try {
            console.log(authority,"WHATEVER")
            const response = await axios.post("http://localhost:8080/userFind", {
                email
            })
            console.log("NOT HANNINGJONFDJN",response.data.admin)
            setAdmin(response.data.admin)
            console.log(admin,"lol")

        } catch (error) {
            console.log(error);
        }
    }
    console.log("Checking admin access: ", admin)
    return admin ? <Outlet /> : <Navigate to='' />
}

export default Adminacess