import React from 'react';

class UserWidget extends React.Component{
  render () {
    console.log("WIDGET");
    return (
      <div className="userWidget">
        <div className="userAvatar">Avy</div>
        <div className="userBox">
          <div className="userInfo">Username</div>
          <div className="userInfo">#UserId</div>
        </div>
        <div className="muteToggle">M</div>
        <div className="deafenToggle">D</div>
        <div className="userSettings">S</div>
      </div>
    );
  }
}

export default UserWidget;