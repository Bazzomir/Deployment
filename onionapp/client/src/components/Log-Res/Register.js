import React, { useState } from 'react';
import { api } from '../../RestAPI/ApiConstants'
import Navbar from '../Header/Navbar';

export default function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function postData() {
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        }
        fetch(`${api.root}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(alert(`User with name: ${firstName} is reqistered. Welcome Mr. ${firstName}!`))
            .catch(err => alert(err))
    }

    return (
        <div>
            <Navbar />
            <h2 className="text-uppercase text-center mt-5">Create an account</h2>
            <form>
                <div className="col-4 mx-auto mt-3">
                    <label className="form-label">First name:</label>
                    <input
                        className="form-control"
                        type="text"
                        value={firstName}
                        placeholder="John"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e => { setFirstName(e.target.value) }}
                    />
                </div>
                <div className="col-4 mx-auto mt-3">
                    <label className="form-label">Last name:</label>
                    <input
                        className="form-control"
                        type="text"
                        value={lastName}
                        placeholder="Doe"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={e => { setLastName(e.target.value) }}
                    />
                </div>
                <div className="col-4 mx-auto mt-3">
                    <label className="form-label">Email:</label>
                    <input
                        className="form-control"
                        type="email"
                        value={email}
                        placeholder="jonh_doe@domain.com"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        onChange={e => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="col-4 mx-auto mt-3">
                    <label className="form-label">Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="8 character minimum"
                        value={password}
                        aria-label="Amount (to the nearest dollar)"
                        onChange={e => { setPassword(e.target.value) }}
                    />
                </div>
                <div className="col-4 mx-auto mt-5">
                    <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                    />
                    <label className="form-check-label" >
                        I agree all statements in <a href="https://en.wikipedia.org/wiki/Terms_of_service" target="_blank" rel="noreferrer" ><u>Terms of service</u></a>
                    </label>
                </div>
                <div className="d-flex justify-content-center mt-3" >
                    <button type="button" onClick={postData} className="btn btn-primary col-4 mt-3">REGISTER</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="http://localhost:3000/login" className="fw-bold text-body"><u>Login here</u></a></p>
            </form>
        </div>
    )
}