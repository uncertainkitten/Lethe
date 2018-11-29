/* eslint-disable max-classes-per-file */
import React from 'react';
import {Link} from 'react-router-dom';

class NewServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      regionClick: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keepOpen = this.keepOpen.bind(this);
    this.handleRegion = this.handleRegion.bind(this);
    this.toggleRegion = this.toggleRegion.bind(this);
    this.handleBack = this.handleBack.bind(this);
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

  handleRegion(e) {
    e.preventDefault();
    e.stopPropagation();
    this.toggleRegion();
  }

  toggleRegion() {
    this.setState({regionClick: !this.state.regionClick});
  }

  handleBack(e) {
    e.stopPropagation();
    this.props.updatePage(1);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state);
    this.props.closeModal();
  }

  render() {
    return (
    <div className="newServerForm">
      <h3 className="createServerHeader">CREATE YOUR SERVER</h3>
      <h3 className="createServerText">By creating a server, you will have access to free voice and text chat to use amongst your friends.</h3>
      <form className="createServerForm" onSubmit={this.handleSubmit}>
        <label className="createServerLabel">SERVER NAME</label>
        <input
        className="serverText"
        type="text"
        value={this.state.name}
        onChange={this.update("name")}
        onClick={this.keepOpen}/>

        <label className="createServerLabel">SERVER REGION</label>
        <div className="newServerRegion">
          <ServerRegion regionClick={this.state.regionClick} toggleRegion={this.toggleRegion}/>
        </div>

        <span className="sm0lText">By creating a server, you agree to Discord's </span>
        <Link className="sm0lLink" to='/guidelines'>Community Guidelines</Link>

        <div className="uploadServerIcon"></div>
        <span className="sm0lText">Minimum Size: <b className="serverBold">128 x 128</b></span>

        <div className="serverFormBtns">
            <button className="serverGoBack" onClick={this.handleBack}>{"<-- BACK"}</button>

          <input
            onClick={this.keepOpen}
            className="submitCreateServer"
            type="submit"
            value="Create"/>
        </div>
      </form>
    </div>
    );
  }
}

class ServerRegion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: "US West",
      regionClick: this.props.regionClick
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.regionClick === this.state.regionClick) {
      nextProps.toggleRegion();
    }
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({region: e.currentTarget.value, regionClick: !this.state.regionClick});
    this.props.toggleRegion();
  }

  render () {
    if (this.state.regionClick) {
    return (
    <div className="serverRegion">
      <h3 className="regionHeader">SELECT A SERVER REGION</h3>
      <button className="regionButton" onClick={this.handleClick} value="Brazil">
        <div className="selectFlag"></div>
        <span className="newRegion">Brazil</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="Central Europe">
        <div className="selectFlag"></div>
        <span className="newRegion">Central Europe</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="HongKong">
        <div className="selectFlag"></div>
        <span className="newRegion">Hong Kong</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="Japan">
        <div className="selectFlag"></div>
        <span className="newRegion">Japan</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="Russia">
        <div className="selectFlag"></div>
        <span className="newRegion">Russia</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="Singapore">
        <div className="selectFlag"></div>
        <span className="newRegion">Singapore</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="South Africa">
        <div className="selectFlag"></div>
        <span className="newRegion">South Africa</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="Sydney">
        <div className="selectFlag"></div>
        <span className="newRegion">Sydney</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="US Central">
        <div className="selectFlag"></div>
        <span className="newRegion">US Central</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="US East">
        <div className="selectFlag"></div>
        <span className="newRegion">US East</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="US South">
        <div className="selectFlag"></div>
        <span className="newRegion">US South</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="US West">
        <div className="selectFlag"></div>
        <span className="newRegion">US West</span>
      </button>

      <button className="regionButton" onClick={this.handleClick} value="Western Europe">
        <div className="selectFlag"></div>
          <span className="newRegion">Western Europe</span>
      </button>
    </div>);
    } else {
      return(
        <div className="selectedRegion" onClick={this.handleClick} value={this.state.region}>
          <div className="aFlag"></div>
          <span className="region">{this.state.region}</span>
          <span className="regionBtnText">Change</span>
        </div>
      );
    }
  }
}

export default NewServerForm;