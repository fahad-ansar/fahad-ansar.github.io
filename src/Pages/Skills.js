import React from "react";
import "./Pages.css";

import Card from './Card';

import Java from './assets/java.png';
import Cp from './assets/C.png';
import Js from './assets/js.png';
import Python from './assets/python.png';
import bash from './assets/bash.png';
import haskel from './assets/haskell.png';
import rjs from './assets/reactjs.png';
import reactn from './assets/reactnative.png';
import linux from './assets/linux.png';
import mongodb from './assets/mongoDb.png';
import npm from './assets/npm.png';
import oop from './assets/oop.png';



const Skills = () =>{
    return <div id="Skills"  >

            {/* <Card title='Java' imageUrl={Java}/> */}
            <img src={Java} height={100}/>
            <img src={Cp} height={100}/>
            <img src={Js} height={100}/>
            <img src={Python} height={100}/>
            <img src={bash} height={100}/>
            <img src={haskel} height={100}/>
            <img src={rjs} height={100}/>
            <img src={reactn} height={100}/>
            <img src={linux} height={100}/>
            <img src={mongodb} height={100}/>
            <img src={npm} height={100}/>
            <img src={oop} height={100}/>
            
    </div>
}

export default Skills;