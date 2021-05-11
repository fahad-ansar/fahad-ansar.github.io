import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Rosh from './Rosh';
import RighBar from './rightbar';
import { Route, Switch ,  BrowserRouter as Router} from 'react-router-dom';



class App extends React.Component {

  render(){
    return (
      <>
      <h1 style={{alignContent:"flex-start" , textAlign:"left" }}>sdfdsf</h1>
      <div>
         <Router>
            <RighBar />
            <Switch>
              <Route path='/' />
            </Switch>
         </Router>
         
      </div>
      <div className="Ros">
      <Rosh />
      </div>
      </>
     );
  }
}


export default App;