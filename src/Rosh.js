import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import  r from './weapons/r.png'
import  pr from './weapons/pr.png'
import  s from './weapons/s.png'
import  p from './weapons/p.png'

//rock kills scissor and pencil
//paper kills rock
//scissor kills paper, pencil, dyamite
//pencil kills paper and dyanmite

//dyanmite kills one weapon of opponent and if that weapon he used then wild card gets killed
//wild card ..... need to think..
const weaps = ["rock", "paper", "scissor", "pencil" ]


const Player = ({weaps}) => {
   return(
       <div className="player">
            <img className="player-image" src={
               weaps==="rock"?r: weaps==="paper"?pr : weaps==="scissor"?s:p
            } alt="rock paper scissor pencil" />
       </div>
   )
}

class Rosh extends React.Component {


  state = {
    userplayer: weaps[0],
    compplayer: weaps[0],
    winplayer: ""
  }

  startGame = () => {
     let counter =0;
     let gameInterval = setInterval(() => {
        counter++;
        var ai = parseInt(Math.random()*weaps.length);
        this.setState({
           compplayer: weaps[ai],
           winplayer: ""
        })
        if(counter >5){
           clearInterval(gameInterval);
           this.setState({
              winplayer: this.countWinner()
           });
        }
     },100); 
  };

  
  countWinner = () => {

   
   const {userplayer,compplayer} = this.state;

   console.log(userplayer + " " + compplayer);
   if(userplayer===compplayer){
      return "TIE";

   }else if ((userplayer==="rock" && compplayer === "pencil") || 
   (userplayer==="rock" && compplayer === "scissor") || 

   (userplayer==="paper" && compplayer === "rock") ||

   (userplayer==="scissor" && compplayer === "pencil") ||
   (userplayer==="scissor" && compplayer === "paper") ||

   (userplayer==="pencil" && compplayer === "paper") 
   ){
      return "User";
   }else{ return "Ai";}
  }


  choostWeapon = weapon => {
     this.setState({
        userplayer : weapon,
        winplayer : "" 
     });

     this.startGame();

  }


  render(){
    const {userplayer, compplayer, winplayer} = this.state;
    return (
      <>
   
       <h1 style={{textAlign:"center", backgroundColor:"lightgray"}}>ROSHAMBO</h1>
   
       <div >
        <Player  weaps={userplayer} />
        <Player weaps={compplayer}/>
       </div>
   
       <div style={{backgroundColor:"black", borderRadius:"25px"}}>
         <button className="weaponBtn" onClick={()=> this.choostWeapon("rock")}>
            rock
         </button>
         <button className="weaponBtn" onClick={()=> this.choostWeapon("paper")}>
            paper
         </button>
         <button className="weaponBtn" onClick={()=> this.choostWeapon("scissor")}>
            scissor
         </button>
         <button className="weaponBtn" onClick={()=> this.choostWeapon("pencil")}>
            pencil
         </button>
         <button className="weaponBtn" onClick={()=> this.choostWeapon("advantage")}>
            advantage
         </button>
       </div>
       <div className="winner">{winplayer ? this.countWinner(): null}</div>
      </>
     );
  }
}

export default Rosh;