import React, { useState } from 'react';
import Navbar from './Header/Navbar';

export default function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Navbar />
            <h2 className="text-uppercase text-center mt-5">Create an account</h2>
            <form>
                <div className="col-4 mx-auto mt-3">
                    <label className="form-label">First name:</label>
                    <input
                        className="form-control "
                        type="text"
                        placeholder="John"
                        value={firstName}
                        onChange={e => { setFirstName(e.target.value) }}
                    />
                </div>
                <div className="col-4 mx-auto mt-3">
                    <label className="form-label">Last name:</label>
                    <input
                        className="form-control "
                        type="text"
                        placeholder="Doe"
                        value={lastName}
                        onChange={e => { setLastName(e.target.value) }}
                    />
                </div>
                <div className="col-4 mx-auto mt-3">
                    <label className="form-label">Email:</label>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="jonh_doe@domain.com"
                        value={email}
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
                        onChange={e => { setPassword(e.target.value) }}
                    />
                </div>
                <div className="col-4 mx-auto mt-5 ">
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
                    <button type="submit" className="btn btn-primary col-4 mt-3">REGISTER</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="http://localhost:3000/login" className="fw-bold text-body"><u>Login here</u></a></p>
            </form>
        </div>
    )
}