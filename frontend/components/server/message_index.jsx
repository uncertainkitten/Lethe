import React from 'react';
import NewMessageForm from './new_message_form';
import Cable from './cables';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../../util/constants';
import {withRouter} from 'react-router-dom';

class MessageIndex extends React.Component{
  componentDidMount() {
    this.props.fetchChannel(this.props.channelId);
    this.props.fetchMessages()
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.channel !== nextState.channel){
      this.setState({messages: nextState.channel.messages});
    }
  }

  handleReceivedChannel() {
    this.props.fetchChannel(this.props.channelId)
    .then(res => this.setState({channel: res.channel}));
  }

  handleReceivedMessage() {
    if (this.state.channel){
      this.setState({ messages: this.state.channel.messages });
    }
  }

  orderedMessages() {
    if (this.state.messages) {
      const sortedMessages = this.state.messages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      return sortedMessages.map(message => {<li key={message.id}>{message.body}</li>});
    } else {
      return "No messages here!";
    }
  }


  render() {
    return (
      <div className="messageIndex">
      <ActionCable
        channel={{channel: "ChannelsChannel"}}
        onReceived={this.handleReceivedChannel}
      />
      {this.state.channel ? (
        <Cable
          channel={this.state.channel}
          handleReceivedMessage={this.handleReceivedMessage}
        />
      ) : null}
      )
      <div className="messages">{this.orderedMessages()}</div>
        <div className="messageInputWrapper">
          <NewMessageForm className="messageInput" channelId={this.state.channelId} userId={this.props.currentUser.id}> </NewMessageForm>
        </div>
      </div>
    );
  }
}

export default withRouter(MessageIndex);