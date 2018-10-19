import React from 'react';
import ServerIndexContainer from './server_index_container';
import ChannelIndex from './channel_index';
import MessageIndex from './message_index';
import UserIndex from './user_index';

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
        <ChannelIndex />
      </div>
      <div className="messageContainer">
        <MessageIndex />
      </div>
      <div className="userContainer">
        <UserIndex />
      </div>
    </div>);
  }
}

export default Splash;