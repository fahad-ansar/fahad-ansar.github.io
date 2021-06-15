import React from 'react';
import logo from './logo.png';
import {Link} from 'react-router-dom';  

const Navbar = ({show}) => {
    return(
        <div className={show ? 'sidenav active' : 'sidenav'}> 
            
            <img src={logo} alt='logo'className='logo'/>

            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                <Link to='/prj'>PROJECTS</Link>
                </li>
                <li>
                <Link to='/about'>ABOUT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;