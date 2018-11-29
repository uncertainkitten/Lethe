import React from 'react';
import {Link} from 'react-router-dom';
import ServerContextMenu from './server_context_menu';
import InviteItemContainer from './invite_item_container';

class ServerIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode,
      menuClass: "downMenu",
      members: this.props.members,
      invite: false
    }
    this.handleRightClick = this.handleRightClick.bind(this);
    this.toggleInvite = this.toggleInvite.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mode !== this.props.mode) {
      this.updateModal();
    }
  }


  processServerName () {
    let serverInitials = this.props.server.name.split(" ");
    let serverDisplay = serverInitials.map(word => word[0].toUpperCase()).join("");
    return serverDisplay;
  }

  checkPosition(e) {
    if (e.screenY > 500) {
      this.setState({menuClass: "upMenu"});
    } else {
      this.setState({menuClass: "downMenu"});
    }
  }

  handleRightClick(e) {
    e.preventDefault();
    if (this.props.server.id !== this.state.mode) {
      this.checkPosition(e);
      this.props.fetchServer(this.props.server.id);
      this.props.openModal(this.props.server.id);
    } else {
      this.props.closeModal();
    }
  }

  updateModal() {
    this.setState({mode: this.props.mode});
  }

  toggleInvite() {
    this.setState({invite: !this.state.invite})
    this.props.closeModal();
  }

  render () {
    let context;
    if (this.props.server.id === this.state.mode){
      context = <ServerContextMenu
      leaveServer={this.props.leaveServer}
      membershipId={this.props.membershipId}
      menuClass={this.state.menuClass}
      server={this.props.server}
      currentUser={this.props.currentUser}
      fetchServersByUser={this.props.fetchServersByUser}
      fetchServer={this.props.fetchServer}
      toggleInvite={this.toggleInvite}
      invite={this.state.invite}
      breakServer={this.props.breakServer}/>
    } else {
      context = "";
    }

    let inviteItem;
    if (this.state.invite) {
      inviteItem = <InviteItemContainer
      server={this.props.server}
      toggleInvite={this.toggleInvite}/>
    } else {
      inviteItem = "";
    }

    return(
      <div className="serverItem">
        <Link to={`/servers/${this.props.server.id}`}>
          <div className="serverIcon" onContextMenu={this.handleRightClick}>
            {this.processServerName()}
            <div className="relativity">{context}</div>
          </div>
        </Link>
        {inviteItem}
      </div>
    );
  }
}

export default ServerIndexItem;