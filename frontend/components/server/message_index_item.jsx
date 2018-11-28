import React from 'react';
import { withRouter} from 'react-router-dom';
var moment = require('moment');

class MessageIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messageUser: "",
      messageBody: "",
      messageCreated: "",
    }
  }

  componentDidMount(){
    this.buildMessage();
  }

  buildMessage(){
    if (Object.values(this.props.members).length !== 0){
      let user = this.props.getUserForMessage(this.props.members, this.props.message.user_id);
      this.setState({
        messageUser: user,
        messageBody: this.props.message.body,
        messageCreated: moment(this.props.message.created_at).calendar()
      });
    }
  }

  render() {
    return (
      <div className="messageIndexItemContainer">
       <div className="messageAvatar">Avy</div>
        <li className="messageIndexItem">
          <span className="messageUsername">{this.state.messageUser}</span>
          <span className="messageCreated">{this.state.messageCreated}</span>
          <p className="messageBody">{this.state.messageBody}</p>
        </li>
      </div>
    );
  }
}

export default withRouter(MessageIndexItem);