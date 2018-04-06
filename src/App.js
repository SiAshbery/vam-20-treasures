import React, { Component } from 'react';
import './App.css';
import BackgroundImage from './BackgroundImage'

const Page = ({ title }) => (
    <div className="App">
      <BackgroundImage className="introblock__background-image--carpet js-bg-parallax" />
      <IntroBlock />
      <BackgroundImage className="introblock__background-image--cartoon js-bg-parallax" />
      <InfoBlock />
    </div>
);

// const BackgroundImage = (props) => (
//   <div className={props.className} />
// );

const IntroBlock = (props) => (
  <div className="introblock__body">
    <div className="introblock__content">
      <div className="introblock__header">
        <img src='icons/logo.svg' className="introblock__logo" alt="Victoria and Albert Museum Logo" />
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

const InfoBlock = (props) => (
  <div className="infoblock__body">
    <div className="infoblock__content">
      <div className="infoblock__header">
        <div className="infoblock__title">
          <h1 className="infoblock__title--main">The Raphael Cartoons, 1515-16</h1>
          <h2 className="infoblock__title--sub">Raphael (1483-1520)</h2>
          <a href='somewhere' className="infoblock__title-link" >
            THE RAPHAEL CARTOONS, Room 48a, Level 1
          </a>
        </div>
        <button href='#' className="infoblock__map-pin">
          <div className='infoblock__map-pin-text'>1</div>
        </button>
      </div>
      <div className="infoblock__text">
        <p>
          When Leo X became pope in 1513, he
          comissioned a set of tapestry designs
          to contribute to the ornate decoration
          of the Sistine Chapel in Rome. He chose
          Raphael as the designer, who was
          already considered a great artist of the
          time and was working on the decoration of the
          Vatican Palace.
        </p>
        <p>
          The Cartoons show episodes from the Acts of
          Apostles - the lives of St Peter and St Paul,
          founders of the Christian Church.
        </p>
        <p>
          The Tapestrie made from Raphaels designs vary
          slightly: the images are reversed and some of
          the colours are different. They were woven over
          1000 miles from Rome, in Brussels between
          1516 and 1521.
        </p>
        <p>
          The Low Countries has been an immportant
          centre for cloth-weaving since the early 14th
          centure. The cartoons were sent there and
          slced into large strips to make templates for
          the weavers to use. Although they were
          reassembled in the 17th centurey, today the
          joins are still faintly visible.
        </p>
      </div>
      <div className='infoblock__text--disclaimer'>On loan from Her Majesty Queen Elizabeth II</div>
    </div>
  </div>
);

class App extends Component {

  render() {
    return (
      <Page/>
    );
  }
}

export default App;
