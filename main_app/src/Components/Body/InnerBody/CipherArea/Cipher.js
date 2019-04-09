import React, { Component } from 'react';
import './CipherArea.css';
import MonoAlphSub from './Cipher/MonoAlphSub';
/*
    Renders specific component based on cipher chosen
*/

class Cipher extends Component {
  render() {
    return (
        <div>
          <GetCipher whichCipher = {this.props.whichCipherClicked}/>
        </div>
    );
  }
}

//Renders which cipher the user clicked
const GetCipher = (props) => {
  if (props.whichCipher === 'mono'){
    return (
      <MonoAlphSub inputText = {props.inputText}/>
    );
  }
  else { //Error return empty div
    return (
      <div></div>
    );
  }
  
}



export default Cipher;