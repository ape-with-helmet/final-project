import React, { useState, useRef, useEffect } from "react";
import './Signup.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [username, setUsername] = useState('');
    const navigate = useNavigate()
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const authority = localStorage.getItem('loginData');
        if (authority) {
            navigate('/');
        }
    }, [])

    const ref = useRef(null)
    function loginNav() {
        navigate('/login')
    }
    let submit = async (e) => {
        e.preventDefault()
        try {
            if (admin) {
                setAdmin(false)
            }
            else{
                setAdmin(true)
            }
            const response = await axios.post("http://localhost:8080/create", {
                email,
                password,
                mobile,
                username,
                admin
            })
            ref.current.continuousStart()
            localStorage.setItem("loginData", email);
            console.log(response.data);
            toast.success(response.data.message);
            sleep(2000).then(() => { ref.current.complete(); });
            setTimeout(() => {
                window.open("http://localhost:3000/","_self");
            }, 3000);
        } catch (error) {
            console.log(error);
            ref.current.continuousStart()
            toast.error(error.response.data.message);
            sleep(500).then(() => { ref.current.complete(); });
        }
    }
    return (
        <>
            <LoadingBar color='#f11946' ref={ref} />
            <div className="container miracle">
                <div className="row">
                    <div className="col-md-12">
                        <form action='POST' className="col-12 col-md-6 kopiko2">
                            <h3 className="numeric-jargon">Please Log in</h3>
                            <div className="yaya">
                                <input type="email" className="kopiko1" id="floatingInput" placeholder="name@example.com" data-temp-mail-org="0" onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <br />
                            <div className="yaya">
                                <input type="password" className="kopiko1" id="floatingPassword" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <br />
                            <div className="yaya">
                                <input type="text" className="kopiko1" id="floatingPassword" placeholder="Phone" onChange={(e) => { setMobile(e.target.value) }} />
                            </div>
                            <br />
                            <div className="yaya">
                                <input type="text" className="kopiko1" id="floatingInput" placeholder="Username" data-temp-mail-org="0" onChange={(e) => { setUsername(e.target.value) }} />
                            </div>
                            <br />
                            <div className="form-check text-start my-3">
                                <input className="form-check-input" type="checkbox" id="checkAdmin" onChange={(e) => { setAdmin(e.target.checked); console.log(admin)}}/>
                                <label className="form-check-label label-used-in-login" for="flexCheckDefault">
                                    A Seller?
                                </label>
                            </div>

                            <button className="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Sign Up</button>
                            <a onClick={loginNav}><span>Already a user?</span></a><br />
                        </form>
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