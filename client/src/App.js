import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

// COMPONENTS
import AppHeader from './layouts/AppHeader';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';

// REDUX
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <header>
            <AppHeader />
          </header>
          <div className='App container'>
            <Switch>
              <Redirect exact from='/' to='/home' />
              <Route exact path='/home' component={Home} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
          <footer></footer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
