import React ,{useState} from 'react';
import './App.css';
import './index.css';

import Rosh from './Games/Rosh';
import Home from './Pages/Home';
import About from './Pages/About';
import Prj from './Pages/Prj';

import Navbar from './Components/Navbar';

import {CgMenuRound} from 'react-icons/cg';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {


    const [showNav, setShowNav] = useState(false);



    return ( 
    <>
       <div>
         <Router>

        <div className="one">
            <header><CgMenuRound onClick={()=>setShowNav(!showNav)} size='35' color='#eaecef' className='menu_btn' /></header>
            <Navbar show={showNav}/>
        </div>

        

        <div className='main'>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/prj' exact={true} component={Prj}/>
            <Route path='/about' exact={true} component={About}/>

        </div>

        </Router>

       </div>

        
    </> 
    );
    
}


export default App;