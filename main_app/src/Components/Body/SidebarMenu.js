import React, { Component } from 'react';
import '../CompStyling/Menu.css';
import { debug } from 'util';

class SidebarMenu extends Component {

  menuClicked(msg){
    console.log(msg);
  }


  render() {
    return (
        <div id="sideMenu_div">
            <h1>Cryptography<br/>Explorer</h1>
            <button id="mono" onClick= { (e) => { this.menuClicked("mon"); } }>Mono-Alphabetic Substitution</button>
            <button onClick= { (e) => { this.menuClicked("vig"); } }>Vigenre Cipher</button>
            <button onClick= { (e) => { this.menuClicked("scy"); } }>Scytale</button>
            <button onClick= { (e) => { this.menuClicked("rail"); } }>Rail Fence</button>
            <button onClick= { (e) => { this.menuClicked("col"); } }>Columnar</button>
            <button onClick= { (e) => { this.menuClicked("two"); } }>Two Square</button>
            <button onClick= { (e) => { this.menuClicked("four"); } }>Four Square</button>
            <button onClick= { (e) => { this.menuClicked("play"); } }>Playfair</button>
            <button onClick= { (e) => { this.menuClicked("adfgx"); } }>ADFGX</button>
            <button onClick= { (e) => { this.menuClicked("adfgvx"); } }>ADFGVX</button>
            <button onClick= { (e) => { this.menuClicked("lfsr"); } }>LFSR</button>
            <button onClick= { (e) => { this.menuClicked("hill"); } }>Hill</button>
            <button onClick= { (e) => { this.menuClicked("enig"); } }>Enigma Machine</button>
            <button onClick= { (e) => { this.menuClicked("rsa"); } }>RSA</button>
            <button onClick= { (e) => { this.menuClicked("elg"); } }>ElGamal</button>

        </div>
    );
  }
}

export default SidebarMenu