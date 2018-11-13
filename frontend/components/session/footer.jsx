import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    let footerAuth;
    if (this.props.loggedIn) {
      footerAuth = "Open Lethe"
    } else {
      footerAuth = "Sign up now"
    }

    return (
      <div className="footer">
        <Link to='/'><div className="sm0lLetheLogo"></div></Link>
        <div className="footerBox">
          <p className="footerHeader">Product</p>
          <Link className="navLinkPlus" to="/download">Download</Link>
          <Link className="navLinkPlus" to="/branding">Branding</Link>
          <Link className="navLinkPlus" to="/nitroll">"Nitro"</Link>
          <Link className="navLinkPlus" to="/developers">Game Directory</Link>
        </div>
        <div className="footerBox">
          <p className="footerHeader">Developers</p>
          <Link className="navLinkPlus" to="/applications">Applications</Link>
          <Link className="navLinkPlus" to="/docs">Documentation</Link>
          <Link className="navLinkPlus" to="/verification">Verification</Link>
          <Link className="navLinkPlus" to="/presence">Rich Presence</Link>
        </div>
        <div className="footerBox">
          <p className="footerHeader">Resources</p>
          <Link className="navLinkPlus" to="/help">Help and Support</Link>
          <Link className="navLinkPlus" to="/guidelines">Guidelines</Link>
          <Link className="navLinkPlus" to="/feedback">Feedback</Link>
          <Link className="navLinkPlus" to="/terms">Terms</Link>
          <Link className="navLinkPlus" to="/privacy">Privacy</Link>
          <Link className="navLinkPlus" to="/status">Status</Link>
        </div>
        <div className="footerBox">
          <p className="footerHeader">Company</p>
          <Link className="navLinkPlus" to="/about">About</Link>
          <Link className="navLinkPlus" to="/blog">Blog</Link>
          <Link className="navLinkPlus" to="/jobs">Jobs</Link>
        </div>
        <div className="footerBox">
          <p className="footerHeader">More</p>
          <Link className="navLinkPlus" to="/partners">Partners</Link>
          <Link className="navLinkPlus" to="/hype">HypeSquad</Link>
          <Link className="navLinkPlus" to="/store">Merch Store</Link>
          <Link className="navLinkPlus" to="/press">Press Inquiries</Link>
          <Link className="navLinkPlus" to="/source">Open Source</Link>
        </div>
        <div className="footerFooter">
          <p className="bigfootText">Ready to try Lethe? It's free!</p>
          <p className="sm0lfootText">JOIN OVER 150 MILLION CODERS TODAY</p>
          <button className="splashFootButton">{footerAuth}</button>
        </div>
      </div>
    );
  }
}

export default Footer;