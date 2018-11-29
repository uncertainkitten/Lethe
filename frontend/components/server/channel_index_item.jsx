import React from 'react';
import {withRouter} from 'react-router-dom';

class ChannelIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channel: this.props.channel,
      mode: this.props.mode
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.mode !== `C${this.state.channel.id}`) {
      this.props.openModal(`C${this.state.channel.id}`)
      this.setState({mode: this.props.mode});
      this.props.history.push(`/servers/${this.state.channel.server_id}/channels/${this.state.channel.id}`);
    } else {
      this.setState({mode: this.props.mode});
      this.props.closeModal();
    }
  }

  render() {
    let stateClass;
    if (this.props.mode === `C${this.state.channel.id}`) {
      stateClass = "selectedChannelContainer";
    } else {
      stateClass = "channelItemContainer";
    }

    let itemClass;
    if (this.props.mode === `C${this.state.channel.id}`) {
      itemClass = "selectedChannelItem";
    } else {
      itemClass = "channelItem";
    }
    return (
      <div className={stateClass}>
        <div className={itemClass} onClick={this.handleClick}># {this.props.channel.name}</div>
      </div>
    );
  }
}

export default withRouter(ChannelIndexItem);