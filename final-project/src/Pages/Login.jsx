import React, { useState, useRef } from "react";
import './Login.css'
import axios from 'axios'
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

    let submit = async (e) => {
        e.preventDefault()
        try {

            // alert("Successfully sumbitted")
            const response = await axios.post("http://localhost:8080/login", {
                email,
                password
            })

            ref.current.continuousStart()
            console.log(response.data);
            toast.success(response.data.message);
            sleep(2000).then(() => { ref.current.complete(); });

        } catch (error) {
            console.log(error);
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
                        <form action='POST' className="login-form">
                            <h1 class="h3 mb-3 fw-normal numeric-jargon">Please Log in</h1>
                            <div class="form-floating yaya">
                                <input type="email" class="form-control yaya" id="floatingInput" placeholder="name@example.com" data-temp-mail-org="0" onChange={(e) => { setEmail(e.target.value) }} />

                            </div>
                            <br />
                            <div class="form-floating yaya">
                                <input type="password" class="form-control yaya" id="floatingPassword" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />

                            </div>
                            <br />
                            <div class="form-check text-start my-3">
                                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label class="form-check-label label-used-in-login" for="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <button class="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Sign in</button>
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