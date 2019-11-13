import React, { Component } from 'react';
import './Body.css';

class Menu extends Component {
  render() {
    return (
      <div id="topMenu_div">
        <button className="topbar_menu_button" onClick={() => this.props.onClickFunc("home")}>Home</button>
        <button className="topbar_menu_button" onClick={() => this.props.onClickFunc("about")}>About</button>
        <button className="topbar_menu_button" onClick={() => this.props.onClickFunc("help")}>Help</button>
        <div className="topbar_menu_button_div" id="tools_button_div">
          <button className="topbar_menu_button" id="tools_button" onClick={() => this.props.onClickFunc("tools")}>Tools</button>
          <div className="tools_dropdown_content">
            <button onClick={() => this.props.toolOnClick("int_calc")}>Integer Calculator</button>
            <button onClick={() => this.props.toolOnClick("tool2")}>Tool 2</button>
            <button onClick={() => this.props.toolOnClick("tool3")}>Tool 3</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;