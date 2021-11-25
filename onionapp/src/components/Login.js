import React from 'react';
import Navbar from './Header/Navbar';

export default function Login() {
    return (
        <div>
            <Navbar />
            <h2 className="d-flex justify-content-center mt-5">Sing in</h2>
            <form>
                <div className="col-4 mx-auto mt-3">
                    <label className="form-label">Email address</label><i className="bi bi-envelope"></i>
                    <input type="email" className="form-control" placeholder="username@domain.com" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="col-4 mx-auto mt-4">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="~!@#$%^&*()_+" />
                    <a href="https://www.computerhope.com/jargon/r/reset-password.htm" target="_blank" rel="noreferrer" className="d-flex justify-content-left">Forgot passowrd</a>
                </div>
                <div className="col-4 mx-auto mt-5 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Remember me</label>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-success col-4 mt-3">Log in</button>
                </div>
                <p className="text-center text-muted mt-5 ">Create an account. <br />
                    <a href="http://localhost:3000/register" className="fw-bold text-body"><u>Sing Up</u></a>
                </p>
            </form>

            <div>

            </div>

        </div>
    )
}
