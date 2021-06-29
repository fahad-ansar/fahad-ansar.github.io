import Particles from 'react-particles-js';

const Home = () =>{
    return <div style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,110,255,1) 100%)", zIndex:"1", }}>
        
        <Particles
    params={{
	    "particles": {
			"number": {
			  "value": 10,
			  "density": {
				"enable": true,
				"value_area": 100
			  }
			},
			"color": {
			  "value": "#ffffff"
			},
			"shape": {
			  "type": "triangle", 
			  "stroke": {
				"width": 0,
				"color": "#000000"
			  },
			  "polygon": {
				"nb_sides": 3
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
				  "opacity": 1
				}
			  },
			  "repulse": {
				"distance": 200,
				"duration": 0.4
			  },
			
			}
		  },
	}} />


    </div>

}

export default Home;
