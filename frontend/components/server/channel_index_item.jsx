import React from 'react';

class ChannelIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: "channelItem",
      channel: this.props.channel
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({selected: "selectedChannelItem"});
    this.props.history.push(`/servers/${this.state.channel.server_id}/channels/${this.state.channel.id}`);
  }

  render() {
    return (
      <div className="channelItemContainer">
        <span className={this.state.selected} onClick={this.handleClick}># {this.props.channel.name}</span>
      </div>
    );
  }
}

export default ChannelIndexItem;