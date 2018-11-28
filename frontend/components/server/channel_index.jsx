import React from 'react';
import UserWidget from './user_widget';
import ChannelIndexItem from './channel_index_item';
import {withRouter} from 'react-router-dom';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: this.props.channels,
      currentServerId: this.props.currentServerId
    }
  }

  componentDidMount() {
    if (this.props.currentServerId) {
      this.props.fetchChannels(this.state.currentServerId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentServerId !== this.props.currentServerId) {
      this.props.fetchChannels(nextProps.currentServerId);
      this.setState({channels: this.props.channels, currentServerId: nextProps.currentServerId})
    }
  }

  render() {
    let channelItems;

    if (this.props.channels){
    channelItems = this.props.channels.map(channel => <ChannelIndexItem
      key={channel.id}
      channel={channel}
      serverId={this.props.server}
      breakChannel={this.props.breakChannel}
      mode={this.props.mode}
      openModal={this.props.openModal}
      closeModal={this.props.closeModal}
      />
    );} else {
      channelItems = "";
    }

    return (
      <div className="channelIndex">
        <ul className="channelList">{channelItems}</ul>
        <UserWidget currentUser={this.props.currentUser} />
      </div>
      );
  }
}

export default withRouter(ChannelIndex);
