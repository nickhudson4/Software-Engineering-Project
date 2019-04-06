import React, { Component } from 'react';
import '../CompStyling/Menu.css';

class SidebarMenu extends Component {
  render() {
    return (
        <div id="sideMenu_div">
            <h1 href="#">Cryptography<br/>Explorer</h1>
            <button href="#">Mono-Alphabetic Substitution</button>
            <button href="#">Vigenre Cipher</button>
            <button href="#">Scytale</button>
            <button href="#">Rail Fence</button>
            <button href="#">Columnar</button>
            <button href="#">Two Square</button>
            <button href="#">Four Square</button>
            <button href="#">Playfair</button>
            <button href="#">ADFGX</button>
            <button href="#">ADFGVX</button>
            <button href="#">LFSR</button>
            <button href="#">Hill</button>
            <button href="#">Enigma Machine</button>
            <button href="#">RSA</button>
            <button href="#">ElGamal</button>

        </div>
    );
  }
}

export default SidebarMenu