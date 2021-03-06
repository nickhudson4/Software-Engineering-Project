import React, { Component } from 'react';
import './Vigenere.js'
import { adfgvx } from './ADFGVX.js'
import { adfgx } from './ADFGX.js'
import { twosquare } from './TwoSquare.js'
import { foursquare } from './FourSquare.js'
import { playfair } from './Playfair.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }


  render() {
    return (
      <div>
        {/*<br/>Coded Cipher Text: {GFG.ciText("00000000")}
        <br/>Keyword: {GFG.ciKey("00000000")}
        <br/>Key: {GFG.ciKeyword(this.state.value)}
        {matrix(5)}*/}
        Letter Found: {}
        <br/>Search Entered: {adfgvx.start("keyword","FA")}
        <br/>Keyword: {}
        {/*<br/>Value Recorded: {this.state.value.split("").reverse().join("")}
        <br/>Value Desired   <input type="text" value={this.state.value}
        onChange={this.handleChange} />*/}
      </div>
    );
  }
}

export default App;