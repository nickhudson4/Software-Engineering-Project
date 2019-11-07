import React, { Component } from 'react';
import './CipherArea.css';
import Table from './Table';
import { kama } from './Kamasutra.js'

/*
    Renders specific component based on cipher chosen.
    Actual cipher backend logic will come from here


    thisisatestinput encrypted with 3 rails:

t      i     e       n
  h  s  s  t   s   i   p   t  => tienhsstsiptiatu
   i     a       t       u

*/

class NewKama extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: 'german', //keyword_input
            keysquare: 'phqgmeaynofdxkrcvszwbutil',
            inputText: 'attack',
            mode: 'none'
        }
    }



    render() {
        return (
            <div id="railFence_div" className="specific_cipher_class">
                <h1>Kamasutra</h1>

                <div id="input_textArea_div" className="input_text_area">
                    <textarea className="inputOutput_textArea" id="input_textArea" placeholder="Encrypt" rows="25" cols="25"></textarea>
                    <textarea className="inputOutput_textArea" id="input_textArea2" placeholder="Decrypt" rows="25" cols="25"></textarea><br/>
                    <textarea className="inputOutput_textArea" id="keysquare_area" placeholder="Cipher Alphabet" rows="1" cols="25"></textarea>
                    {/* <br/> */}
                    <div id="actions_div_id" className="actions_div">
                        <button type="button" onClick={this.encryptOnClick}>Encrypt</button>
                        <button type="button" onClick={this.decryptOnClick}>Decrypt</button>

                    </div>


                </div>
                <LoadMode mode = {this.state.mode} inputKeyword = {this.state.keyword} inputText = {this.state.inputText} inputKeysquare = {this.state.keysquare}/>
            </div>
        );
    }

  encryptOnClick = () => {
    var text = document.getElementById("input_textArea").value;  //Inputed text
    this.setState({
      inputText: text,
      mode: 'encrypt'
    })
  }

  decryptOnClick = () => {
    var text = document.getElementById("input_textArea2").value;  //Inputed text
    this.setState({
      inputText: text,
      mode: 'decrypt'
    })
  }
}

export default NewKama;


const Encrypt = (props) => {
 //kama.start(props.inputKeyword)
 //var temp = kama.encrypt(props.inputText)
 var cipherAlphabet = document.getElementById("keysquare_area").value;
 var encryptionWord = document.getElementById("input_textArea").value;
 var temp = kama.encrypt(cipherAlphabet, encryptionWord);
 //var temp = props.inputText
 return (
     <OutputTextarea message={temp} />
 );
}




const Decrypt = (props) => {
  //kama.start(props.inputKeyword)
  //var temp = kama.translate(props.inputText)
  //var temp2 = kama.generateMatrix("abcdefghiklmnopqrstuvwxyz" )
  var cipherAlphabet = document.getElementById("keysquare_area").value;
  var decryptionWord = document.getElementById("input_textArea2").value;
  //var temp2 = kama.decryption("XFDDDDFAFGXG", keysquare, keyword);
  var temp2 = kama.encrypt(cipherAlphabet, decryptionWord);
    return (
        <OutputTextarea message={temp2} />
    );
}



var copyToClipboard = (e) => {
    var textAreaToCopy = document.getElementById('output_textArea');
    textAreaToCopy.select();
    document.execCommand('copy');
    e.target.focus();
};


const LoadMode = (props) => {
    var mode = props.mode;
    var inputKeyword = props.keyword;
    var inputKeysquare = props.keysquare;
    var inputText = props.inputText;

    if (mode === 'encrypt'){
        return (
            <Encrypt inputKeyword = {inputKeyword} inputText = {inputText}/>
        );
    }
    else if (mode === 'decrypt'){
        return (
            <Decrypt inputKeyword = {inputKeyword} inputText = {inputText}/>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

/* Renders the text area with encrypted/decrypted string  */
const OutputTextarea = (props) => {
    return (
        <div id="output_textArea_div" className="output_text_area">
            <textarea className="inputOutput_textArea" id="output_textArea" value={props.message} placeholder="Output" rows="25" cols="80" onChange={() => {}}></textarea>
            <br/><button onClick={copyToClipboard}>Copy <br/> Output</button>
        </div>
    );
}
