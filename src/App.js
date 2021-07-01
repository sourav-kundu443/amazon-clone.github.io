import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';
import AmazonPrime from './components/Prime related components/Prime';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/product/:num" render={(props) => <ProductDetails {...props} />} />
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/amazonprime">
            <AmazonPrime />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
