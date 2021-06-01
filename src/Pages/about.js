import React from 'react';
import ReactDOM from 'react-dom';
// import RighBar from './Sidebar/rightbar';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import { Route, Switch ,  BrowserRouter as Router} from 'react-router-dom';

// import navBar from './Sidebar/tempNav';



class about extends React.Component {

  render(){
    return (
      <>
      {/* <navBar/> */}
  
      <h1 style={{alignContent:"flex-start" , textAlign:"left" }}>sdfdsf</h1>

      <div className="Ros">
      </div>
      </>
     );
  }
}


export default about;