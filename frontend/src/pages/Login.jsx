import React from 'react'
import loginbg from '../img/loginbg.png'
export default function Login() {
    return (
        <div className='login container-fluid' >
            <div class="col-md-4 rounded-3 my-5" style={{ margin: '0 auto' }}>
                <form class="login-form text-left" action="#">
                    <h2>Log in to your account</h2>
                    <div class="mb-3">
                        <label htmlFor="email">email</label>
                        <input type="text" class="form-control" id='email' placeholder="Email address or phone number"
                            required />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="pass">password</label>
                        <input type="password" id='pass' class="form-control" placeholder="Password"
                            required />
                    </div>
                    <button type="button" class="btn btn-custom btn-lg btn-block mt-3">Login</button>
                    <div class="text-center pt-3 pb-3">
                        <hr />
                        <button type="button" class="btn btn-outline-primary btn-lg mt-3">Sign In With Google</button>
                        <button type="button" class="btn btn-outline-primary btn-lg mt-3">Sign In With Github</button>

                    </div>
                    <a href="#">Forgotten password?</a>
                </form>
            </div></div>
    )
}
