import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import { Homepage } from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.action.jsx";


// const HatsPage = (props) => {
//   console.log(props)
//  return (<div>
//     <h1>Hats Page</h1>
//   </div>)
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: null
  //   };

  // }

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          //console.log(userAuth);
          console.log(this.props.user);
        });
      }
  
      setCurrentUser({ userAuth });
      
    });

   
  }



  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

// first arg of connect is null bc we don't need to grab state and we only need pass in 2nd arg of setting state
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))})
export default connect(null, mapDispatchToProps)(App);

