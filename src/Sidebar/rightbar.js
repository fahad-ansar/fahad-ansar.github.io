import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import datas from './sidebarData'
import {Link } from 'react-router-dom';


//side bar tutorial : https://medium.com/how-to-react/create-a-sidebar-menu-in-react-js-3463b306ca9a

function Rightbar () {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
      <>
      <div className="navbar">
        <Link to="#" className='menu-bars' onClick={showSidebar}>
          <FaIcons.FaBars onClick={showSidebar} style={{color:'black'}}/>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          {datas.map((item, index) => {
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul> 
      </nav>
     </>
     );
  
}

export default Rightbar;