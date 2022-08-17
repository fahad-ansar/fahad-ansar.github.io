import React from "react";
import ReactDOM  from "react";

import  r from './weapons/r.png'
import  pr from './weapons/pr.png'
import  s from './weapons/s.png'
import  p from './weapons/p.png'


//Player object and weapons for all players
const weapons = ["rock","paper","scissor","pencil"];

const Player = ({weapons}) =>{
    return(
        <div className="player">
            <image className="playerImage" src={
                    weapons==="rock"?r: weapons==="paper"?pr : weapons==="scissor"?s:p
                }
                alt="rock paper scissor pencil"
                />
        </div>
    )
}



class Roshambo extends React.Component{

    //state of two player and resulting winner
    state = {
        userWeapoms: weapons[1],
        compWeapoms: weapons[1],
        winWeapoms: ""
    }

    //starts game interval with 5 turns in total
    beginGame = () => {
        let counter = 0;
        let gameInterval = setInterval(() => {
            counter++;
            var ai = parseInt(Math.random()*weapons.length);
            this.setState({
                compWeapoms : weapons[ai],
                winWeapoms:""
            })
            if(counter>5){
                clearInterval(gameInterval);
                this.setState({
                    winWeapoms: this.verdict()
                })
            }
        }, 100);
    }

    //calculates winner
    verdict = () => {
       const {userWeapoms, compWeapoms} =  this.state;

       console.log(userWeapoms + " v/s " + compWeapoms);

       if(userWeapoms==compWeapoms){
           return "TIE";
       }else if((userWeapoms==="rock" && compWeapoms === "pencil")||
            (userWeapoms==="rock" && compWeapoms === "scissor")||
            (userWeapoms==="paper" && compWeapoms === "rock")||
            (userWeapoms==="scissor" && compWeapoms === "pencil")||
            (userWeapoms==="scissor" && compWeapoms === "paper")||
            (userWeapoms==="pencil" && compWeapoms === "paper")){
                return "USER";
       }else{   return "AI"  }
    }

    //sends weapon to player
    selectWeapon = weapon =>{
        this.setState({
            userWeapoms: weapon,
            winWeapoms: ""
        });

        this.beginGame();
    }


    //View of the game and dynamic states
    render(){
        const {userWeapoms, compWeapoms, winWeapoms} = this.state;

        return(
            <>
                <div>
                    <Player weapons={{userWeapoms}}/>
                    <Player weapons={{compWeapoms}}/>
                </div>

                <div>
                    <button className="WeaponBtn" onClick={()=> this.selectWeapon("rock")}>
                        rock
                    </button>
                    <button className="WeaponBtn" onClick={()=> this.selectWeapon("paper")}>
                        paper
                    </button>
                    <button className="WeaponBtn" onClick={()=> this.selectWeapon("scissor")}>
                        scissor
                    </button>
                    <button className="WeaponBtn" onClick={()=> this.selectWeapon("pencil")}>
                        pencil
                    </button>
        
                </div>

                <div className="winner">{winWeapoms?this.verdict(): null}</div>
            </>
        )
    }
}


export default Roshambo;