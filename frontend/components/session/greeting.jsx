import React from 'react';
import {Link} from 'react-router-dom';
import { logout } from '../../actions/session_actions';
var classNames = require('classnames');
import {osName} from "react-device-detect";
import Footer from './footer';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {errors: this.props.errors, loggedIn: this.props.loggedIn, server: this.props.currentServer, channel: this.props.currentChannel}
  }

  componentDidMount() {
    if (this.props.currentUser){
      this.props.fetchServersByUser(this.props.currentUser.id);
    } else if (this.props.currentServer) {
      this.props.fetchChannels(this.props.currentServer.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentServer !== nextProps.currentServer) {
      this.setState({server: nextProps.currentServer});
    }

    if (this.props.currentChannel !== nextProps.currentChannel) {
      this.setState({channel: nextProps.currentChannel});
    }
  }

  handleLogout() {
    this.props.logout()
  }

  render () {
    let classRight = classNames({navLink: true, right: true});
    let server;
    let channel;

    if (this.state.server) {
      server = this.state.server
      if (this.state.channel) {
       channel = "channels";
      } else {
        channel = "";
      }
    } else {
      server = "";
      channel = "";
    }

    if (this.props.loggedIn) {
      return (
      <div className="greetHeader">
        <header className="greeting">
          <Link to='/'><div className="letheLogo"></div></Link>
          <Link className="navLink" to="/download">Download</Link>
          <Link className="navLink" to="/nitroll">"Nitro"</Link>
          <Link className="navLink" to="/resume">Jobs</Link>
          <Link className="navLink" to="/developers">Developers</Link>
          <Link className="navLink" to="/community">Community</Link>
          <Link className="navLink" to="/blog">Blog</Link>
          <Link className="navLink" to="/support">Support</Link>
          <div className="right">
            <Link className="navLink" to="/language">Language</Link>
            <Link to="/login"><button className="logoutBtn" onClick={this.handleLogout}>Log Out</button></Link>
            <Link to={`/servers/${server.id}/{channels}`} className="openBtn">Open</Link>
          </div>
        </header>
        <p className="welcome">Welcome, {this.props.currentUser.username}</p>
        <p className="welcome">(Note - this is a temporary page - will be updated to look more Discord-y)</p>
      </div>
      );
    } else {
      return (
      <div className="greetHeader">
        <header className="greeting">
          <Link to='/'><div className="letheLogo"></div></Link>
          <Link className="navLink" to="/download">Download</Link>
          <Link className="navLink" to="/nitroll">"Nitro"</Link>
          <Link className="navLink" to="/resume">Jobs</Link>
          <Link className="navLink" to="/developers">Developers</Link>
          <Link className="navLink" to="/community">Community</Link>
          <Link className="navLink" to="/blog">Blog</Link>
          <Link className="navLink" to="/support">Support</Link>
        <div className="right">
          <Link className={classRight} to="/login">Log In</Link>
          <Link className={classRight} to="/language">Language</Link>
        </div>
        </header>
        <div className="greetBody">
          <p className="bigSplashText">It's time to ditch those Other Proprietary Video Chat Apps!</p>
          <p className="sm0lSplashText">All in one voice and text chat for coders that's free, secure, and works on both desktop and your phone.</p>
          <p className="sm0lSplashText">Stop paying for Trademarked App servers and hassling with Other Trademarked App.  Simplify your life!</p>
          <div className="buttonContainer">
            <div className="deeElButton">Download for {osName}</div>
            <div className="splashAuthButton">Open Discord in your Browser</div>
          </div>
          <div className="fancy">: )</div>
          <Footer />
        </div>
      </div>
      );
    }
  }
}

export default Greeting;