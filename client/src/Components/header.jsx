import React from 'react'
import logo from '../Assets/upc_logo.png';
import rfid from '../Assets/rfid.png'
import './header.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
</style>


function Header() {
    return (
        <div className='Header'>
            <div className='Header-left'>
                <img src={logo} />
                Gate Access Notification System
            </div>

            <div className='Header-bottom'>
                <img src={rfid}/>
            </div>
        </div>
    )
}

export default Header