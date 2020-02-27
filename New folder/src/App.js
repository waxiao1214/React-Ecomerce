import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';


class App extends Component {
  render () {
    console.log("")
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component = { ProductList }></Route>
          <Route path = "/details" component = { Details }></Route>
          <Route path = "/cart" component = { Cart }></Route>  
          <Route component = { Default }/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
