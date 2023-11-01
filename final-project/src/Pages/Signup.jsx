import React, { useState } from "react";
import './Signup.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signup() {
    // const notify = () => toast("Wow so easy!");


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");

    let submit = async (e) => {
        e.preventDefault()
        try {
            toast.success('Registered Successfully',{
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
            await axios.post("http://localhost:8080/create", {
                email,
                password,
                mobile
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action='POST'>
                            <br /><br /><br /><br /><br /><br />
                            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                            <div className="form-floating yaya">
                            <input type="email" className="form-control yaya" id="floatingInput" placeholder="name@example.com" data-temp-mail-org="0" onChange={(e) => { setEmail(e.target.value) }} />

                            </div>
                            <br />
                            <div className="form-floating yaya">
                                <input type="password" className="form-control yaya" id="floatingPassword" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />

                            </div>
                            <br />
                            <div className="form-floating yaya">
                                <input type="text" className="form-control yaya" id="floatingPassword" placeholder="Phone" onChange={(e) => { setMobile(e.target.value) }} />

                            </div>
                            <br />
                            <div className="form-check text-start my-3">
                                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                        
                            <button className="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Sign in</button>
                            {/* <Toaster/> */}
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}