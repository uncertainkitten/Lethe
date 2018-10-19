import React from 'react';

class UserWidget extends React.Component{
  render () {
    return (
      <div className="userWidget">
        <div className="userAvatar">3</div>
        <div className="userBox">
          <div className="userInfo">{this.props.currentUser.username}</div>
          <div className="userInfo">{this.props.currentUser.id}</div>
        </div>
        <div className="muteToggle">M</div>
        <div className="deafenToggle">D</div>
        <div className="userSettings">S</div>
      </div>
    );
  }
}

export default UserWidget;