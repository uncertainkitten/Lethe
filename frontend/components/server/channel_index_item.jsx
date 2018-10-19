import React from 'react';

class ChannelIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="channelItemContainer">
        <span className="channelItem"># {this.props.channel.name}</span>
      </div>
    );
  }
}

export default ChannelIndexItem;