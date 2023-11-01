import React, { useState } from "react";
import './Signup.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Signup() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [mobile,setMobile] = useState("");

    let submit = async(e) => {
        e.preventDefault()
        try {
            alert('Submit Success')
            await axios.post("http://localhost:8080/create",{
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
                                <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
                                <div class="form-floating yaya">
                                    <input type="email" class="form-control yaya" id="floatingInput" placeholder="name@example.com" data-temp-mail-org="0" onChange={(e)=>{setEmail(e.target.value)}}/>
                                    
                                </div>
                                <br />
                                <div class="form-floating yaya">
                                    <input type="password" class="form-control yaya" id="floatingPassword" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                    
                                </div>
                                <br />
                                <div class="form-floating yaya">
                                    <input type="text" class="form-control yaya" id="floatingPassword" placeholder="Phone" onChange={(e)=>{setMobile(e.target.value)}}/>
                                    
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
        </>
    )
}