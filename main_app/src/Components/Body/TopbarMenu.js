import React, { Component } from 'react';
import './Body.css';

class Menu extends Component {
  render() {
    return (
        <div id="topMenu_div">
            <h3 onClick={() => this.props.onClickFunc("home")}>Home</h3>
            <h3 onClick={() => this.props.onClickFunc("tools")}>Tools</h3>
            <h3 onClick={() => this.props.onClickFunc("about")}>About</h3>
            <h3 onClick={() => this.props.onClickFunc("help")}>Help</h3>
        </div>
    );
  }
}

export default Menu;