import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './stylesheets/App.css';

export default class BackgroundImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url("${this.props.image}")`,
        height: '600px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: '0'
      }
    };
    this.parallaxBackground = this.parallaxBackground.bind(this)
  }

  componentWillMount() {
    window.addEventListener("scroll", this.parallaxBackground);
  }

  parallaxBackground() {
    const style = Object.assign({}, this.state.style);
    const offsetTop = ReactDOM.findDOMNode(this).offsetTop;
    const offsetHeight = ReactDOM.findDOMNode(this).offsetHeight;
    const scrolledHeight = window.pageYOffset;
    const limit = offsetTop + offsetHeight;
    // not offsetting properly, offsetTop works relative to the parent node.
    // Need to get offset relative to the 'app' div
    if(scrolledHeight > offsetTop && scrolledHeight <= limit) {
      style.backgroundPositionY = (scrolledHeight - offsetTop) / 3 + 'px'
    } else {
      style.backgroundPositionY = '0'
    }
    this.setState({style});
  }

  render() {
    return (
      <div style={this.state.style} />
    );
  }
}
