import React, { Component } from 'react';
import './App.css';

export default class InfoBlock extends Component {
  renderSubtitle() {
    if (this.props.subTitle) {
      return (
        <h2 className="infoblock__title--sub">
          {this.props.subTitle}
        </h2>
      );
    }
  }
  render() {
    return (
      <div className="infoblock__body">
        <div className="infoblock__content">
          <div className="infoblock__header">
            <div className="infoblock__title">
              <h1 className="infoblock__title--main">{this.props.title}</h1>
              {this.renderSubtitle()}
              <a href={this.props.mapLink} className="infoblock__title-link" >
                {this.props.location}
              </a>
            </div>
            <a href={this.props.mapLink} className="infoblock__map-pin">
              <div className='infoblock__map-pin-text'>{this.props.mapPin}</div>
            </a>
          </div>
          <div className="infoblock__text">
            {this.props.body()}
          </div>
          <div className='infoblock__text--disclaimer'>
            {this.props.credit}
          </div>
        </div>
      </div>
    );
  }
}
