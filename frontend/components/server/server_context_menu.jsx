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
    this.handleBreak = this.handleBreak.bind(this);
  }

  componentDidMount() {
    this.props.fetchServer(this.props.server.id);
  }

  handleLeave(e) {
    e.stopPropagation();
    this.props.leaveServer(this.props.membershipId);
  }

  handleBreak(e) {
    e.stopPropagation();
    this.props.breakServer(this.props.server.id);
  }

  handleInvite(e) {
    e.stopPropagation();
    this.props.toggleInvite()
  }

  render () {
    let leaveDelete;
    if (this.props.currentUser.id === this.state.server.owner_id) {
      leaveDelete = <button className="leaveServer" onClick={this.handleBreak}>Delete Server</button>
    } else {
      leaveDelete = <button className="leaveServer" onClick={this.handleLeave}>Leave Server</button>
    }
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
          {leaveDelete}
          <button className="contextItem">Copy Id</button>
          <div className="error">{this.state.broke}</div>
        </div>
      </div>
    );
  }
}

export default ServerContextMenu;