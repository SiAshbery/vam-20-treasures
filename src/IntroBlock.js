import React, { Component } from 'react';
import './App.css';
import vamIcon from './images/icons/logo.svg';


export default class IntroBlock extends Component {
  render() {
    return (
      <div className="introblock__body">
        <div className="introblock__content">
          <div className="introblock__header">
            <img src={vamIcon} className="introblock__logo" alt="Victoria and Albert Museum Logo" />
            <div className="introblock__title">
              <h1 className="introblock__title--main">20 TREASURES</h1>
              <h2 className="introblock__title--sub">Highlights from the collection</h2>
            </div>
          </div>
          <div className="introblock__text">
            <p>
              The Victoria and Albert Museum is the world’s
              leading museum of art, design; and
              performance. Founded in 1852 by Prince Albert,
              it is home to over 2.3 million objects that span
              5000 years of human creativity.
            </p>
            <p>
              Prince Albert’s wish was to create a museum
              that would improve British industry by
              displaying works of art and design to educate
              and inspire designers, manufacturers and the
              public.
            </p>
            <p>
              Today , many of the UK’s national collections
              are housed at the V&A, alongside some of the
              most outstanding examples of ceramics,
              furniture, architecture, fashion, glass, jewellery,
              photography, painting, sculpture, textiles and,
              theatre and performance works.
            </p>
            <p>
              This short guide cannot cover all of the
              treasures the Museum has to offer. Instead it
              features 20 objects that represent some of the
              most precious, famous and intriguing
              highlights, providing a taste of the exceptional
              Highlights from the collectionand diverse collection of the V&A.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
