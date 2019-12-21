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
import Blog from './pages/Blog';
import NewBlog from './pages/NewBlog';
import NotFound from './pages/NotFound';
import Alert from './layouts/Alert';

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
            <Fragment>
              <Alert />
            </Fragment>
            <Switch>
              <Redirect exact from='/' to='/home' />
              <Route exact path='/home' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/blogs' component={Blog} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/new-blog' component={NewBlog} />
              <Route exact component={NotFound} />
            </Switch>
          </div>
          <footer></footer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;