import Particles from 'react-particles-js';
import Roshambo from '../Roshambo/rps';
import Slot from '../SlorMachine/slot';
import img from './img.png';




const Home = () =>{
    return < div className='page'>
			<div style={{background: "linear-gradient(90deg, rgba(255,255,0,1) 0%, rgba(4,106,0,1) 100%)",float:"left", width:"100%",borderRadius:"10px"}}>
        <Particles params={{
	    "particles": {
			"number": {
			  "value": 10,
			  "density": {
				"enable": true,
				"value_area": 100
			  }
			},
			"color": {
			  "value": "#800000"
			},
			"shape": {
			  "type": "triangle", 
			  "stroke": {
				"width": 0,
				"color": "#000000"
			  },
			  "polygon": {
				"nb_sides": 4
			  },
			},
			"opacity": {
			  "value": 0.5,
			  "random": true,
			  "anim": {
				"enable": true,
				"speed": 0.5,
				"opacity_min": 0.1,
				"sync": false
			  }
			},
			"size": {
			  "value": 10,
			  "random": true,
			  "anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			  }
			},
			"move": {
			  "enable": true,
			  "speed": 2,
			  "direction": "none",
			  "random": true,
			  "straight": false,
			  "out_mode": "bounce",
			  "bounce": false,
			  "attract": {
				"enable": true,
				"rotateX": 600,
				"rotateY": 1200
			  }
			}
		  },
		  "interactivity": {
			"detect_on": "canvas",
			"events": {
			  "onhover": {
				"enable": true,
				"mode": "grab"
			  },
			  "onclick": {
				"enable": true,
				"mode": "repulse"
			  },
			  "resize": true
			},
			"modes": {
			  "grab": {
				"distance": 200,
				"line_linked": {
					"color":"#000000",
				  "opacity": 1
				}
			  },
			  "repulse": {
				"distance": 300,
				"duration": 0.4
			  },
			
			}
		  },
		}} />
			
		<div style={{position:"absolute",top:"0",margin:"5% 40% 5% 40%",zIndex:"1",color:"white"}}>
			<h1>Fahad Ansar</h1>
		</div>
    </div>


	{/* <div style={{background: "linear-gradient(90deg, rgba(255,150,0,1) 0%, rgba(48,106,0,1) 100%)",float:"left", width:"100%"}}>
        <Roshambo/>
    </div>

	<div style={{background: "linear-gradient(90deg, rgba(255,150,0,1) 0%, rgba(48,106,0,1) 100%)",float:"left", width:"100%",}}>
        <Slot/>
    </div> */}


	</div>
	


}

export default Home;
