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
import NewColumnar from './CipherArea/NewColumnar';
import NewMono from './CipherArea/NewMono';
import NewAtbash from './CipherArea/NewAtbash';
import NewKama from './CipherArea/NewKama';
import NewEnigma from './CipherArea/NewEnigma';
import NewHill from './CipherArea/NewHill';
/*
    Renders specific component based on cipher chosen
*/

class CipherArea extends Component {
  render() {
    return (
      <div>
        <GetCipher whichCipher = {this.props.whichCipherClicked}/>
        <QuickHelp whichCipher = {this.props.whichCipherClicked}/>
      </div>

    );
  }
}

//Renders which cipher the user clicked
const GetCipher = (props) => {

  if (props.whichCipher === 'mono'){
    return (
      <NewMono/>
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
  else if (props.whichCipher === 'col'){
    return (
      <NewColumnar/>
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
  else if (props.whichCipher === 'at'){
    return (
      <NewAtbash/>
    );
  }
  else if (props.whichCipher === 'kama'){
    return (
      <NewKama/>
    );
  }
  else if (props.whichCipher === 'enig'){
    return (
      <NewEnigma/>
    );
  }
  else if (props.whichCipher === 'hill'){
    return (
      <NewHill/>
    );
  }
  else { //Error return empty div
    return (
      <div></div>
    );
  }

}
const QuickHelp = (props) => {

  if (props.whichCipher === 'col'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About Columnar</b></h3>
        <p>An easy to implement cipher, the Columnar cipher follows a formula of mixing up the characters in teh plain text to for cipher text.
        This cipher is usually combined with other techniques to make them stront, for example, the ADFGVX cipher.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Encryption box.</p>
        <p>2. Input a Keyword into the Keyword box.</p>
        <p>3. Input a Keysquare into the Keysquare box.</p>
        <p>4. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Decryption box.</p>
        <p>2. Input a Keyword into the Keyword box.</p>
        <p>3. Input a Keysquare into the Keysquare box.</p>
        <p>4. Click the Decrypt button. At this point the Output box will display the plaintext message <br/><br/><br/></p>
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
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message <br/><br/><br/></p>
      </div>
    );
  }
  else if (props.whichCipher === 'adfgx'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About ADFGX</b></h3>
        <p>One of the most famous Ciphers in history, the ADFGX cipher was introduced by the Germans in WWI
        and was based off of Polybius</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Encryption box.</p>
        <p>2. Input a Keyword into the Keyword box.</p>
        <p>3. Input a Keysquare into the Keysquare box.</p>
        <p>4. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Decryption box.</p>
        <p>2. Input a Keyword into the Keyword box.</p>
        <p>3. Input a Keysquare into the Keysquare box.</p>
        <p>4. Click the Decrypt button. At this point the Output box will display the plaintext message <br/><br/><br/></p>
      </div>
    );
  }
  else if (props.whichCipher === 'adfgvx'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About ADFGVX</b></h3>
        <p>Invented by a german radio officer, Fritz Nebel, the German army started to use
        as an update to it's predecessor the ADFGX cipher in 1918. This Cipher involves Polybius
        square substitution for encryption. This cipher was prefered to ADFGX because you could now
        include j and numbers into messages, as well as making them more difficult to crack.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Encryption box.</p>
        <p>2. Input a Keyword into the Keyword box.</p>
        <p>3. Input a Keysquare into the Keysquare box.</p>
        <p>4. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Decryption box.</p>
        <p>2. Input a Keyword into the Keyword box.</p>
        <p>3. Input a Keysquare into the Keysquare box.</p>
        <p>4. Click the Decrypt button. At this point the Output box will display the plaintext message <br/><br/><br/></p>
      </div>
    );
  }
  else if (props.whichCipher === 'four'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About Four Square</b></h3>
        <p>The Four Square cipher created by Felix Delastelle and published in his book in 1902. Uses four 5x5 matracies in a square formation. Each with 25
        letters. It also uses 2 keys for a more secure encryption.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message <br/><br/><br/></p>
      </div>
    );
  }
  else if (props.whichCipher === 'two'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About Two Square</b></h3>
        <p>The 2 square is a secure digraph substiution cipher meant to succeed the the Playfair Cipher</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Input box.</p>
        <p>2. Input the number of rails being used.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message <br/><br/><br/></p>
      </div>
    );
  }
  else if (props.whichCipher === 'play'){
    return (
      <div className="quickHelp_div">
        <h1>Quick Help</h1>
        <h3><b>About PlayFair</b></h3>
        <p>The Playfair cipher was invted in 1854 by Charles Wheatstone and was the first digraph substitution cipher. It was named after
        (Not kidding) Lord Playfair, who promoted it's use. It uses encrypted pairs of letters called diagraphs.</p>
        <h3><b>How To Encrypt</b></h3>
        <p>1. Input the plaintext message into the Encryption box.</p>
        <p>2. Input a Keysquare into the Keysquare box.</p>
        <p>3. Click the Encrypt button. At this point the Output box will display the ciphertext message.</p>
        <h3><b>How To Decrypt</b></h3>
        <p>1. Input the ciphertext message into the Decryption box.</p>
        <p>2. Input a Keysquare into the Keysquare box.</p>
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message <br/><br/><br/></p>
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
        <p>3. Click the Decrypt button. At this point the Output box will display the plaintext message <br/><br/><br/></p>
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
