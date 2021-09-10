
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart';
import Default from './component/Default';
import Modal from './component/Modal';
import Footer from './component/Footer'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default} />
        </Switch>
        <Modal/>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
