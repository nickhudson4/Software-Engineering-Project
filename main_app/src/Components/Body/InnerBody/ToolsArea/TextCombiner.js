import React, { Component } from 'react';
import './ToolsArea.css';
import { combine } from './Combine.js'
//import Table from './Table';
/*
    Renders specific component based on cipher chosen.
    Actual cipher backend logic will come from here


    thisisatestinput encrypted with 3 rails:

t      i     e       n
  h  s  s  t   s   i   p   t  => tienhsstsiptiatu
   i     a       t       u

*/

class TextCombiner extends Component {
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
                <h1>Text Combiner</h1>
                <div id="input_textArea_div" className="input_text_area">
                    <textarea className="inputOutput_textArea" id="input_textArea" placeholder="Input A" rows="1" cols="26"></textarea><br/>
                    <textarea className="inputOutput_textArea" id="input_textArea2" placeholder="Input B" rows="1" cols="26"></textarea><br/>
                    <textarea className="inputOutput_textArea" id="input_textArea3" placeholder="Amount A" rows="1" cols="10"></textarea>
                    <textarea className="inputOutput_textArea" id="input_textArea4" placeholder="Amount B" rows="1" cols="10"></textarea>
                    {/* <br/> */}
                    <div id="actions_div_id" className="actions_div">
                        <button type="button" onClick={this.encryptOnClick}>Combine</button>
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
}


export default TextCombiner;


const Encrypt = (props) => {
 //atbash.start(props.inputKeyword)
 //var temp = atbash.encrypt(props.inputText)
 var input1 = document.getElementById("input_textArea").value;
 var input2 = document.getElementById("input_textArea2").value;
 var amountInput1 = parseFloat(document.getElementById("input_textArea3").value);
 var amountInput2 = parseFloat(document.getElementById("input_textArea4").value);
 //var temp = atbash.encrypt(encryptionWord);
 var temp = combine.parse(input1, input2, amountInput1, amountInput2);
 var output = temp.toString();
 output = output.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
 //temp = temp.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
 return (
     <OutputTextarea message={output} />
 );
}




const Decrypt = (props) => {
  //atbash.start(props.inputKeyword)
  //var temp = atbash.translate(props.inputText)
  //var temp2 = atbash.generateMatrix("abcdefghiklmnopqrstuvwxyz" )
  //var decryptionWord = document.getElementById("input_textArea2").value;
  //var temp2 = atbash.decryption("XFDDDDFAFGXG", keysquare, keyword);
  //var temp2 = atbash.encrypt(decryptionWord);
    return (
        <OutputTextarea message={"Good-Bye"} />
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
