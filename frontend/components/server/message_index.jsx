import React from 'react';
import NewMessageFormContainer from './new_message_form_container';
import {withRouter} from 'react-router-dom';
import MessageIndexItem from './message_index_item';
import {animateScroll} from 'react-scroll';

class MessageIndex extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      log: []
    }
  }

  componentDidMount() {
    this.props.fetchMessages();
    this.scrollToBottom();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.channelMessages !== nextProps.channelMessages){
      this.buildLog(nextProps.channelMessages);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  scrollToBottom(){
    animateScroll.scrollToBottom({
      containerId: "messageList"
    });
  }

  buildLog(messages){
    let log = messages.map(message => <MessageIndexItem
        key={message.id}
        message={message}
        getUserForMessage={this.props.getUserForMessage}
        members={this.props.members}
        />
    );
    let display;
    if (log.length > 50){
      display = log.slice(log.length - 51);
    } else{
      display = log
    }

    this.setState({log: display}, this.scrollToBottom);
  }


  render() {
    return (
      <div className="messageIndex">
        <ul id="messageList" className="messageIndexItemList">
          {this.state.log}
        </ul>

        <div className="messageInputWrapper">
          <NewMessageFormContainer className="messageInput" />
        </div>
      </div>
    );
  }
}

export default withRouter(MessageIndex);