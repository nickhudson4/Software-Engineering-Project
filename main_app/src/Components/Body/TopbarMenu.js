import React, { Component } from 'react';
import '../CompStyling/Menu.css';

class Menu extends Component {
  render() {
    return (
        <div id="topMenu_div">
            <a href="#">Home</a>
            <a href="#">Tools</a>
            <a href="#">About</a>
            <a href="#">Help</a>
        </div>
    );
  }
}

export default Menu;