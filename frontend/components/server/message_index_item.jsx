import React from 'react';
import { withRouter} from 'react-router-dom';

class MessageIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messageUser: "",
      messageBody: "",
      messageCreated: "",
    }
  }

  componentWillReceiveProps(nextProps){
    this.buildMessage();
  }

  buildMessage(){
    if (Object.values(this.props.members).length !== 0){
      let user = this.props.getUserForMessage(this.props.members, this.props.message.user_id);
      this.setState({
        messageUser: user,
        messageBody: this.props.message.body,
        messageCreated: this.props.message.created_at
      });
    }
  }

  render() {
    return (
      <div className="messageIndexItemContainer">
        <li className="messageIndexItem">
          <p className="messageUsername">{this.state.messageUser}</p>
          <p className="messageCreated">{this.state.messageCreated}</p>
          <p className="messageBody">{this.state.messageBody}</p>
        </li>
      </div>
    );
  }
}

export default withRouter(MessageIndexItem);