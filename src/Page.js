import React, { Component } from 'react';
import './App.css';
import BackgroundImage from './BackgroundImage'
import YoutubeEmbed from './YoutubeEmbed'
import InfoBlock from './InfoBlock'
import IntroBlock from './IntroBlock'
import ardabilCarpetImage from './images/Ardabil_Carpet.jpg'
import raphaelCartoonImage from './images/Raphael_Cartoon.jpg'

export default class Page extends Component {
  raphaelInfo() {
    return (
      <div>
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
        <YoutubeEmbed videoSource='https://www.youtube.com/embed/jWxsu7qOjo8'
                      title='Raphael'/>
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
          The Low Countries has been an important
          centre for cloth-weaving since the early 14th
          centure. The cartoons were sent there and
          slced into large strips to make templates for
          the weavers to use. Although they were
          reassembled in the 17th centurey, today the
          joins are still faintly visible.
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <BackgroundImage image={ardabilCarpetImage} />
        <IntroBlock />
        <BackgroundImage image={raphaelCartoonImage} />
        <InfoBlock title='The Raphael Cartoons, 1515-16'
                   subTitle='Raphael (1483-1520)'
                   mapLink='https://www.vam.ac.uk/features/digitalmap/#l=1&r=room48a'
                   location='THE RAPHAEL CARTOONS, Room 48a, Level 1'
                   mapPin='1'
                   body={this.raphaelInfo}
                   credit='On loan from Her Majesty Queen Elizabeth II'/>
      </div>
    );
  }
}
