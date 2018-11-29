import React from 'react';

class NewChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keepOpen = this.keepOpen.bind(this);
  }

  update(){
    return (e) => {
      e.preventDefault();
      this.setState({name: e.currentTarget.value });
    }
  }

  keepOpen(e) {
    e.stopPropagation();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeChannel(this.props.serverId, this.state);
    this.props.closeModal();
  }

  render() {
    return (
    <div className="newChannelForm">
      <h3 className="createChannelHeader">CREATE TEXT CHANNEL</h3>
      <form className="createChannelForm" onSubmit={this.handleSubmit}>
        <label className="createChannelLabel">CHANNEL NAME</label>
        <input
        className="channelText"
        type="text"
        value={this.state.name}
        onChange={this.update("name")}
        onClick={this.keepOpen}/>
        <div className="thatWasEasy">OK! That's all, you're done.  I don't even know why this is a special menu :)</div>

        <button className="cancelChannel">Cancel</button>
        <input
          onClick={this.keepOpen}
          className="submitCreateChannel"
          type="submit"
          value="Create Channel"/>
      </form>
    </div>
    );
  }
}

export default NewChannelForm;