import React from 'react';
import NewServerForm from './new_server_form';
import JoinServerFormContainer from './join_server_container';

class NewServerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
    this.handleClick = this.handleClick.bind(this);
    this.updatePage = this.updatePage.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    if (e.target.value === "Create!") {
      this.updatePage(2);
    } else if (e.target.value === "Join!") {
      this.updatePage(3);
    }
  }

  updatePage(value) {
    this.setState({page: value})
  }

  render () {
  if (this.state.page === 1) {
    return (
      <div className="newServerWrapper">
        <h3 className="newServerHeader">OH, ANOTHER SERVER HUH?</h3>
        <div className="boxingRing">
          <div className="createBox">
            <h4 className="createBoxHeader">CREATE</h4>
            <p className="newBoxDescription">Create a new server and invite</p>
            <p className="newBoxDescription">your friends. It's free!</p>
            <div className="createBoxImage">BEHOLD! An Image.</div>
            <button className="createServerBtn" onClick={this.handleClick} value="Create!">Create a Server</button>
          </div>
          <div className="fancyOr">or</div>
          <div className="joinBox">
            <h4 className="joinBoxHeader">Join</h4>
            <p className="newBoxDescription">Enter an Instant Invite and</p>
            <p className="newBoxDescription">join your friend's server.</p>
            <div className="joinBoxImage">BEHOLD! An Image.</div>
            <button className="joinServerBtn" onClick={this.handleClick} value="Join!">Join a Server</button>
          </div>
        </div>
      </div>);
    } else if (this.state.page === 2) {
      return (<NewServerForm
        updatePage={this.updatePage}
        createServer={this.props.createServer}
        joinServer={this.props.joinServer}
        closeModal={this.props.closeModal}/>);
    } else if (this.state.page === 3) {
      return (<JoinServerFormContainer updatePage={this.updatePage} />);
    } else {
      return (<div className="newServerWrapper">Form borked!</div>);
    }
  }
}

export default NewServerWrapper;