//import { get } from "mongoose";
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Profilepage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ProfilePage() {
    const navigate = useNavigate()
    const auth = localStorage.getItem('loginData');
    const [email, setedata] = useState(auth);
    const [password, setpdata] = useState('');
    const [mobile, setmdata] = useState('');
    const ref = useRef(null)
    useEffect(() => {
        submit();
    }, [])
    let logout = async (e) => {
        e.preventDefault()
        ref.current.continuousStart()
        //alert(repo.data.messsage)
        localStorage.clear();
        toast.success("Success logout");
        sleep(2000).then(() => { ref.current.complete(); });
        setTimeout(() => {
            navigate('/login');
        }, 3000);
    }
    let delUser = async (e) => {
        e.preventDefault();
        try {
            const repo = await axios.post('http://localhost:8080/delete', {
                email
            })
            ref.current.continuousStart()
            //alert(repo.data.messsage)
            localStorage.clear();
            toast.success(repo.data.message);
            sleep(2000).then(() => { ref.current.complete(); });
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }
    let submit = async () => {
        try {
            console.log(auth)
            const response = await axios.post("http://localhost:8080/userFind", {
                email
            })
            setmdata(response.data.mobile)
            setedata(response.data.email)
            setpdata(response.data.password)
            console.log(mobile)
            console.log(email)
            console.log(password)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <LoadingBar color='#f11946' ref={ref} />
            <body className="yerkeri">
                <div className="row">
                    <div className="container gargantula">
                        <div className='profile-card'>
                            <div className="card-header-prof">
                                <h5 className="yagayaga">Your Profile</h5>
                            </div>
                            <div className='card-body-prof'>
                                <h7 className="wordshofty">Email: {email}</h7><br />
                                <h7 className="wordshofty">Password: {password}</h7><br />
                                <h7 className="wordshofty">Mobile: {mobile}</h7>
                            </div>
                            <button onClick={logout} className='delete-button'>Log out</button>
                            <button onClick={delUser} className='delete-button'>Delete Account</button>
                        </div>
                    </div>
                </div>
            </body>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                limit={4}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default ProfilePage