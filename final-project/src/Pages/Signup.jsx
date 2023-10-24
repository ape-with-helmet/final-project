import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <>
    <form>
    <br/><br/><br/><br/><br/><br/>
            <h1 class="h3 mb-3 fw-normal">Enter the details to sign up</h1>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Name</label>
            </div>
            <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" data-temp-mail-org="0" />
                    <label for="floatingInput">Email address</label>
                </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Subscribe to our newsletter (Optional)
                </label>
            </div>
            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheck"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Agreeing to Terms and Conditions*
                </label>
            </div>
            <button class="btn btn-primary w-100 py-2" type="submit">Sign up</button>
            <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
    </>
  )
}

export default Signup