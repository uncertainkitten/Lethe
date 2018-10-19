import React from 'react';
import {withRouter} from 'react-router-dom';
var classNames = require('classnames');

class Nitro extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      flashy: false,
    };
  }

  componentDidMount() {
    this.flashy = setInterval(() => this.flashToggle(), 100);
    this.illustrate = setInterval(() => this.colorize(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.flashy);
    clearInterval(this.illustrate);
  }

  flashToggle() {
    this.setState({flashy: !this.state.flashy});
  }

  colorize () {
    let newcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let illustrate = document.getElementsByClassName('nitroCharge');
    illustrate = Array.from(illustrate);
    illustrate.map((el) => { el.style.color = `${newcolor}`; });
  }

  render () {
    let nitroClass = classNames({nitroCharge: true, flashy: this.state.flashy});

    return (
      <div id="nitro">
        <h1 className={nitroClass}>NITRO CHAT</h1>
      </div>
    );
  }
}

export default withRouter(Nitro);