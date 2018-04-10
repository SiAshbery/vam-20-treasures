import React, { Component } from 'react';
import './App.css';
import BackgroundImage from './BackgroundImage'
import YoutubeEmbed from './YoutubeEmbed'
import SketchfabEmbed from './SketchfabEmbed'
import InfoBlock from './InfoBlock'
import IntroBlock from './IntroBlock'
import BackPage from './BackPage'
import ardabilCarpetImage from './images/Ardabil_Carpet.jpg'
import raphaelCartoonImage from './images/Raphael_Cartoon.jpg'
import tipuTigerImage from './images/Tipu_Tiger.jpg'
import VAMImage from './images/VAM_background.jpg'

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

  tigerInfo() {
    return (
      <div>
        <p>
          Tipu’s Tiger is seen as a symbol of the
          strength of its owner, Tipu Sultan. Tipu
          was ruler of Mysore in south India from
          1782 to 1799. A powerful leader, he fought
          back against attacks on his kingdom
          from the British East India Company.
        </p>
        <SketchfabEmbed videoSource='https://sketchfab.com/models/bb41d9410d134d82b11f6366990adc48/embed'
          title='Lion' />
        <p>
          The tiger
          was Tipu’s personal emblem – he had many of
          his possessions decorated with tiger designs,
          including his throne. This almost life-sized model
          shows a tiger devouring a European enemy. A
          handle on the side of its body can be turned to
          work a mechanical organ hidden inside, which
          makes the sound of the growling animal and cries
          of its victim.
        </p>
        <p>
          Tipu was defeated by the British in 1799, and
          this tiger was taken from his palace and brought
          to London. It was exhibited in the East India
          Company’s museum where it became a favourite
          with visitors. Moved to the South Kensington
          Museum (now the V&A) in 1879, it continues to
          intrigue.
        </p>
        <YoutubeEmbed videoSource='https://www.youtube.com/embed/jVPq_7kIufw'
                      title='Tipu'/>
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
        <BackgroundImage image={tipuTigerImage} />
        <InfoBlock title='Tipu’s Tiger, about 17935'
                   mapLink='https://www.vam.ac.uk/features/digitalmap/#l=1&r=room41'
                   location='south asia, Room 41, Level 1'
                   mapPin='2'
                   body={this.tigerInfo}
                   credit='Museum no. 2545 (IS)'/>
        <BackgroundImage image={VAMImage} />
        <BackPage />
      </div>
    );
  }
}
