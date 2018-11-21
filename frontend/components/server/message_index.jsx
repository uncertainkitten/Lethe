import React from 'react';
import NewMessageFormContainer from './new_message_form_container';
import {withRouter} from 'react-router-dom';

class MessageIndex extends React.Component{
  componentDidMount() {
    this.props.fetchChannel(this.props.channelId);
    this.props.fetchMessages()
  }

  render() {
    return (
      <div className="messageIndex">
        <div className="messageInputWrapper">
          <NewMessageFormContainer className="messageInput" />
        </div>
      </div>
    );
  }
}

export default withRouter(MessageIndex);