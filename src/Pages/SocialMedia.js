import "./Pages.css";

import github from './assets/github.png';
import playstore from './assets/plystore.png';
import linkedin from './assets/linkedin.png';

const Social = () =>{
    return <div id="sm" >
            <a href="https://github.com/fahad-ansar"><img src={github} height={100}/></a>
            <a href="https://www.linkedin.com/in/fahadansar1/" ><img src={linkedin} height={100}/></a>
            <a href="https://play.google.com/store/apps/developer?id=Fahad+Ansar" ><img src={playstore} height={100}/></a>
    </div>
}

export default Social;