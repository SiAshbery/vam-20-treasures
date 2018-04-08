import React, { Component } from 'react';
import './App.css';

export default class YoutubeEmbed extends Component {
  render() {
    return (
      <iframe width="560"
              height="315"
              src={this.props.videoSource}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className='infoblock__youtube'
              title={this.props.title}/>
    );
  }
}
