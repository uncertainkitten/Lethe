import React from 'react';
import ServerIndexItemContainer from './server_index_item_container';
import NewServerWrapper from './new_server_wrapper';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newServer: this.props.mode
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mode !== this.props.mode) {
      this.updateModal();
    }
  }

  componentDidMount () {
    this.props.fetchServersByUser(this.props.currentUser.id);
  }

  handleClick(e) {
    if (this.props.mode !== -1) {
      this.props.openModal(-1);
    }
  }

  updateModal() {
    this.setState({ newServer: this.props.mode });
  }

  render () {
    let newServerMenu;
    if (this.state.newServer === -1) {
      newServerMenu = <NewServerWrapper
      createServer={this.props.createServer}
      joinServer={this.props.joinServer}
      closeModal={this.props.closeModal}/>
    } else {
      newServerMenu = "";
    }
    const serverItems = this.props.servers.map(
      server => <ServerIndexItemContainer
      key={server.id}
      currentUser={this.props.currentUser}
      server={server}
      leaveServer={this.props.leaveServer}
      fetchServer={this.props.fetchServer}
      mode={this.props.mode}
      openModal={this.props.openModal}
      closeModal={this.props.closeModal}
      memberList={this.props.memberList}
      members={this.props.members}
      fetchServersByUser={this.props.fetchServersByUser}/>);
    return (
    <div className="serverIndex">
      <span className="numOnline">X online</span>
      <div className="hackBorder"></div>
      <ul className="serverList">{serverItems}
      <div className="newServerIcon" onClick={this.handleClick}>+</div>
      </ul>
      {newServerMenu}
    </div>);
  }
}

export default ServerIndex;