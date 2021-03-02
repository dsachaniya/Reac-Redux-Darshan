import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Proptypes from 'prop-types';
import Loading from 'components/Loading';
import { connect } from 'react-redux';
import RouteAuth from 'hocs/RouteAuthentication';
import getUserLoginSelector from '../redux/userLogin/selectors';
// Private Route

// Routes Lazy Load
const LoginRoute = lazy(() => import('./login'));
const RouteNotFound = lazy(() => import('./404'));
const UserListScreenRoute = lazy(() => import('./UserListScreen'));
const UserFormRoute = lazy(() => import('./UserForm'));

/**
 * AppRouter
 * @returns {Node}
 */
const AppRouter = ({ isUserLoggedIn }) => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LoginRoute} />
          <Route exact path="/home" component={LoginRoute} />
          <Route exact path="/login" component={LoginRoute} />
          <RouteAuth
            exact
            isLoggedIn={isUserLoggedIn}
            path="/users"
            component={UserListScreenRoute}
          />
          <RouteAuth
            exact
            isLoggedIn={isUserLoggedIn}
            path="/manage-user"
            component={UserFormRoute}
          />
          <Route component={RouteNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

AppRouter.propTypes = {
  isUserLoggedIn: Proptypes.bool,
};

AppRouter.defaultProps = {
  isUserLoggedIn: false,
};

const mapStateToProps = (state) => ({
  isUserLoggedIn: getUserLoginSelector(state).isUserLoggedIn,
});

export default connect(mapStateToProps)(AppRouter);
