import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import 'typeface-open-sans';
import 'typeface-montserrat';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import dribbble from '@fortawesome/fontawesome-free-brands/faDribbble';
import linkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import spotify from '@fortawesome/fontawesome-free-brands/faSpotify';

fontawesome.library.add(brands, faEnvelope, dribbble, linkedIn, spotify);

// Sample use of a icon in a template...

// const Beverage = () => (
//     <div>
//         <FontAwesomeIcon icon="check-square"/>
//         Favorite beverage: <FontAwesomeIcon icon="coffee"/>
//     </div>
// )

class App extends Component {
  render() {
    return (
      <div className="main">
        <img src={logo} className="ee-logo" alt="eightyeight logo" />
        <h1>Product Designer,<br/>Front End Developer,<br />Husband & Father… of twins.</h1>
        <p>My name is Skylar Everett. I have been helping people design and develop brands,
        websites, illustrations, and apps for the last eight years. If you’re looking to get
        something cooking, I’m always hungry. Simply give me a shout and we can talk about
        what’s on your mind. You can click the links below to download a copy of my resume,
        email me, check out my work on dribble, see my linkedin profile, or even take a look
        at my musical inclinations. I look forward to working with you!</p>
        <div className="home-links">
          <a href="{process.env.PUBLIC_URL + '/skylar_everett_resume_2018.pdf'}">Resume</a>
          <a href="mailto:hello@eighty-eight.co"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="https://dribbble.com/skylareverett"><FontAwesomeIcon icon={dribbble} /></a>
          <a href="https://www.linkedin.com/in/skylareverett"><FontAwesomeIcon icon={linkedIn} /></a>
          <a href="https://open.spotify.com/user/skytown?si=_484CT0ESu2BSbVAZSWx6A"><FontAwesomeIcon icon={spotify} /></a>
        </div>
      </div>
    );
  }
}

export default App;
