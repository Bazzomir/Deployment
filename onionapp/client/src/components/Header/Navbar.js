import React from 'react'
import onion from './onion.png'

export default function Navbar() {
    return (
        <div className="topnav">
            <a href="/" ><img src={onion} alt="" /></a>
            <a href="/login" id="btnlink">Sing in</a>
            <a href="/register" id="btnlink"> Sing up</a>
        </div>
    )
}
