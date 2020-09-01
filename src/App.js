import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom'
import ShopPage from '../src/pages/shop/shop.component'
import Header from '../src/components/header/header.component'
import SignInSignUp from '../src/pages/sign-in-sign-up/sign-in-sign-up.component'
import Homepage from '../src/pages/homepage/homepage.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      currentUser : null
    }
  }

  unsubscribeFromAuth = null
  componentDidMount(){
    
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
        this.setState({currentUser : user});

        console.log(user);
    })
 }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  
  render(){

    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
