import React, { Component } from 'react';
import './CipherArea.css';
import Table from './Table';
import { readfgvx } from './reADFGVX.js'

/*
    Renders specific component based on cipher chosen.
    Actual cipher backend logic will come from here


    thisisatestinput encrypted with 3 rails:

t      i     e       n
  h  s  s  t   s   i   p   t  => tienhsstsiptiatu
   i     a       t       u

*/

class NewADFGX extends Component {
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
                <h1>ADFGVX</h1>
                <br/><h4  style={{color: 'white'}}>History :In cryptography, the ADFGVX cipher was a field cipher used by the German Army during World War I. ADFGVX was in fact an extension of an earlier cipher called the ADFGX cipher. Invented by Colonel Fritz Nebel and introduced in March 1918, the cipher was a fractionating transposition cipher which combined a modified Polybius square with a single columnar transposition. The cipher is named after the six possible letters used in the ciphertext: A, D, F, G, V and X. These letters were chosen deliberately because they sound very different from each other when transmitted via morse code. The intention was to reduce the possibility of operator error.</h4><br/>

                <br/><h4  style={{color: 'white'}}>Steps:<br/>
                1. Build a 5x5 table to represent ADFGVX<br/>
                2. Encode the plaintext using the matrix, and it will be of AADD.. form<br/>
                3. Write the code word with the enciphered plaintext underneath<br/>
                4. Perform a columnar transposition<br/>
                5. Read the final ciphertext off in columns<br/>
                </h4><br/>

                <div id="input_textArea_div" className="input_text_area">
                    <textarea className="inputOutput_textArea" id="input_textArea" placeholder="Encrypt" rows="25" cols="25"></textarea>
                    <textarea className="inputOutput_textArea" id="input_textArea2" placeholder="Decrypt" rows="25" cols="25"></textarea><br/>
                    <textarea className="inputOutput_textArea" id="keyword_area" placeholder="Keyword" rows="1" cols="25"></textarea>
                    <textarea className="inputOutput_textArea" id="keysquare_area" placeholder="Keysquare" rows="1" cols="25"></textarea>
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

export default NewADFGX;


const Encrypt = (props) => {
 //adfgx.start(props.inputKeyword)
 //var temp = adfgx.encrypt(props.inputText)
 var keyword = document.getElementById("keyword_area").value;
 var keysquare = document.getElementById("keysquare_area").value;
 var encryptionWord = document.getElementById("input_textArea").value;
 //var temp2 = readfgvx.encryption(encryptionWord, keysquare, keyword);
 //var temp = props.inputText
 var temp2 = readfgvx.encryption(encryptionWord, keysquare, keyword);
 return (
     <OutputTextarea message={temp2} />
 );
}



const Decrypt = (props) => {
  //adfgx.start(props.inputKeyword)
  //var temp = readfgvx.translate(props.inputText)
  //var temp2 = readfgvx.generateMatrix("abcdefghiklmnopqrstuvwxyz" )
  var keyword = document.getElementById("keyword_area").value;
  var keysquare = document.getElementById("keysquare_area").value;
  var decryptionWord = document.getElementById("input_textArea2").value;
  //var temp2 = readfgvx.decryption("XFDDDDFAFGXG", keysquare, keyword);
  var temp2 = readfgvx.decryption(decryptionWord, keysquare, keyword);
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
