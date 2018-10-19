import React from 'react';
import GreetingContainer from './session/greeting_container';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NitroContainer from './session/nitro_container';
import Resume from './session/resume';
import SplashContainer from './server/splash_container';
import ServerHeaderContainer from './server/server_header_container';
import { AuthRoute, ProtectedRoute }from '../util/route_util';


const App = () => (
  <div className="app">
      <header className="appHeader">
        <Switch>
          <ProtectedRoute path='/servers/:id' component={ServerHeaderContainer}/>
          <Route path='/' component={GreetingContainer} />
        </Switch>
      </header>
      <ProtectedRoute path='/servers' component={SplashContainer} />
      <div className="authWrapper">
      <Switch>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <Route path='/resume' component={Resume} />
        <Route path='/nitroll' component={NitroContainer} />
        <Route path='/downloads'/>
        <Route path='/developers'/>
        <Route path='/community' />
        <Route path='/blog' />
        <Route path='/support' />
        <Route path='/language'/>
      </Switch>
      </div>
  </div>
);

export default App;