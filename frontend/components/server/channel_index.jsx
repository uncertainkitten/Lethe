import React from 'react';
import UserWidget from './user_widget';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.serverId) {
      this.props.fetchChannels(this.props.serverId);
    }
  }

  render() {
    let channelItems;

    if (this.props.channels ){
    channelItems = this.props.channels.map(channel => <ChannelIndexItem
      key={channel.id}
      channel={channel}
      serverId={this.props.server}
      breakChannel={this.props.breakChannel}
      mode={this.props.mode}
      openModal={this.props.openModal}
      closeModal={this.props.closeModal}
      fetchChannel={this.props.fetchChannel}/>
    );} else {
      channelItems = "";
    }

    return (
      <div className="channelIndex">
        <ul className="channelList">{channelItems}</ul>
        <UserWidget />
      </div>
      );
  }
}

export default ChannelIndex;
