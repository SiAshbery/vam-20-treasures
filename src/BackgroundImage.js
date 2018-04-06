import React, { Component } from 'react';
import './App.css';

class BackgroundImage extends Component {

  componentDidMount() {
    window.addEventListener("scroll", this.parallaxBackground);
  }

  componentWillMount() {
    window.addEventListener("scroll", this.parallaxBackground);
  }

  parallaxBackground () {
    const scrolledHeight = window.pageYOffset,
    limit = this.offsetTop + this.offsetHeight;
    if(scrolledHeight > this.offetTop && scrolledHeight <= limit) {
      // TODO workout how to update components style on the fly
      this.style.backgroundPositionY = (scrolledHeight - this.offsetTop) / 1.5 + 'px';
    } else {
      this.style.backgroundPositionY = "0"
    }
  }

  render() {
    return (
      <div className={this.props.className} />
    );
  }
}

export default BackgroundImage;