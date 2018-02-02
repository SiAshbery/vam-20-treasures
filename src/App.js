import React, { Component } from 'react';
import valogo from './assets/svg/valogo.svg';
import './App.css';

class App extends Component {
  render() {
    document.body.classList.add('background--purple')
    return (
      <div className="page__content">
        <img src={valogo} className="logo--main" alt="Victoria and Albert Museum Logo" />
        <div className="splash-page__text">
          <div className="splash-page__title" >20 TREASURES</div>
          <div className="splash-page__sub-title" >highlights from the collection</div>
        </div> 
      </div>
    );
  }
}

export default App;
