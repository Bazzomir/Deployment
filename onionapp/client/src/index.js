import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Log-Res/Login'
import Register from './components/Log-Res/Register';
import App from './App'

ReactDOM.render(
    <Router>
        <App />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
    </Router>,
    document.getElementById('root'));
