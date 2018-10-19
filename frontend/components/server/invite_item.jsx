import React from 'react';

class InviteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEdit: false
    }
    this.keepOpen = this.keepOpen.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  componentDidMount() {
    this.props.fetchInvites();
    this.newInvite();
  }

  newInvite() {
    this.props.makeInvite(this.props.server.id, {num_uses: 1});
  }

  keepOpen(e) {
    e.stopPropagation();
  }


  toggleEdit() {
    this.setState({toggleEdit: !this.state.toggleEdit})
  }

  copyToClipboard(e) {
    let textInput = document.getElementById("textinput");
    textInput.select();
    document.execCommand('copy');
  }

  handleExit(e) {
    this.props.toggleInvite();
  }

  render() {
    if (this.state.toggleEdit) {
      return(
        <EditInvite
        toggleEdit={this.toggleEdit}
        makeInvite={this.props.makeInvite}
        server={this.props.server} />
      );
    } else {
      let inviteCreated;
      if (this.props.invite) {
        inviteCreated = this.props.invite.url;
      } else {
        inviteCreated = "";
      }

    return(
       <div className="inviteItem">
          <span className="inviteFormText">SEND A SERVER INVITE LINK TO A FRIEND</span>
          <div className="eXit" onClick={this.handleExit}>X</div>

          <input
          className="inviteFakeInput"
          id="textinput"
          type="text"
          readOnly
          onClick={this.keepOpen}
          value={inviteCreated}/>
          <div className="copyInvite" onClick={this.copyToClipboard}>Copy</div>


          <span className="noExpire">Your invite link doesn't expire.</span><span className="betterInvite" onClick={this.toggleEdit}>Create better invite.</span>
        </div>
      );
    }
  }
}

class EditInvite extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numUses: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({numUses: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeInvite(this.props.server.id, {num_uses: this.state.numUses});
    this.props.toggleEdit();
  }

  render() {
    return(
      <div className="editInviteContainer">
        <span className="editHeader">SERVER INVITE LINK SETTINGS</span>
        <div className="eXit" onClick={this.props.toggleEdit}>X</div>

        <form className="createCustomInvite" onSubmit={this.handleSubmit}>
          <label className="editLabel">EXPIRE AFTER</label>
          <select id="expireSelect">
            <option value="1 hour">1 hour</option>
            <option value="6 hours">6 hours</option>
            <option value="12 hours">12 hours</option>
            <option value="1 day">1 day</option>
            <option value="never">Never</option>
          </select>

        <label className="editLabel">MAX NUMBER OF USES</label>
          <select id="usesSelect" defaultValue={this.state.numUses} onChange={this.update}>
            <option value="9999999">No Limit</option>
            <option value="1">1 use</option>
            <option value="5">5 uses</option>
            <option value="10">10 uses</option>
            <option value="25">25 uses</option>
            <option value="50">50 uses</option>
            <option value="100">100 uses</option>
          </select>

        <span className="editText">Grant Temporary Membership</span>
        <input
        type="checkbox"
        className="fancyCheck"
        value="temp" />

        <span className="editsm0l">Temporary members are automatically kicked when they disconnect</span>
        <span className="editsm0l">unless a role has been assigned</span>

        <div className="bottomBtns">
          <button className="newLink" onClick={this.handleSubmit} type="submit">Generate New Link</button>
          <button className="cancelBtn" onClick={this.props.toggleEdit}>Cancel</button>
        </div>
      </form>

      </div>
    );
  }
}

export default InviteItem;