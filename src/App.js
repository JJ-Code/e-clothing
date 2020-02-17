import React from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.css';
import { Homepage } from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'


// const HatsPage = (props) => {
//   console.log(props)
//  return (<div>
//     <h1>Hats Page</h1>
//   </div>)
// }

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route  path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

