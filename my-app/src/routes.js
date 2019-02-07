import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';

const Routes = () => (
<BrowserRouter>
<Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/Login" component={Login}/>
    <Route path="/Checkout" component={Checkout}/>
</Switch>
</BrowserRouter>
)

export default Routes;