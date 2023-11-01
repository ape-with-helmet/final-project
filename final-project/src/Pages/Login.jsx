import React, { useState } from "react";
import './Login.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    let submit = async(e) => {
        e.preventDefault()
        try {
            toast.success('Logged In Successfully',{
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
            // alert("Successfully sumbitted")
            await axios.post("http://localhost:8080/login",{
                email,
                password
            });
            // axios.put("http://localhost:8080/currentUser",{
            //     email,
            //     password
            // })
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }
    return (
        <>  
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form action='POST'>
                                <br /><br /><br /><br /><br /><br />
                                <h1 class="h3 mb-3 fw-normal">Please Log in</h1>
                                <div class="form-floating yaya">
                                    <input type="email" class="form-control yaya" id="floatingInput" placeholder="name@example.com" data-temp-mail-org="0" onChange={(e)=>{setEmail(e.target.value)}}/>
                                    
                                </div>
                                <br />
                                <div class="form-floating yaya">
                                    <input type="password" class="form-control yaya" id="floatingPassword" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                    
                                </div>
                                <br />
                                <div class="form-check text-start my-3">
                                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>
                                <button class="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
        </>
    )
}