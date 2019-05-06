import React, { Component } from 'react';
import './Cipher.css';
import Table from './Table';

/*
    Renders specific component based on cipher chosen.
    Actual cipher backend logic will come from here


    thisisatestinput encrypted with 3 rails: 

t      i     e       n
  h  s  s  t   s   i   p   t  => tienhsstsiptiatu 
   i     a       t       u

*/

class RailFence extends Component {
    constructor(props){
        super(props);
        this.state = {
            railsInput: 3 //Defualt number of rails
        }
    }

    

    render() {

        var isInput = false;

        var inputText = this.props.inputText;
        var mode = this.props.mode;
        if (inputText === 'none' || inputText === ''){
            isInput = false;
        }
        else {
            isInput = true;
        }
        return (
            <div id="railFence_div" className="specific_cipher_class">
                <form>
                    Rails: 
                    <input id="rails_input" type="number" min="2" step="1" name="num_rails" value={this.state.railsInput} onChange={evt => this.updateRailsInput(evt)}></input>
                </form>
                <br/>
                <LoadMode mode = {mode} numRails = {this.state.railsInput} inputText = {inputText}/>
            </div>
        );
    }

    updateRailsInput(evt) { //Reload when number of rails is changed
        this.setState({
          railsInput: evt.target.value
        });
    }
}

export default RailFence;

const Encrypt = (props) => {
    var inputText = props.inputText;
    var numRails = props.numRails;
    if (!numRails || !inputText){ //Returns emtpy div on error
        return (
            <div></div>
        );
    }

    var arrOfArrays = [];

    for (var i = 0; i < numRails; i++){ //Create array of arrays
        var tmp = [];
        arrOfArrays.push(tmp);
    }


    var currentLetterPos = 0;
    var goingDown = true;
    var j = 0;

    while (currentLetterPos < inputText.length){
        arrOfArrays[j].push(inputText[currentLetterPos]);
        currentLetterPos++;
        
        if (j === numRails-1 && goingDown){
            goingDown = false;
        }
        if (j === 0 && !goingDown){
            goingDown = true;
        }
    
        if (goingDown){
            j++;
        }
        else {
            j--;
        }
    }
    
    var encryptedString = '';

    for (var i = 0; i < arrOfArrays.length; i++){
        var tmpRail = arrOfArrays[i];
        for (var j = 0; j < tmpRail.length; j++){
            encryptedString = encryptedString + tmpRail[j];
        }
    }

    return (
        <OutputTextarea message = {encryptedString}/>
    );

}



const Decrypt = (props) => {
    var inputText = props.inputText;
    var numRails = props.numRails;
    if (!numRails || !inputText){ //Returns emtpy div on error
        return (
            <div></div>
        );
    }

    var tableArray = [];
    for (var i = 0; i < numRails; i++){
        var tmp = [];
        tableArray.push(tmp);
    }

    var currentRow = 0;
    var currentLetter = 0;

    var goingDown = true;

    for (var i = 0; i < numRails; i++){
        for(var j = 0; j < inputText.length; j++){

            if (currentRow === i){
                //tableArray[i].push(inputText[currentLetter]);
                tableArray[i][j] = inputText[currentLetter];
                currentLetter++;
            }

            if (currentRow === numRails-1 && goingDown){
                goingDown = false;
            }
            if (currentRow === 0 && !goingDown){
                goingDown = true;
            }
        
            if (goingDown){
                currentRow++;
            }
            else {
                currentRow--;
            } 
        }
        currentRow = 0;
    }

    currentLetter = 0;
    goingDown = true;
    var j = 0;
    var decryptedString = '';

    while (currentLetter < inputText.length){
        var tmp1 = tableArray[j];
        decryptedString += tmp1[currentLetter];
        currentLetter++;
        
        if (j === numRails-1 && goingDown){
            goingDown = false;
        }
        if (j === 0 && !goingDown){
            goingDown = true;
        }
    
        if (goingDown){
            j++;
        }
        else {
            j--;
        }
    }

    return (
        <OutputTextarea message={decryptedString} />
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
    var numRails = props.numRails;
    var inputText = props.inputText;

    if (mode === 'encrypt'){
        return (
            <Encrypt numRails = {numRails} inputText = {inputText}/>
        );
    }
    else{
        return (
            <Decrypt numRails = {numRails} inputText = {inputText}/>
        );
    }
}

/* Renders the text area with encrypted/decrypted string  */
const OutputTextarea = (props) => {
    return (
        <div>
            {/* <div> */}
                <textarea className="inputOutput_textArea" id="output_textArea" value={props.message} placeholder="Output" rows="25" cols="80" onChange={() => {}}></textarea>
            {/* </div> */}
            {/* <div> */}
                {/* <button onClick={copyToClipboard}>Copy Output</button>  */}
            {/* </div> */}

        </div>
    );
}