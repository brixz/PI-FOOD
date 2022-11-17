import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landingpage from './Components/LandingPage';
import Home from './Components/Home'
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <Switch>
      <Route exact path='/' component={Landingpage} />        
        <Route exact path='/home' component={Home} />
        
      </Switch>
    </div>
  );
}

export default App;