import React, { Component } from 'react';
import './Body.css';
import logo from '../../Media/CryptographyExplorerLogo.png'
import { debug } from 'util';

class SidebarMenu extends Component {

  menuClicked(msg){
    console.log(msg);
  }

//The onclick listener is in the "Body.js" and is passed in the props to this component
  render() {
    return (
        <div id="sideMenu_div">
            <h1>Cryptography<br/>Explorer</h1>
            {/* <Logo/> */}

            
            <button onClick={() => this.props.onClickFunc("mono")}>Mono-Alphabetic Substitution</button>
            <button onClick={() => this.props.onClickFunc("vig")}>Vigenre Cipher</button>
            <button onClick={() => this.props.onClickFunc("scy")}>Scytale</button>
            <button onClick={() => this.props.onClickFunc("rail")}>Rail Fence</button>
            <button onClick={() => this.props.onClickFunc("col")}>Columnar</button>
            <button onClick={() => this.props.onClickFunc("two")}>Two Square</button>
            <button onClick={() => this.props.onClickFunc("four")}>Four Square</button>
            <button onClick={() => this.props.onClickFunc("play")}>Playfair</button>
            <button onClick={() => this.props.onClickFunc("adfgx")}>ADFGX</button>
            <button onClick={() => this.props.onClickFunc("adfgvx")}>ADFGVX</button>
            <button onClick={() => this.props.onClickFunc("lfsr")}>LFSR</button>
            <button onClick={() => this.props.onClickFunc("hill")}>Hill</button>
            <button onClick={() => this.props.onClickFunc("enig")}>Enigma Machine</button>
            <button onClick={() => this.props.onClickFunc("rsa")}>RSA</button>
            <button onClick={() => this.props.onClickFunc("elg")}>ElGamal</button>

        </div>
    );
  }
}

const Logo = () => {
  return <img src={logo} alt="Logo" height="80" width="220" />;
}

export default SidebarMenu