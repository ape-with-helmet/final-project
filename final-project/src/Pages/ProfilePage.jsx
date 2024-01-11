//import { get } from "mongoose";
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Profilepage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

const auth = localStorage.getItem('loginData');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function ProfilePage() {
    const navigate = useNavigate()
    const [email, setedata] = useState(auth);
    const [password, setpdata] = useState('');
    const [mobile, setmdata] = useState('');
    const [username, setUsername] = useState('');
    const [admin, setAdmin] = useState(false);
    const ref = useRef(null)
    useEffect(() => {
        submit();
    })
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
    function CheckAdmin() {
        if (admin) {
            return <button type="button" className="btn btn-danger btn-lg px-4 me-md-2" onClick={movetoproducts}>Add Products</button>;
        }
        else {
            return <button type="button" className="btn btn-danger btn-lg px-4 me-md-2" onClick={delUser}>Delete Account</button>;
        }
    }
    function movetoproducts(){
        navigate('/addProd')
    }
    let adminadd = async (e) => {
        navigate('/login');
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
            setUsername(response.data.username)
            setAdmin(response.data.admin)
            console.log(mobile)
            console.log(email)
            console.log(password)
            console.log(username)

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <LoadingBar color='#f11946' ref={ref} />
            {/* <body className="yerkeri">
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
            </body> */}
            <div className="container">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/020/911/747/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Your Profile</h1>
                        {/* <p className="lead">Username: <span className="leadert">{username}</span><br/>Email: <span className="leadert">{email}</span><br/>Password: {password}<br/>Mobile: {mobile}</p> */}
                        <table>
                            <tr>
                                <th>Username</th>
                                <tb className='leadert'>: {username}</tb>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <tb className='leadert'>: {email}</tb>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <tb className='leadert'>: {password}</tb>
                            </tr>
                            <tr>
                                <th>Mobile</th>
                                <tb className='leadert'>: {mobile}</tb>
                            </tr>
                        </table>
                        <br />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <CheckAdmin/>
                            <button type="button" className="btn btn-outline-danger btn-lg px-4" onClick={logout}>Logout</button>
                        </div>

                    </div>
                </div>
            </div>
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