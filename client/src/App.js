import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landingpage from './Components/LandingPage';
import Home from './Components/Home'
import Form from './Components/Form';
import NavBar from './Components/NavBar';
import CardDetail from './Components/CardDetails';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Landingpage} /> 
        <Route exact path='/home' component={Home} />
        <Route exact path='/createRecipe' component={Form} /> 
        <Route path='/detail/:id' component={CardDetail}/>
      </Switch>
    </div>
  );
}

export default App;