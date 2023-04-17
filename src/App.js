import React ,{useState} from 'react';
import './App.css';
import './index.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Social from "./Pages/SocialMedia";

// import Rosh from './Games/Rosh';
import Home from './Pages/Home';
import About from './Pages/About';
import Prj from './Pages/Prj';
import Footer from './Components/Footer';

//nav icons
import {RiHome2Fill} from 'react-icons/ri';
import {MdTimeline} from 'react-icons/md';
import {RiFocus2Line} from 'react-icons/ri';
import {BsBoxArrowInLeft} from 'react-icons/bs';
import {CgMenuRound} from 'react-icons/cg';






//TODO
/*
 -  make basic cards for each skill you have 
*/















function App() {


    const [showNav, setShowNav] = useState(false);
    const toggle = ()=> {setShowNav(!showNav);
        // document.getElementsByTagName('body').style.filter = 'blur(5px)';
    }

    return ( 
    <>
       <div>
         <Router>


       
        <div className="nav">
        <header ><CgMenuRound onClick={toggle} size='10' color='#ffffff' className='menu_btn' /></header>

             {/* Nav  collapsed */}
            <div className="sidenav_collapsed" style={{display:'inline-block'}}>
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
           

           {/* Nav not collapsed */}
            <div className={showNav ? 'sidenav active' : 'sidenav'}> 
                <BsBoxArrowInLeft onClick={toggle} size='25' color='#fff' className='menu_Close_btn' />
                <ul onClick={toggle}>
                    <li id="home">
                    <RiHome2Fill className="navIcon" /><Link to='/'>HOME</Link>
                    </li>
                    <li id="prj">
                    <MdTimeline className="navIcon"/><Link to='/prj'>STORY</Link>
                    </li>
                    <li id="abt">
                    <RiFocus2Line className="navIcon"/><Link to='/about'>ABOUT</Link>
                    </li>
                </ul>
            </div>
            
        </div>

        
        {/* Routes of navbar */}
        <div className='main'>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/prj' exact={true} component={Prj}/>
            <Route path='/about' exact={true} component={About}/>

        </div>

        {/* <Social/> */}

        
        <Footer/>

        </Router>

       </div>

        
    </> 
    );
    
}


export default App;