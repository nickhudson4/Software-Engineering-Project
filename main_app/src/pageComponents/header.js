import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render(){
    return(
    <header>


    <div className="logo">
      Ciphers
      <img src={logo} className="App-logo" alt="logo" />
    </div>

    {/*Declares it as a navagatory set, like a directory*/}
    <nav>
    {/*Unordered List*/}
      <ul>
      {/*List Items
        Here we list all of our Ciphers as links*/}
        <li className="first">
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/ADFGXPAGE">ADFGX</Link>
        </li>
        <li>
        <Link to="/ADFGVXPAGE">ADFGVX</Link>
        </li>
        <li>
        {/*<a href="#">ADFGVX</a>*/}
        </li>
        <li>
        <Link to="/PlayfairPage">Playfair</Link>
        </li>
        <li>
        <Link to="/TwoSquarePage">Two Square</Link>
        </li>
        <li>
        <Link to="/FourSquarePage">Four Square</Link>
        </li>
        <li className="last">
        <Link to="/VigenerePage">Vigenere</Link>
        </li>
      </ul>
    </nav>

    </header>
    );
  }
}

export default Header;
