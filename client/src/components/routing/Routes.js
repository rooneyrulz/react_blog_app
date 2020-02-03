import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// COMPONENTS
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';
import About from '../../pages/About';
import Register from '../../pages/auth/Register';
import Login from '../../pages/auth/Login';
import Blog from '../../pages/Blog';
import NewBlog from '../../pages/NewBlog';
import BlogDetail from '../../pages/BlogDetail';
import NotFound from '../../pages/NotFound';

// PRIVATE ROUTE COMPONENT
import PrivateRoute from '../../components/routing/PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Routes;
