import React from 'react';
import logo from './logo.png';
 


const Footer = () => {
    return(
        <div className={show ? 'sidenav active' : 'sidenav'}> 
            
            <img src={logo} alt='logo' className='logo'/>
        </div>
    )
}

export default Footer;