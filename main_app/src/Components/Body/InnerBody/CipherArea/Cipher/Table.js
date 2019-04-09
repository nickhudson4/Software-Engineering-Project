import React, { Component } from 'react';
import './Cipher.css';
class Table extends Component {
  render() {
    return (
        <table>
            <thead>
            <tr>
                <th scope="col" colSpan="2">Item</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Don&#8217;t Make Me Think by Steve Krug</td>
                <td>In Stock</td>
                <td>1</td>
                <td>$30.02</td>
            </tr>
            <tr>
                <td>A Project Guide to UX Design by Russ Unger &#38; Carolyn Chandler</td>
                <td>In Stock</td>
                <td>2</td>
                <td>$52.94 ($26.47 &#215; 2)</td>
            </tr>
            <tr>
                <td>Introducing HTML5 by Bruce Lawson &#38; Remy Sharp</td>
                <td>Out of Stock</td>
                <td>1</td>
                <td>$22.23</td>
            </tr>
            <tr>
                <td>Bulletproof Web Design by Dan Cederholm</td>
                <td>In Stock</td>
                <td>1</td>
                <td>$30.17</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colSpan="3">Subtotal</td>
                <td>$135.36</td>
            </tr>
            <tr>
                <td colSpan="3">Tax</td>
                <td>$13.54</td>
            </tr>
            <tr>
                <td colSpan="3">Total</td>
                <td>$148.90</td>
            </tr>
            </tfoot>
        </table> 
    );

  }
}

export default Table;