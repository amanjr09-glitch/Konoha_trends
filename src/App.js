import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/login';
import Profile from './components/Profile';
import ProductPage from './components/pages/ProductPage';
import { authentication } from './components/firebase/firebase';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Categories' component={Categories} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/log-in' component={Login} />
          <Route path='/Add to cart' component={ProductPage}/>
          <Route path='/Profile' component={Profile}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
