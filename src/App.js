import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom'
import ShopPage from '../src/pages/shop/shop.component'
import Header from '../src/components/header/header.component'

import Homepage from '../src/pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
