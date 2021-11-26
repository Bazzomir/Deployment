import React from 'react'
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Log-Res/Login'
import Register from '../components/Log-Res/Register';

export default function Routes() {
    return (
        <div>
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
            </Router>
        </div>
    )
}
