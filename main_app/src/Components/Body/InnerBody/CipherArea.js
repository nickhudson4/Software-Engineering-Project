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
      <div>
        <GetCipher whichCipher={this.props.whichCipherClicked} />
        <QuickHelp whichCipher={this.props.whichCipherClicked} />
      </div>
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

const QuickHelp = (props) => {

  if (props.whichCipher === 'mono'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About Mono-Alphabetic Substitution</b></h3>
        <p>The Rail Fence cipher, like the Scytale cipher, is a transposition cipher. There are several ways that the rail fence can be set up, we use the most common method found in the literature, also known as the zig-zag cipher.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message.</p>
      </div>
    );
  }
  else if (props.whichCipher === 'rail'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About Rail Fence</b></h3>
        <p>The Rail Fence cipher, like the Scytale cipher, is a transposition cipher. There are several ways that the rail fence can be set up, we use the most common method found in the literature, also known as the zig-zag cipher.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message.</p>
      </div>
    );
  }
  else if (props.whichCipher === 'adfgx'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About ADFGX</b></h3>
        <p>The Rail Fence cipher, like the Scytale cipher, is a transposition cipher. There are several ways that the rail fence can be set up, we use the most common method found in the literature, also known as the zig-zag cipher.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message.</p>
      </div>
    );
  }
  else if (props.whichCipher === 'adfgvx'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About ADFGVX</b></h3>
        <p>The Rail Fence cipher, like the Scytale cipher, is a transposition cipher. There are several ways that the rail fence can be set up, we use the most common method found in the literature, also known as the zig-zag cipher.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message.</p>
      </div>
    );
  }
  else if (props.whichCipher === 'four'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About Four Square</b></h3>
        <p>The Rail Fence cipher, like the Scytale cipher, is a transposition cipher. There are several ways that the rail fence can be set up, we use the most common method found in the literature, also known as the zig-zag cipher.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message.</p>
      </div>
    );
  }
  else if (props.whichCipher === 'two'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About Two Square</b></h3>
        <p>The Rail Fence cipher, like the Scytale cipher, is a transposition cipher. There are several ways that the rail fence can be set up, we use the most common method found in the literature, also known as the zig-zag cipher.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message.</p>
      </div>
    );
  }
  else if (props.whichCipher === 'play'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About PlayFair</b></h3>
        <p>The Rail Fence cipher, like the Scytale cipher, is a transposition cipher. There are several ways that the rail fence can be set up, we use the most common method found in the literature, also known as the zig-zag cipher.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message.</p>
      </div>
    );
  }
  else if (props.whichCipher === 'vig'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About Vigenre</b></h3>
        <p>The Rail Fence cipher, like the Scytale cipher, is a transposition cipher. There are several ways that the rail fence can be set up, we use the most common method found in the literature, also known as the zig-zag cipher.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message.</p>
      </div>
    );
  }
  else { //Error return empty div
    return (
      <div></div>
    );
  }
}
export default CipherArea;
