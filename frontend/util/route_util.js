import {Route, Redirect, withRouter} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )}/>
);

const ProtectedServer = ({ component: Component, path, isMember, userId, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    isMember ? (
      <Component {...props} />
    ) : (
      <Redirect to={`/servers/@me/${userId}`} />
    )
  )}/>
)

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.id), isMember: Boolean(state.entities.members[state.session.id]), userId: state.session.id};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const ProtectedServerRoute = withRouter(connect(mapStateToProps, null)(ProtectedServer));