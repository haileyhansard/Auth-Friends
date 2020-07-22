import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendsPage from './components/FriendsPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Auth Friends App
      </header>
          <ul className="links">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path="/protected" component={FriendsPage}/>
            <Route path="/login" component={Login} />
            {/* <Route component={Login} />    */}
          </Switch>
      
    </div>
  );
}

export default App;
