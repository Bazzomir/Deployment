import React, { useState } from 'react';
import Navbar from '../Header/Navbar';
import { api } from '../../RestAPI/ApiConstants'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function postData() {
        const user = {
            email: email,
            password: password
        }
        fetch(`${api.root}/users/login`, {
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json().then(result => alert(`Logged in. Token: ` + result.token)))
            .catch(err => alert(err))
            
    }

    return (
        <div>
            <Navbar />
            <h2 className="d-flex justify-content-center mt-5">Sing in</h2>
            <form>
                <div className="col-4 mx-auto mt-3">
                    <label className="form-label">Email address</label><i className="bi bi-envelope"></i>
                    <input  type="text" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="username@domain.com" id="basic-url" aria-describedby="basic-addon3"/>
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="col-4 mx-auto mt-4">
                    <label className="form-label">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="~!@#$%^&*()_+" aria-label="Amount (to the nearest dollar)" />
                    <a href="https://www.computerhope.com/jargon/r/reset-password.htm" target="_blank" rel="noreferrer" className="d-flex justify-content-left">Forgot passowrd</a>
                </div>
                <div className="col-4 mx-auto mt-5 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Remember me</label>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" onClick={postData} className="btn btn-success col-4 mt-3">Log in</button>
                </div>
                <p className="text-center text-muted mt-5 ">Create an account. <br />
                    <a href="http://localhost:3000/register" className="fw-bold text-body"><u>Sing Up</u></a>
                </p>
            </form>
        </div>
    )
}
