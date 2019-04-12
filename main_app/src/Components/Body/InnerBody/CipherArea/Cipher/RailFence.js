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
            railsInput: 3
        }
    }
    render() {
        var isInput = false;

        var inputText = this.props.inputText;
        if (inputText === 'none' || inputText === ''){
            isInput = false;
        }
        else {
            isInput = true;
        }
        return (
            <div id="railFence_div">
            <form>
                Rails: 
                <input id="rails_input" type="number" min="2" step="1" name="num_rails" value={this.state.railsInput} onChange={evt => this.updateRailsInput(evt)}></input>
            </form>
                <br/>
                <Encrypt numRails = {this.state.railsInput} inputText = {inputText}/>
            </div>
        );
    }

    updateRailsInput(evt) {
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
        <div>
            <textarea className="inputOutput_textArea" id="output_textArea" value={encryptedString} placeholder="Output" rows="25" cols="80"></textarea>
        </div>
    );

}