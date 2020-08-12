import React from 'react';
import {Button, Nav} from "reactstrap";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import {Provider} from 'react-redux';
import reduxStore from './store';
import Add from './components/Add';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Provider store={reduxStore}>
        <Router>
          <Navigation/>
           <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/cart" component={Cart}/>
              <Route exact path="/addProduct" component={Add}/>
           </Switch>
        </Router>
    </Provider>
  );
}

export default App;
