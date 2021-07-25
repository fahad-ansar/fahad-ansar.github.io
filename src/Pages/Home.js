import Particles from 'react-particles-js';

const Home = () =>{
    return <div style={{background: "linear-gradient(90deg, rgba(255,255,0,1) 0%, rgba(4,106,0,1) 100%)", zIndex:"1", borderRadius:"25px" }}>
        
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
		}} style={{position:"relative",zIndex:"0"}} />


		{/* <h1 style={{position:"absolute",top:"0",left:"0",zIndex:"1",float:"left"}}>fflsfjglksdfjgsldkfgjklj</h1> */}

    </div>

}

export default Home;
