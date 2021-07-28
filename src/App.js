import React ,{useState} from 'react';
import './App.css';
import './index.css';

import Rosh from './Games/Rosh';
import Home from './Pages/Home';
import About from './Pages/About';
import Prj from './Pages/Prj';

import Footer from './Components/Footer';

import {Link} from 'react-router-dom';  


import {BsBoxArrowInLeft} from 'react-icons/bs';
import {CgMenuRound} from 'react-icons/cg';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




//nav icons
import {RiHome2Fill} from 'react-icons/ri';
import {MdTimeline} from 'react-icons/md';
import {RiFocus2Line} from 'react-icons/ri';




function App() {


    const [showNav, setShowNav] = useState(false);
    const toggle = ()=> setShowNav(!showNav);


    return ( 
    <>
       <div>
         <Router>

        <div className="nav">
            <div className="sidenav_collapsed">
                <header ><CgMenuRound onClick={toggle} size='40' color='#ffffff' className='menu_btn' /></header>
                <ul>
                    <li id="home">
                    <Link to='/'><RiHome2Fill className="navIcon" /></Link>
                    </li>
                    <li id="prj">
                    <Link to='/prj'><MdTimeline className="navIcon"/></Link>
                    </li>
                    <li id="abt">
                    <Link to='/about'><RiFocus2Line className="navIcon"/></Link>
                    </li>
                </ul> 
            </div>
           
            <div className={showNav ? 'sidenav active' : 'sidenav'}> 
            
            <BsBoxArrowInLeft onClick={toggle} size='25' color='#fff' className='menu_Close_btn' />
            <ul onClick={toggle}>
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
            
        </div>

        

        <div className='main'>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/prj' exact={true} component={Prj}/>
            <Route path='/about' exact={true} component={About}/>

        </div>

        <Footer/>

        </Router>

       </div>

        
    </> 
    );
    
}


export default App;