import React, { Component } from 'react';
import './stylesheets/App.css';

export default class SketchfabEmbed extends Component {
  render() {
    return (
      <iframe width="560"
              height="315"
              src={this.props.modelSource}
              frameBorder="0"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              className='infoblock__youtube'
              title={this.props.title}/>
    );
  }
}
