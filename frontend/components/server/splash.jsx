import React from 'react';
import ServerIndexContainer from './server_index_container';
import ChannelIndexContainer from './channel_index_container';
import MessageIndex from './message_index';
import UserIndexContainer from './user_index_container';
import {withRouter, Route} from 'react-router-dom';

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
        <Route path='/servers/:id' component={ChannelIndexContainer}/>
      </div>
      <div className="messageContainer">
        <MessageIndex />
      </div>
      <div className="userContainer">
        <Route path='/servers/:id' component={UserIndexContainer} />
      </div>
    </div>);
  }
}

export default withRouter(Splash);