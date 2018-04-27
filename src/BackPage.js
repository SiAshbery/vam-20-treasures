import React, { Component } from 'react';
import './stylesheets/App.css';
import fundingInfo from './images/icons/funding.png'

export default class BackPage extends Component {
  render() {
    return (
      <div className="backpage__body">
        <div className="infoblock__content">
          <div className="backpage__text">
            <div className="backpage__content-block">
              <h1 className="backpage__title--main">
                Explore treasures of the V&A
              </h1>
              <p>
                Use this guide to discover 20 highlights in
                the Museum. The location of each object is
                indicated on the map. Visit as many as you
                like or choose your favourite.
              </p>
              <p>
                While we have made every effort to make
                sure that each of the 20 Treasures are on
                display, sometimes galleries have to be
                closed for renovation or objects need to be
                conserved.
              </p>
              <p>
                Please ask a member of staff if you cannot
                find an object or need any help.
              </p>
            </div>
            <div className="backpage__content-block">
              <h1 className="backpage__title--main">
                Find out more 
              </h1>
                <p>
                  <a href="https://www.vam.ac.uk/collections">
                    See the V&A collection online
                  </a>
                </p>
                <p>
                  <a href="https://www.vam.ac.uk/vamstory">
                    Discover the Museum’s history and architecture
                  </a>
                </p>
                <p>
                  <a href="https://www.vam.ac.uk/secretseekers">
                    Families can uncover the secrets of the V&A by playing
                    V&A Secret Seekers online when exploring the Museum. 
                  </a>
                </p>
                <p>
                  <a href="https://www.vam.ac.uk/membership">
                    Love the V&A? Why not become a Member?
                  </a>
                </p>
                <p>
                  Join the conversation. What is your V&A treasure?
                  #vamTreasures
                </p>
              </div>
              <img src={fundingInfo} className="backpage__funding-info" alt="funded by the national lottery"/>
            </div>
          </div>
        </div>
    );
  }
}
