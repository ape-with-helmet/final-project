import React from 'react'
import './Login.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    let submit = async(e) => {
        e.preventDefault()

        try {
            alert("Successfully sumbitted")
            await axios.post("http://localhost:8080/login",{
                email,
                password
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
<<<<<<< HEAD
                            <form action='POST'>
                                <br /><br /><br /><br /><br /><br />
=======
                            <form action='localhost:8080'>
                                <br /><br />
>>>>>>> 133972355207b71b278b3bb4d7bbc58d69ea4c1e
                                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
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
<<<<<<< HEAD
                                <button class="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Sign in</button>
=======
                                <br />
                                <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
>>>>>>> 133972355207b71b278b3bb4d7bbc58d69ea4c1e
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
}