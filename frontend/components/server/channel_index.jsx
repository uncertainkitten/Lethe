import React from 'react';
import UserWidget from './user_widget';
import ChannelIndexItem from './channel_index_item';
import ChannelContextMenu from './channel_context_menu';
import {withRouter} from 'react-router-dom';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: this.props.channels,
      currentServerId: this.props.currentServerId
    }
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  componentDidMount() {
    if (this.props.currentServerId) {
      this.props.fetchChannels(this.state.currentServerId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentServerId !== this.props.currentServerId) {
      this.props.fetchChannels(nextProps.currentServerId)
      .then(res => this.props.history.push(`/servers/${nextProps.currentServerId}/channels/${Object.values(res.channels)[0].id}`))
      this.setState({channels: this.props.channels, currentServerId: nextProps.currentServerId})
    }
  }

  handleRightClick(e){
    e.preventDefault();
    this.props.openModal(-2);
  }

  render() {
    let channelItems;

    if (this.props.channels){
    channelItems = this.props.channels.map(channel => <ChannelIndexItem
      key={channel.id}
      channel={channel}
      breakChannel={this.props.breakChannel}
      mode={this.props.mode}
      openModal={this.props.openModal}
      closeModal={this.props.closeModal}
      />
    );} else {
      channelItems = "";
    }

    let context = "";
    if (this.props.mode === -2){
      context = <ChannelContextMenu
      currentUser={this.props.currentUser}
      serverId={this.state.currentServerId}
      fetchServer={this.props.fetchServer}
      makeChannel={this.props.makeChannel}
      closeModal={this.props.closeModal}
      />
    }

    return (
      <div className="channelIndex" onContextMenu={this.handleRightClick}>
        <ul className="channelList">{channelItems}</ul>
        {context}
        <UserWidget currentUser={this.props.currentUser} />
      </div>
      );
  }
}

export default withRouter(ChannelIndex);
