
//Still Needs a hell of alot of Comments
import React, { Component } from 'react';
import {Form, Field} from 'simple-react-forms'
import { adfgvx } from './ADFGVX.js'
import { adfgx } from './ADFGX.js'
import { twosquare } from './TwoSquare.js'
import { foursquare } from './FourSquare.js'
import { playfair } from './Playfair.js'
import { vigenere } from './Vigenere.js'
import Header from './pageComponents/header.js'
import Footer from './pageComponents/footer.js'
import HomePage from './pages/homePage.js'
import testpage from './pages/testPage.js'
import ADFGVXPAGE from './pages/ADFGVXPage.js'
import ADFGXPAGE from './pages/ADFGXPage.js'
import PLAYFAIRPAGE from './pages/PlayfairPage.js'
import VIGENEREPAGE from './pages/VigenerePage.js'
import TWOSQUAREPAGE from './pages/TwoSquarePage.js'
import FOURSQUAREPAGE from './pages/FourSquarePage.js'
import './Assets/css/body.css'
import './Assets/css/head.css'
import './Assets/css/feet.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="App">

        {/*Call to our header class in our header.js file*/}
        <Router>
          <Header />
        {/*<br/>Starting ADFGVX: {adfgvx.start("keyword","AA")}
        <br/>Keyword: {adfgvx.keyword()}
        <br/>Encryption: {adfgvx.encrypt("test")}
        <br/>Encryption Word: {adfgvx.eWord()}
        <br/>Decryption: {adfgvx.decrypt("AADDFF")}
        <br/>Decryption Word: {adfgvx.dWord()}
        <br/>ADFGVX

        <br/><br/>Starting ADFGX: {adfgx.start("keyword","AA")}
        <br/>Keyword: {adfgvx.keyword()}
        <br/>Encryption: {adfgx.encrypt("test")}
        <br/>Encryption Word: {adfgx.eWord()}
        <br/>Decryption: {adfgx.decrypt("AAFDXF")}
        <br/>Decryption Word: {adfgvx.dWord()}
        <br/>ADFGX


        <br/><br/>Starting Two Square: {twosquare.start()}
        <br/>Encryption/Decryption: {twosquare.encrypt("dlywumwg")}
        <br/>Keyword 1: {twosquare.keyword1f()}
        <br/>Keyword 2: {twosquare.keyword2f()}
        <br/>Encryption/Decryption word: {twosquare.eWord()}
        <br/>Twosquare

        <br/><br/>Starting Four Square: {foursquare.start()}
        <br/>Keyword 1: {foursquare.keyword1f()}
        <br/>Keyword 2: {foursquare.keyword2f()}
        <br/>Encryption: {foursquare.encrypt("test")}
        <br/>Decryption: {foursquare.decrypt("ahtt")}
        <br/>Foursquare


        <br/><br/>Starting Playfair: {playfair.start()}
        <br/>Encryped Word: {playfair.encrypt("keywckub")}
        <br/>Encryption Word: {playfair.eWord()}
         <br/>Playfair

        <br/><br/>Starting Vigenere: {vigenere.start()}
        <br/>Encryption: {vigenere.encrypt("test")}
        <br/>Encryption Word: {vigenere.eWord()}
         <br/>Vigenere*/}


        <Route exact path='/' component={HomePage} />
        <Route exact path='/testPage' component={testpage} />
        <Route exact path='/ADFGXPage' component={ADFGXPAGE} />
        <Route exact path='/ADFGVXPage' component={ADFGVXPAGE} />
        <Route exact path='/PlayfairPage' component={PLAYFAIRPAGE} />
        <Route exact path='/TwoSquarePage' component={TWOSQUAREPAGE} />
        <Route exact path='/FourSquarePage' component={FOURSQUAREPAGE} />
        <Route exact path='/VigenerePage' component={VIGENEREPAGE} />


        {/*Displays what we want from the homepage file*/}
        {/*}<br/><HomePage />
        <br/><testpage />*/}
        {/*Call to our footer class in our header.js file*/}
        {/*<br/><Footer />*/}
        <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
