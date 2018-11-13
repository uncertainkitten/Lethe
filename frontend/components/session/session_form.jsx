import React from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
var classNames = require('classnames');

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      demo: false,

      emailError: "",
      passwordError: "",
      usernameError: "",
      otherError: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoToggle = this.demoToggle.bind(this);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.errors != this.props.errors) {
      this.renderErrors();
    }
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }


  buildErrors() {
    let rendErrors = {
      username: "",
      password: "",
      email: "",
      other: ""
    }

    if (this.props.errors.length !=0) {
      this.setState({activeErrors: true})
      this.props.errors.forEach(error => {
        switch(error.split(" ")[0]) {
        case "Password":
          rendErrors.password = error
          break
        case "Username":
          rendErrors.username = error
          break
        case "Email":
          rendErrors.email = error
          break
        default:
          rendErrors.other = error
        }
      });
    }
    return rendErrors
  }

  renderEmailError () {
    let rendErrors = this.buildErrors();
    this.setState({emailError: `${rendErrors.email}`});
  }

  renderPasswordError() {
    let rendErrors = this.buildErrors();
    this.setState({ passwordError: `${rendErrors.password}` });
  }

  renderUsernameError() {
    let rendErrors = this.buildErrors();
    this.setState({ usernameError: `${rendErrors.username}`});
  }

  renderOtherError() {
    let rendErrors = this.buildErrors();
    this.setState({ otherError: `${rendErrors.other}`});
  }

  renderErrors() {
    this.renderEmailError();
    this.renderPasswordError();
    this.renderUsernameError();
    this.renderOtherError();
  }

  handleSubmit(e) {
    if (this.state.demo) {
      e.preventDefault();
      let demo = { email: "UserThree@trollmail.com", password: "DROP DATABASE *;" }
      this.props.processForm(demo);
    } else {
      e.preventDefault();
      this.setState({email: this.state.email.toLowerCase()})
      this.props.processForm(this.state);
    }
  }

  demoToggle() {
    this.setState({ demo: !this.state.demo });
  }


  render () {
    let emailClass = classNames({authLabel: !this.state.emailError, errLabel: !!this.state.emailError});
    let userClass = classNames({authLabel: !this.state.usernameError, errLabel: !!this.state.usernameError});
    let passwordClass = classNames({ authLabel: !this.state.passwordError, errLabel: !!this.state.passwordError});
    let submission;

    if (this.state.demo) {
      submission = this.handleDemo
    } else {
      submission = this.handleSubmit
    }

    if (this.props.loggedIn) {
      return (<Redirect to='/servers' />);
    }  else if (this.props.formType === 'login') {
      return (
      <div className="overlay">
          <div className="session">
            <p className="sessionError">{this.state.otherError}</p>
            <h3 className="welcome">Welcome back!</h3>
            <p className="authTagline">
              We're so excited to see you again!
            </p>

            <form className="authForm" onSubmit={this.handleSubmit}>
              <label className={emailClass}>
                EMAIL <span className="sessionError">
                  {this.state.emailError}
                </span>
                <br />
                <input className="authText" type="text" value={this.state.email} onChange={this.update("email")} />
              </label>

              <label className={passwordClass}>
                PASSWORD <span className="sessionError">
                  {this.state.passwordError}
                </span>
                <br />
                <input className="authText" type="password" value={this.state.password} onChange={this.update("password")} />
              </label>
              <Link className="authLink" to="/signup">
                Forgot your password?
              </Link>
              <input className="authButton" type="submit" value="Login" />
              <input className="demoButton" type="submit" onClick={this.demoToggle} value="Demo" />
              <span className="authLink authQuest">
                Need an account? <Link to="/signup">Register</Link>
              </span>
            </form>
          </div>
        </div>
        );
      } else {
      return (
      <div className="overlay">
          <div className="session">
            <p className="sessionError">{this.state.otherError}</p>
            <h3 className="welcome">Create an account</h3>
            <p className="authTagline" />
            <form onSubmit={this.handleSubmit} className="authForm">
              <label className={emailClass}>
                EMAIL <span className="sessionError">
                  {this.state.emailError}
                </span>
                <br />
                <input className="authText" type="text" value={this.state.email} onChange={this.update("email")} />
              </label>
              <label className={userClass}>
                USERNAME <span className="sessionError">
                  {this.state.usernameError}
                </span>
                <br />
                <input className="authText" type="text" value={this.state.username} onChange={this.update("username")} />
              </label>
              <label className={passwordClass}>
                PASSWORD <span className="sessionError">
                  {this.state.passwordError}
                </span>
                <br />
                <input className="authText" type="password" value={this.state.password} onChange={this.update("password")} />
              </label>
              <input className="authButton" type="submit" value="Continue" />
              <Link className="authLink" to="/login">
                Already have an account?
              </Link>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);