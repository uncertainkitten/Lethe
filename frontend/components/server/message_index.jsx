import React from 'react';
import NewMessageFormContainer from './new_message_form_container';
import {withRouter} from 'react-router-dom';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      log: [],
      currentMessage: ""
    }
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.channelMessages !== nextProps.channelMessages){
      this.buildLog(nextProps.channelMessages);
    }
  }

  buildLog(messages){
    let log = messages.map(message => <MessageIndexItem
      key={message.id}
      message={message}
      getUserForMessage={this.props.getUserForMessage}
      members={this.props.members}
      />
    );
    this.setState({log: log})
  }


  render() {
    return (
      <div className="messageIndex">
        <ul className="messageIndexItemList">
          {this.state.log}
          {this.state.currentMessage}
        </ul>
        <div className="messageInputWrapper">
          <NewMessageFormContainer className="messageInput" />
        </div>
      </div>
    );
  }
}

export default withRouter(MessageIndex);