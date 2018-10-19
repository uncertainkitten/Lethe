import React from 'react';

class ChannelIndexItem extends React.Component {
  render() {
    return (
      <div className="channelItemContainer">
        <span className="channelItem"># {this.props.channel.name}</span>
      </div>
    );
  }
}

export default ChannelIndexItem;