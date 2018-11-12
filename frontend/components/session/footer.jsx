import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Link to='/'><div className="letheLogo"></div></Link>
        <p>Product</p>
        <Link className="navLink" to="/download">Download</Link>
        <Link className="navLink" to="/branding">Branding</Link>
        <Link className="navLink" to="/nitroll">"Nitro"</Link>
        <Link className="navLink" to="/developers">Game Directory</Link>
        <p>Developers</p>
        <Link className="navLink" to="/applications">Applications</Link>
        <Link className="navLink" to="/docs">Documentation</Link>
        <Link className="navLink" to="/verification">Verification</Link>
        <Link className="navLink" to="/presence">Rich Presence</Link>
        <p>Resources</p>
        <Link className="navLink" to="/help">Help and Support</Link>
        <Link className="navLink" to="/guidelines">Guidelines</Link>
        <Link className="navLink" to="/feedback">Feedback</Link>
        <Link className="navLink" to="/terms">Terms</Link>
        <Link className="navLink" to="/privacy">Privacy</Link>
        <Link className="navLink" to="/status">Status</Link>
        <p>Company</p>
        <Link className="navLink" to="/about">About</Link>
        <Link className="navLink" to="/blog">Blog</Link>
        <Link className="navLink" to="/jobs">Jobs</Link>
        <p>More</p>
        <Link className="navLink" to="/partners">Partners</Link>
        <Link className="navLink" to="/hype">HypeSquad</Link>
        <Link className="navLink" to="/store">Merch Store</Link>
        <Link className="navLink" to="/press">Press Inquiries</Link>
        <Link className="navLink" to="/source">Open Source</Link>
        <div>
          <p>Ready to try Lethe? It's free!</p>
          <p>JOIN OVER 150 MILLION CODERS TODAY</p>
          <button>Sign Up Now</button>
        </div>
      </div>
    );
  }
}

export default Footer;