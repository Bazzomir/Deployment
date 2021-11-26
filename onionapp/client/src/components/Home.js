import React from 'react';
import Navbar from './Header/Navbar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div id="homepage">
                <h1 className="p-5">Welcome to <span id="onionapp">ONION</span> App</h1>
            </div>
        </div>
    )
}
