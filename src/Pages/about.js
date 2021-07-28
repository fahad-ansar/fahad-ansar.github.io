import Skills from "./Skills";
import PersonalIntro from "./PersonalIntro";
import Social from "./SocialMedia";
import "./Pages.css";

const About = () =>{

    return <div id="About" style={{float:"left", position:"static"}}>
               
       <PersonalIntro/>

       <Social/>

       <Skills/>

{/*     <made with.. */}


    </div>
}

export default About;