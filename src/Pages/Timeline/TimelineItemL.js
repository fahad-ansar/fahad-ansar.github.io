import React from "react";
import './timeline.css';


const TimelineItemL = (props) => {
    return(
        <div  className="timeline_item">


            <div className="timeline-content">

                <span className='benchmark-date' style={{color:props.color}}>
                    
                      
                    <span style={{fontSize:23}}>{props.datem}</span>
                    <span style={{fontSize:46}} >{props.date}</span> 
                    <span style={{fontSize:10, letterSpacing:6, paddingLeft:2,fontWeight:"bold"}}>{props.datey}</span>
                
                </span>
        
                <div className="benchmark-info">
                    
                    <p className="name">{props.name}</p>


                    

                    <div className="hidden_details">
                        <p className="desc">{props.des}</p>
                        <image>HERE</image>
                        <button className="benchmark-link"><a href={props.link} >Code</a></button>
                    </div>
      
                    
                </div>



               
            </div>
        </div>
    )
}

export default TimelineItemL;