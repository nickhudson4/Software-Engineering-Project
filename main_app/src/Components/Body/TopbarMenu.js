import React, { Component } from 'react';
import './Body.css';

class Menu extends Component {
  render() {
    return (
        <div id="topMenu_div">
            <button onClick={() => this.props.onClickFunc("home")}>Home</button>
            <button onClick={() => this.props.onClickFunc("tools")}>Tools</button>
            <button onClick={() => this.props.onClickFunc("about")}>About</button>
            <button onClick={() => this.props.onClickFunc("help")}>Help</button>

        </div>
    );
  }
}

export default Menu;