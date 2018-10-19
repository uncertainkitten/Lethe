import React from 'react';

class ServerContextMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: this.props.server,
      members: this.props.members,
      broke: ""
    }
    this.handleLeave = this.handleLeave.bind(this);
    this.handleInvite = this.handleInvite.bind(this);
  }

  componentDidMount() {
    this.props.fetchServer(this.props.server.id);
  }

  handleLeave(e) {
    e.stopPropagation();
    this.props.leaveServer(this.props.membershipId);
  }

  handleInvite(e) {
    e.stopPropagation();
    this.props.toggleInvite()
  }

  render () {
    return (
      <div className={this.props.menuClass}>
        <div className="contextMenu">
          <button className="contextItemWBorder">Mark As Read</button>
          <button className="contextItem" onClick={this.handleInvite}>Invite People</button>
          <button className="contextItem">Server Mute</button>
          <button className="contextItem">Hide Muted Channels</button>
          <div className="menuContextItem">Server Settings</div>
          <button className="contextItem">Notification Settings</button>
          <button className="contextItem">Privacy Settings</button>
          <button className="contextItemWBorder">Change Nickname</button>
          <button className="leaveServer" onClick={this.handleLeave}>Leave Server</button>
          <button className="contextItem">Copy Id</button>
          <div className="error">{this.state.broke}</div>
        </div>
      </div>
    );
  }
}

export default ServerContextMenu;