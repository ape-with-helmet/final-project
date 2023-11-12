//import { get } from "mongoose";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Profilepage.css'

function ProfilePage() {
    const navigate = useNavigate()
    const [edata, setedata] = useState('');
    const [pdata, setpdata] = useState('');
    const [mdata, setmdata] = useState('');
    const auth = localStorage.getItem('loginData');
    const email = auth;
    useEffect(() => {
        submit();
    },[])
    let logout = async (e) => {
        e.preventDefault()
        alert("Logged out")
        navigate('/login');
        localStorage.clear();
    }
    let delUser = async (e) => {
        e.preventDefault();
        try {
            const repo = await axios.post('http://localhost:8080/delete',{
                email
            })
            alert(repo.data.messsage)
            localStorage.clear();
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }
    let submit = async () => {
        try {
            console.log(auth)
            const response = await axios.post("http://localhost:8080/userFind", {
                auth
            })
            setmdata(response.data.mobile)
            setedata(response.data.email)
            setpdata(response.data.password)
            console.log(mdata)
            console.log(edata)
            console.log(pdata)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <body className="yerkeri">
                <div className="row">
                    <div className="container gargantula">
                        <div className='profile-card'>
                            <div className="card-header-prof">
                                <h5 className="yagayaga">Your Profile</h5>
                            </div>
                            <div className='card-body-prof'>
                                <h7 className="wordshofty">Email: {edata}</h7><br />
                                <h7 className="wordshofty">Password: {pdata}</h7><br />
                                <h7 className="wordshofty">Mobile: {mdata}</h7>
                            </div>
                            <button onClick={logout} className='delete-button'>Log out</button>
                            <button onClick={delUser} className='delete-button'>Delete Account</button>
                        </div>
                    </div>
                </div></body>
        </>
    )
}

export default ProfilePage