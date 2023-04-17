import React from "react";
import TimelineData from "./TimelineData";
import TimelineItemL from "./TimelineItemL";
import './timeline.css';

                

const Timeline = () => {
    return(
        <div className="timeline-container">

            <TimelineItemL date={"13"} color={"#ff2e01"} datey={"2023"} datem={"MAR"} link={""}  des={"Got Admitted in Master's!"} name={"Master's"} tools={""}/>

            <TimelineItemL date={"18"} color={"#ff2e01"} datey={"2022"} datem={"DEC"} link={""}  des={"Passed the the last course and Completed the degree"} name={"Victory"} tools={""}/>
                        
            <TimelineItemL date={" 1"} color={"#ff2e01"} datey={"2022"} datem={"APR"} link={""}  des={"Failed Last course of the degree and had to extend my degree"} name={"Disease : Depression"} tools={""}/>

            <TimelineItemL date={" 1"} color={"#ff2e01"} datey={"2022"} datem={"FEB"} link={""}  des={"Diagnosed with extreme Depression"} name={"Disease : Depression"} tools={""}/>

            <TimelineItemL date={" 1"} color={"#ff2e01"} datey={"2021"} datem={"JULY"} link={""}  des={"Developed first version of React js Portfolio Website"} name={"Portfolio Website 3.0"} tools={""}/>

            <TimelineItemL date={" 1"} color={"#ff2e01"} datey={"2021"} datem={"MAY"} link={""}  des={"Became Executive of COMP SCI CLUB at Brock University"} name={"COMP SCI Executive"} tools={""}/>
            
            <TimelineItemL date={" 1"} color={"#ff2e01"} datey={"2021"} datem={"APR"} link={""}  des={"Made AR menu for restuarants with team"} name={"AR Android App"} tools={""}/>

            <TimelineItemL date={" 1"} color={"#ff2e01"} datey={"2020"} datem={"SEP"} link={""}  des={"Became Team Study Ambassador for a month"} name={"Ambassador"} tools={""}/>

            <TimelineItemL date={"30"} color={"#ff2e01"} datey={"2020"} datem={"MAY"} link={""}  des={"Developed Quantum Programming Language on Classical Machine"} name={"Quantum Lang."} tools={"JAVA"}/>

            <TimelineItemL date={"31"} color={"#ff2e01"} datey={"2020"} datem={"JUL"} link={""}  des={"Chrome Extention that STOPs you from getting distracted"} name={"Chrome Extention"} tools={"Javascipt"}/>

            <TimelineItemL date={"20"} color={"#ff2e01"} datey={"2020"} datem={"MAY"} link={""}  des={"Loan list Android App to keep accounts of Loans"} name={"Loan List App"} tools={"JAVA / Android"}/>

            <TimelineItemL date={"21"} color={"#ff2e01"} datey={"2020"} datem={"APR"} link={""}  des={"Chess game using AI"} name={"AI Chess"} tools={"JAVA"}/>
            
            <TimelineItemL date={"19"} color={"#ff2e01"} datey={"2020"} datem={"MAR"} link={""}  des={"Cypher Decoder using AI"} name={"AI Decoder"} tools={"JAVA"}/>
            
            <TimelineItemL date={" 4"} color={"#ff2501"} datey={"2020"} datem={"FEB"} link={""} des={"Second Attempt on developing Website"} name={"Portfolio Website 2.0"} tools={"HTML/CSS"}/>
            
            <TimelineItemL date={" 1"} color={"#ff2e01"} datey={"2020"} datem={"APR"} link={""}  des={"Covid stats simple covid statistics prompter"} name={"COVID Prompt"} tools={"Python"}/>
            
            <TimelineItemL date={"15"} color={"#ff2501"} datey={"2020"} datem={"JAN"} link={""} des={"Diagnosed with Multiple Srollosis, Bedridden couple of months and dropped a semester"} name={"Disease: MS"} tools={""}/>
            
            <TimelineItemL date={" 1"} color={"#ff2e01"} datey={"2020"} datem={"JAN"} link={""}  des={"Object Oriented Chess game"} name={"OOP Chess"} tools={"Java"}/>
            
            <TimelineItemL date={"23 "} color={"#ff2501"} datey={"2019"} datem={"AUG"} link={""} des={"Terminal based sticky notes keeping script. There are three funtions for user which is add remove and change priority"} name={"STICKY LINES"} tools={"BASH"}/>
            
            <TimelineItemL date={"15"} color={"#ff2e01"} datey={"2019"} datem={"AUG"} link={""}  des={"File Organizer Java app that organizes files into sorted folders"} name={"YO! File Organizer"} tools={"Java"}/>
            
            <TimelineItemL date={"25 "} color={"#ff2501"} datey={"2019"} datem={"JUL"} link={""} des={"A Java Matrix library created that includes all the Matrix operations"} name={"Matrix Library/App"} tools={"Java"}/>
      
            <TimelineItemL date={"12"} color={"#ff2e01"} datey={"2018"} datem={"DEC"} link={""} des={"First portfolio website created with basic HTML and CSS skills"} name={"First Portfolio Website"} tools={"HTML/CSS"}/>

            <TimelineItemL color={"#ff2e01"} datey={"2017"} datem={"MAY"}  des={"Minimal to zero programming knowledge and struggling with basics!"} name={"BEGINING"} tools={""} img={"any 1st year photo here!"}/>

       </div>
    )
}


export default Timeline;