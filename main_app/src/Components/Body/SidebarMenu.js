import React, { Component } from 'react';
import '../CompStyling/Menu.css';

class SidebarMenu extends Component {
  render() {
    return (
        <div id="sideMenu_div">
            <a id="menu_home" href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
            <a href="#">Option 4</a>
            <a href="#">Option 5</a>
            <a href="#">Option 6</a>
            <a href="#">Option 7</a>
            <a href="#">Option 8</a>
        </div>
    );
  }
}

export default SidebarMenu;