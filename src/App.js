import React ,{useState} from 'react';
import './App.css';
import './index.css';

import Rosh from './Games/Rosh';
import Home from './Pages/Home';
import About from './Pages/About';
import Prj from './Pages/Prj';

import Footer from './Components/Footer';

import Navbar from './Components/Navbar';

import {CgMenuRound} from 'react-icons/cg';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {


    const [showNav, setShowNav] = useState(false);



    return ( 
    <>
       <div>
         <Router>

        <div className="nav">
            <header ><CgMenuRound onClick={()=>setShowNav(!showNav)} size='40' color='#800000' className='menu_btn' /></header>
            <Navbar show={showNav}/>
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