import React from 'react';
import {Link} from 'react-router-dom';  

//nav icons
import {RiHome2Fill} from 'react-icons/ri';
import {MdTimeline} from 'react-icons/md';
import {RiFocus2Line} from 'react-icons/ri';

const Navbar = ({show}) => {
    return(
        <div className={show ? 'sidenav active' : 'sidenav'}> 
            

            <ul>
                <li id="home">
                <RiHome2Fill className="navIcon" /><Link to='/'>HOME</Link>
                </li>
                <li id="prj">
                <MdTimeline className="navIcon"/><Link to='/prj'>PROJECTS</Link>
                </li>
                <li id="abt">
                <RiFocus2Line className="navIcon"/><Link to='/about'>ABOUT</Link>
                </li>
            </ul>
        

            
        </div>
    )
}

export default Navbar;