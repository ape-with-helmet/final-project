import React from 'react'
import './Signup.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Signup() {
    return (
        <>

            <br /><br /><br /><br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <form>
                            <h1 className="h3 mb-3 fw-normal">Enter the details to sign up</h1>
                            <div className="form-floating tt">
                                <input type="email" className="form-control" placeholder="name@example.com" id="floatingInput" data-temp-mail-org="0"></input>
                            </div>
                            <div className="form-floating tt">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  />
                            </div>
                            <div className="form-floating tt">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Re enter Password" />
                            </div>

                            <div className="form-check text-start my-3 ">
                                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Subscribe to our newsletter (Optional)
                                </label>
                            </div>
                            <div className="form-check text-start my-3">
                                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheck" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Agreeing to Terms and Conditions*
                                </label>
                            </div>
                            <a href='./'><button className="btn btn-primary w-100 py-2" type="submit">Sign up</button></a>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup