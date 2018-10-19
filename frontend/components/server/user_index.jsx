import React from 'react';
import UserIndexItem from './user_index_item';
import {withRouter} from 'react-router-dom';

class UserIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: this.props.users,
      currentServerId: this.props.currentServerId
    }
  }

  componentDidMount() {
    this.props.memberList(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.memberList(nextProps.match.params.id);
      this.setState({ users: this.props.users, currentServerId: nextProps.match.params.id });
    }
  }

  render() {
    let users;
    if (this.props.users) {
      users = this.props.users.map(user => <UserIndexItem
        key={user.user_id}
        user={user} />);
    } else {
      users = "";
    }
    return (
      <div className="userIndex">
        <ul className="userList">{users}</ul>
      </div>
    );
  }
}

export default withRouter(UserIndex);