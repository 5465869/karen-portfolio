import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Products from '../pages/products';
import Hero from '../pages/contacts';
import Product from '../pages/product';
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/contacts" component= {Hero} />
    <Route exact path="/product/:id" component={Product} />
  </Switch>
);

export default Routes;
