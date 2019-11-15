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


            <h3 onClick={() => this.props.onClickFunc("mono")}>Mono-Alphabetic Substitution</h3>
            <h3 onClick={() => this.props.onClickFunc("vig")}>Vigenre</h3>
            <h3 onClick={() => this.props.onClickFunc("at")}>Atbash</h3>
            <h3 onClick={() => this.props.onClickFunc("rail")}>Rail Fence</h3>
            <h3 onClick={() => this.props.onClickFunc("col")}>Columnar</h3>
            <h3 onClick={() => this.props.onClickFunc("two")}>Two Square</h3>
            <h3 onClick={() => this.props.onClickFunc("four")}>Four Square</h3>
            <h3 onClick={() => this.props.onClickFunc("play")}>Playfair</h3>
            <h3 onClick={() => this.props.onClickFunc("adfgx")}>ADFGX</h3>
            <h3 onClick={() => this.props.onClickFunc("adfgvx")}>ADFGVX</h3>
            <h3 onClick={() => this.props.onClickFunc("lfsr")}>LFSR</h3>
            <h3 onClick={() => this.props.onClickFunc("hill")}>Hill</h3>
            <h3 onClick={() => this.props.onClickFunc("enig")}>Enigma Machine</h3>
            <h3 onClick={() => this.props.onClickFunc("kama")}>Kamasutra</h3>
            <h3 onClick={() => this.props.onClickFunc("scy")}>Affine</h3>

        </div>
    );
  }
}

const Logo = () => {
  return <img src={logo} alt="Logo" height="80" width="220" />;
}

export default SidebarMenu
