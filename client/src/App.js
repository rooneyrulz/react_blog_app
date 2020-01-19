import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

// REDUX
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

// COMPONENTS
import AppHeader from './layouts/AppHeader';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Blog from './pages/Blog';
import NewBlog from './pages/NewBlog';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';
import Alert from './layouts/Alert';
import AppFooter from './layouts/AppFooter';

import PrivateRoute from './components/routing/PrivateRoute';

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
              <PrivateRoute exact path='/blog/:id' component={BlogDetail} />
              <Route exact component={NotFound} />
            </Switch>
          </div>
          <footer className='mt-5'>
            <AppFooter />
          </footer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
