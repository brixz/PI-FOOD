import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
