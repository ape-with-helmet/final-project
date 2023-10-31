import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {
    return (
        <>  
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form>
                                <br /><br /><br /><br /><br /><br />
                                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                                <div class="form-floating yaya">
                                    <input type="email" class="form-control yaya" id="floatingInput" placeholder="name@example.com" data-temp-mail-org="0" />
                                    
                                </div>
                                <div class="form-floating yaya">
                                    <input type="password" class="form-control yaya" id="floatingPassword" placeholder="Password" />
                                    
                                </div>

                                <div class="form-check text-start my-3">
                                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>
                                <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Login