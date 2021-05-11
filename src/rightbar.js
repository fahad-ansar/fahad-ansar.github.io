import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
//better way to use icons
// import * as FaIcons from "react-icons/fa";
import {Link } from 'react-router-dom';
import { BsFillEggFill ,BsFillGrid3X3GapFill } from "react-icons/bs";


//side bar tutorial : https://medium.com/how-to-react/create-a-sidebar-menu-in-react-js-3463b306ca9a

function Rightbar () {

  


    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
      <>
      <div className="navbar">
        <Link to="#" className='menu-bars' onClick={showSidebar}>
          <BsFillEggFill />
        </Link>

        <nav>

          <ul className="nav-menu-items">

            <li className="navbar-toggle">
              <Link to='#' className='menu-bars'>
                <BsFillGrid3X3GapFill />
              </Link>
            </li>



          </ul>

        </nav>

      </div>
     </>
     );
  
}

export default Rightbar;