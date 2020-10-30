import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProfileApp from './components/profile';
import Main from './components/Main';


function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path='/profile' component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
