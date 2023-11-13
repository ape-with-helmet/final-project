import React, { useState, useRef, useEffect } from "react";
import './Login.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar'
import 'react-toastify/dist/ReactToastify.css';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const ref = useRef(null)
    const navigate = useNavigate()
    useEffect(()=>{
        const authority = localStorage.getItem('loginData');
        if(authority){
            navigate('/');
        }
    }) 
    function loginNav (){
        navigate('/signup')
    }
    let submit = async (e) => {
        e.preventDefault()
        try {

            // alert("Successfully sumbitted")
            const response = await axios.post("http://localhost:8080/login", {
                email,
                password
            })

            ref.current.continuousStart()
            localStorage.setItem("loginData",email);
            console.log(response.data);
            toast.success(response.data.message);
            sleep(2000).then(() => { ref.current.complete(); });
            setTimeout(() => {
                window.open("http://localhost:3000/","_self")
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
                            <div className="form-check text-start my-3">
                                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="form-check-label label-used-in-login" for="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <button className="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Log in</button>
                            <a href=''onClick={loginNav}><span>New user?</span></a><br/>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
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