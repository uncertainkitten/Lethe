import React from 'react';

class UserIndexItem extends React.Component {
  render() {
    return (
    <div className="userIndexItemContainer">
        <div className="userAvatar">Avy</div>
        <li className="userItem">{this.props.user.user}</li>
    </div>
    );
  }
}

export default UserIndexItem;