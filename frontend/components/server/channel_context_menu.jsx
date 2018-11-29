import React from 'react';
import {withRouter} from 'react-router-dom';
import NewChannelForm from './new_channel_form';

class ChannelContextMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      broke: "",
      create: false,
      server: ""
    }
    this.handleCreate= this.handleCreate.bind(this);
  }

  componentDidMount() {
    this.props.fetchServer(this.props.serverId)
    .then(res => this.setState({server: res.server}));
  }

  handleCreate(e){
    e.stopPropagation();
    this.setState({create: true})
  }

  render () {
    let createChannel;
    if (this.props.currentUser.id === this.state.server.owner_id) {
      createChannel = <button className="contextItem" onClick={this.handleCreate}>Create Channel</button>
    } else {
      createChannel = ""
    }

    let newChannelForm = "";
    if (this.state.create){
      newChannelForm = <NewChannelForm
      serverId={this.props.serverId}
      makeChannel={this.props.makeChannel}
      closeModal={this.props.closeModal}/>
    }

    return (
      <div className="downMenu">
        <div className="contextMenu">
          <button className="contextItemWBorder">Mute Channels</button>
          {createChannel}
          <div className="error">{this.state.broke}</div>
        </div>
        {newChannelForm}
      </div>
    );
  }
}

export default withRouter(ChannelContextMenu);