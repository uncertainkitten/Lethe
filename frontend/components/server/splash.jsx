import React from 'react';
import ServerIndexContainer from './server_index_container';
import ChannelIndexContainer from './channel_index_container';
import MessageIndexContainer from './message_index_container';
import UserIndexContainer from './user_index_container';
import UserActivity from './user_activity';
import {withRouter, Route} from 'react-router-dom';
import {ProtectedServerRoute} from '../../util/route_util';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.mode !== null) {
      this.props.closeModal();
    }
  }

  render () {
    return (
    <div className="splash" onClick={this.handleClick}>
      <div className="serverContainer">
        <ServerIndexContainer />
      </div>
      <div className="channelContainer">
        <ProtectedServerRoute path='/servers/:serverId' component={ChannelIndexContainer}/>
      </div>
      <div className="messageContainer">
        <Route path='/servers/@me/:userId' component={UserActivity} />
        <Route path='/servers/:serverId/channels/:channelId' component={MessageIndexContainer} />
      </div>
      <div className="userContainer">
        <Route path='/servers/:serverId' component={UserIndexContainer} />
      </div>
    </div>);
  }
}

export default withRouter(Splash);