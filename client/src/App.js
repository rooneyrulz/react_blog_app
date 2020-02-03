import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

// REDUX
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

// COMPONENTS
import AppHeader from './layouts/AppHeader';
import RoutingComponents from './components/routing/Routes';
import Alert from './layouts/Alert';
import AppFooter from './layouts/AppFooter';

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
              <RoutingComponents />
            </Switch>
          </div>
          <hr />
          <br />
          <footer className='mt-5'>
            <AppFooter />
          </footer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
