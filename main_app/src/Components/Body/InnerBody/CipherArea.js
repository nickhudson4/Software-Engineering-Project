// import React, { Component } from 'react';
// import './InnerBody.css';
// import Cipher from './CipherArea/Cipher';

/*
  Static components that are shared between each cipher.
  Components specific to a cipher are in <Cipher/>.
  Mainly used for creating input/output text areas
  and getting original input
*/

// class CipherArea extends Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       inputText: '',
//       mode: ''
//     }
//   }
//   render() {
//     return (
//         <div id="cipherArea_div">
//           <textarea className="inputOutput_textArea" id="input_textArea" placeholder="Input" rows="25" cols="80"></textarea>
//           <br/>
//           <button type="button" onClick={this.encryptOnClick}>Encrypt</button>
//           <button type="button" onClick={this.decryptOnClick}>Decrypt</button>


//           <Cipher whichCipherClicked = {this.props.whichCipherClicked} inputText = {this.state.inputText} mode = {this.state.mode}/>
//         </div>
//     );
//   }

//   encryptOnClick = () => {
//     var text = document.getElementById("input_textArea").value;  //Inputed text
//     this.setState({
//       inputText: text,
//       mode: 'encrypt'
//     })
//   }
//   decryptOnClick = () => {
//     var text = document.getElementById("input_textArea").value;  //Inputed text
//     this.setState({
//       inputText: text,
//       mode: 'decrypt'
//     })
//   }
// }

import React, { Component } from 'react';
import './InnerBody.css';
import MonoAlphSub from './CipherArea/MonoAlphSub';
import RailFence from './CipherArea/RailFence';
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
  else { //Error return empty div
    return (
      <div></div>
    );
  }
  
}

export default CipherArea;