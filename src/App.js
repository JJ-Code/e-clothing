import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { Homepage } from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import { auth } from './firebase/firebase.utils'

// const HatsPage = (props) => {
//   console.log(props)
//  return (<div>
//     <h1>Hats Page</h1>
//   </div>)
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };

  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { this.setState({ currentUser: user });
      console.log(user)
  })
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();

  }

  render() {

    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}


export default App;

