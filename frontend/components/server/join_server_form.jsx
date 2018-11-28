import React from 'react';

class JoinServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      error: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keepOpen = this.keepOpen.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchInvites();
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  }

  keepOpen(e) {
    e.stopPropagation();
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    let goldenTicket = Object.values(this.props.invites).filter(invite => invite.url === this.state.url);
    if (goldenTicket[0]) {
      this.props.useInvite(goldenTicket[0].id);
      this.props.closeModal();
    } else {
      this.setState({error: "Invalid Invite"})
    }
  }

  handleBack(e) {
    e.stopPropagation();
    this.props.updatePage(1);
  }

  render() {
    return (<div className="joinServerContainer" onSubmit={this.handleSubmit}>
      <h3 className="joinServerHeader">JOIN A SERVER</h3>
      <h3 className="joinServerText">Enter an Instant Invite below to join an existing </h3>
      <h3 className="joinServerText">server. The invite will look something like these:</h3>
      <h4 className="exampleInvite">7316c8ce26</h4>
      <h4 className="exampleInvite">bd0742b88f</h4>
      <form className="joinServerForm">
        <input
          className="inviteText"
          type="text"
          value={this.state.url}
          onChange={this.update("url")} 
          onClick={this.keepOpen}/>

        <p className="sm0lText">Enter an instant invite {this.state.error}</p>

        <div className="joinFormBtns">
          <button className="serverGoBack" onClick={this.handleBack}>{"<-- BACK"}</button>
          <input
            className="submitJoinServer"
            type="submit"
            value="Join"
            onClick={this.handleSubmit} />
        </div>
      </form>
    </div>);
  }
}

export default JoinServerForm;