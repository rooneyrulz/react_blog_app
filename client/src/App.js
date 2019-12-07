import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

// COMPONENTS
import AppHeader from './layouts/AppHeader';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

const App = () => {
  return (
    <Router>
      <Fragment>
        <header>
          <AppHeader />
        </header>
        <div className="App container">
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route exact path='/home' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/about' component={About} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
        <footer></footer>
      </Fragment>
    </Router>
  );
}

export default App;
