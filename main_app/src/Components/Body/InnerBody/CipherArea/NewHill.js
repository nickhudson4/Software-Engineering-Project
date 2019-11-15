import React, { Component } from 'react';
import './CipherArea.css';
import Table from './Table';
import { hill } from './Hill.js'

/*
    Renders specific component based on cipher chosen.
    Actual cipher backend logic will come from here


    thisisatestinput encrypted with 3 rails:

t      i     e       n
  h  s  s  t   s   i   p   t  => tienhsstsiptiatu
   i     a       t       u

*/

class NewColumnar extends Component {
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
                <h1>Hill</h1>

                <div id="input_textArea_div" className="input_text_area">
                    <textarea className="inputOutput_textArea" id="input_textArea" placeholder="Encrypt" rows="10" cols="25"></textarea><br/>
                    <textarea className="inputOutput_textArea" id="keyword_area" placeholder="Matrix" rows="1" cols="25"></textarea><br/>
                    <textarea className="inputOutput_textArea" id="size_area" placeholder="Size" rows="1" cols="2"></textarea>
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

export default NewColumnar;


const Encrypt = (props) => {
 //columnar.start(props.inputKeyword)
 //var temp = columnar.encrypt(props.inputText)
 var matrix = document.getElementById("keyword_area").value;
 var encryptionWord = document.getElementById("input_textArea").value;
 var size = document.getElementById("size_area").value;
 var temp = hill.encrypt(encryptionWord, matrix, size);
 var output1 = temp.toString();
 output1 = output1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
 //var temp = props.inputText
 return (
     <OutputTextarea message={output1} />
 );
}



const Decrypt = (props) => {
  //columnar.start(props.inputKeyword)
  //var temp = columnar.translate(props.inputText)
  //var temp2 = columnar.generateMatrix("abcdefghiklmnopqrstuvwxyz" )
  //var keyword = document.getElementById("keyword_area").value;

  //var temp2 = columnar.decryption("XFDDDDFAFGXG", keysquare, keyword);
  //var temp2 = hill.decrypt("ixeutptxnxst", "german");
    return (
        <OutputTextarea message={"No Decrypt for Hill"} />
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
