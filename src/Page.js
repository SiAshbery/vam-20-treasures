import React, { Component } from 'react';
import './stylesheets/App.css';
import YoutubeEmbed from './YoutubeEmbed'
import SketchfabEmbed from './SketchfabEmbed'
import InfoBlock from './InfoBlock'
import IntroBlock from './IntroBlock'
import BackPage from './BackPage'

// images
import BackgroundImage from './BackgroundImage'
import raphaelCartoonImage from './images/Raphael_Cartoon.jpg'
import tipuTigerImage from './images/Tipu_Tiger.jpg'
import VAMImage from './images/VAM_background.jpg'
import ardabilCarpetImage from './images/Ardabil_Carpet.jpg'
import stJohnImage from './images/st-john.jpg'

export default class Page extends Component {
  grandEntranceInfo() {
    return (
      <div>
        <p>
          Entering the V&A through the Grand Entrance you
          immediately come into a large, domed space. 
        </p>
        <YoutubeEmbed videoSource='https://www.youtube.com/embed/BIGBx3A67AI'
                      title='Entrance'/>
        <p>
          Its form and decoration draw on the Classical Revival style of
          16th century France, with pillars, arches, a dome and
          surroundings of polished marble and stone. The aim was to
          create an impression of grandeur and refinement.
        </p>
        <p>
          The Grand Entrance was also designed for practical purposes.
          Circulation space was needed for people to plan their visit, get
          information or meet others. These activities still take place today.
        </p>
        <p>
          Walk through the Grand Entrance hall and continue straight ahead through the Shop.
          Carry on and go through the doors into the Garden. 
        </p>
      </div>
    );
  }

  ardabilCarpetInfo() {
    return (
      <div>
        <p>
          The Ardabil Carpet is the world's oldest dated
          carpet and one of the largest, most beautiful
          and historically important.
        </p>
        <YoutubeEmbed videoSource='https://www.youtube.com/embed/BIGBx3A67AI'
          title='Entrance' />
        <p>
          It was made in the town of Ardabil in north-west Iran,
          the burial place of Shaykh Safi al-Din Ardabili,
          who died in 1334.
          The Shaykh was a Sufi leader,
          ancestor of Shah Ismail,
          founder of the Safavid dynasty (1501-1722).
          While the exact origins of the carpet are unclear,
          it's believed to have been commissioned by the court for the shrine of the Shaykh,
          which, by the 16th century, had became a place of pilgrimage.
        </p>
        <p>
          We can date the carpet exactly thanks to an inscription on one edge,
          which contains a poetic inscription,
          a signature - 'The work of the slave of the portal, Maqsud Kashani’,
          and the date, 946 in the Muslim calendar, equivalent to AD 1539 - 1540.
          Maqsud was probably the court official charged with producing the carpet and not a slave in the literal sense.
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
        <SketchfabEmbed modelSource='https://sketchfab.com/models/bb41d9410d134d82b11f6366990adc48/embed'
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

  stJohnInfo() {
    return (
      <div>
        <p>
          St John the Baptist was Rodin's second large bronze
          figure study. Begun in 1878, the head was exhibited
          independently in the Paris Salon of 1879,
          followed by the whole figure in plaster in 1880
          (with a cross, later abandoned) and in bronze
          the following year. It was acquired by the French
          state in 1884 for the Luxembourg Gardens in Paris.
          An early model for the figure,
          lacking the head and arms,
          was later exhibited as the Walking Man. 
        </p>
        <p>
          To counteract the damning criticism of casting
          from the live model that greeted his first figure,
          The Age of Bronze, the figure of St John the Baptist
          was made slightly over life-size.
        </p>
        <SketchfabEmbed modelSource='https://sketchfab.com/models/387889bbe73648c38589a3fffd1f876c/embed'
          title='Rodin' />
        <p>
           Rodin did not set out to make a religious subject,
         but the naturally awkward yet forceful pose of his untrained model,
         an Italian peasant from the Abruzzi named Pignatelli
         (the head was taken from a separate model), suggested to
         him a raw mystical character appropriate to the Baptist. This bronze,
         the first work by Rodin to enter an English public collection,
         was presented to the Museum in 1902 by a committee of the
         sculptor's supporters who had set up a subscription to acquire one of
         his pieces for the nation. To acknowledge the successful campaign,
         Rodin was invited to a celebration at the Café Royal, after which students
         from the Slade and South Kensington
         Art Schools pulled Rodin's carriage through the streets of
         London in homage to the artist. St John the Baptist thus became
         the official symbol of Rodin's dominant influence on establishment
         sculpture of the early 20th century. The Museum's collection of Rodin's
         sculpture was later substantially increased by the gift of 18 works from
         the artist himself in 1914.
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
      {/* offsetTop from the above div */}
        <IntroBlock />
        <InfoBlock title='The Grand Entrance, 1904–1909'
          subTitle='Aston Webb (1849-1930)'
          mapLink='https://www.vam.ac.uk/features/digitalmap/#l=1&r=access_x5F_entrance_x5F_grand'
                   location='THE GRAND ENTRACE, Level 1'
                   mapPin='1'
                   body={this.grandEntranceInfo}
                   credit='On loan from Her Majesty Queen Elizabeth II'
                   backgroundImage={VAMImage}/>
        <InfoBlock title='The Ardabil Carpet, 1539-1540'
                   subTitle='Unknown'
                   mapLink='https://www.vam.ac.uk/features/digitalmap/#l=1&r=room42'
                   location='Islamic Middle East, Room 42, Level 1'
                   mapPin='2'
                   body={this.ardabilCarpetInfo}
                   credit=''
                   backgroundImage={ardabilCarpetImage} />
        <InfoBlock title='Tipu’s Tiger, about 1795'
                   mapLink='https://www.vam.ac.uk/features/digitalmap/#l=1&r=room41'
                   location='south asia, Room 41, Level 1'
                   mapPin='3'
                   body={this.tigerInfo}
                   credit='Museum no. 2545 (IS)'
                   backgroundImage={tipuTigerImage}/>
        <InfoBlock title='St John the Baptist, 1881'
                   subTitle='Auguste Rodin (1840-1917)'
                   mapLink='https://www.vam.ac.uk/features/digitalmap/#l=1&r=room21a'
                   location='Sculpture, Room 21a, Level 1'
                   mapPin='4'
                   body={this.stJohnInfo}
                   credit='Presented to the Museum by a Committee of Subscribers'
                   backgroundImage={stJohnImage} />
        <BackgroundImage image={VAMImage} />
        <BackPage />
      </div>
    );
  }
}

