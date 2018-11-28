import React from 'react';
import {withRouter} from 'react-router-dom';

class NewMessageForm extends React.Component {
  componentWillMount() {
    this.createSocket();
  }

  constructor(props) {
    super(props);
    this.state = {
      currentMessage: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.stopPropagation();
  }

  update(e) {
    this.setState({
      currentMessage: e.target.value
    });
  }

  handleMessageInputKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSendEvent(event);
    }
  }

  createSocket() {
    let cable;
    if (process.env.NODE_ENV !== 'production') {
      cable = ActionCable.createConsumer('http://localhost:3000/cable');
    } else {
      cable = ActionCable.createConsumer('wss://lethe-project.herokuapp.com/cable');
    }
    this.channels = cable.subscriptions.create({
      channel: 'ChannelsChannel'
    }, {
      connected: () => {},
      received: (data) => {
        this.props.newMessage(data)
      },
      create: function(messageBody, currentUserId, channelId) {
        this.perform('create', {
          body: messageBody,
          user_id: currentUserId,
          channel_id: channelId
        });
      }
    });
  }

  handleSendEvent(e) {
    e.preventDefault();
    this.channels.create(
      this.state.currentMessage,
      this.props.currentUser.id,
      this.props.channel.id
    )
    this.setState({
      currentMessage: ''
    });
  }


  render() {
    let channelName = '';
    if (this.props.channel) {
      channelName = this.props.channel.name;
    }

    return (
      <div>
        <div className="message-container">
          <div className="message-input-container">
            <input
              onKeyPress={ (e) => this.handleMessageInputKeyPress(e) }
              value={ this.state.currentMessage }
              onChange={ (e) => this.update(e) }
              type="text"
              placeholder={'Message #' + channelName}
              className="messageInput"
              onClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewMessageForm);