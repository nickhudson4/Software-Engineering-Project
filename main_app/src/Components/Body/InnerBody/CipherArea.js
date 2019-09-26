import React, { Component } from 'react';
import './InnerBody.css';
import MonoAlphSub from './CipherArea/MonoAlphSub';
import RailFence from './CipherArea/RailFence';
import NewADFGX from './CipherArea/NewADFGX';
import NewADFGVX from './CipherArea/NewADFGVX';
import NewFourSquare from './CipherArea/NewFourSquare';
import NewTwoSquare from './CipherArea/NewTwoSquare';
import NewPlayfair from './CipherArea/NewPlayfair';
import NewVigenere from './CipherArea/NewVigenere';
/*
    Renders specific component based on cipher chosen
*/

class CipherArea extends Component {
  render() {
    return (
        <GetCipher whichCipher = {this.props.whichCipherClicked}/>
    );
  }
}

//Renders which cipher the user clicked
const GetCipher = (props) => {

  if (props.whichCipher === 'mono'){
    return (
      <MonoAlphSub/>
    );
  }
  else if (props.whichCipher === 'rail'){
    return (
      <RailFence/>
    );
  }
  else if (props.whichCipher === 'adfgx'){
    return (
      <NewADFGX/>
    );
  }
  else if (props.whichCipher === 'adfgvx'){
    return (
      <NewADFGVX/>
    );
  }
  else if (props.whichCipher === 'four'){
    return (
      <NewFourSquare/>
    );
  }
  else if (props.whichCipher === 'two'){
    return (
      <NewTwoSquare/>
    );
  }
  else if (props.whichCipher === 'play'){
    return (
      <NewPlayfair/>
    );
  }
  else if (props.whichCipher === 'vig'){
    return (
      <NewVigenere/>
    );
  }
  else { //Error return empty div
    return (
      <div></div>
    );
  }

}

export default CipherArea;
