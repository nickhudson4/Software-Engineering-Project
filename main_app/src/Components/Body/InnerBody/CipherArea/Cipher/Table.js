import React, { Component } from 'react';
import './Cipher.css';
class Table extends Component {
  render() {
    return (
        <table>
            <thead>
            <tr>
                <th scope="col" colSpan="2">Fill</th>
                <th scope="col">Fill</th>
                <th scope="col">Fill</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Fill</td>
                <td>Fill</td>
                <td>Fill</td>
                <td>Fill</td>
            </tr>
            <tr>
                <td>Fill</td>
                <td>Fill</td>
                <td>Fill</td>
                <td>Fill</td>
            </tr>
            <tr>
                <td>Fill</td>
                <td>Fill</td>
                <td>Fill</td>
                <td>Fill</td>
            </tr>
            <tr>
                <td>Fill</td>
                <td>Fill</td>
                <td>Fill</td>
                <td>Fill</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colSpan="3">Fill</td>
                <td>Fill</td>
            </tr>
            <tr>
                <td colSpan="3">Fill</td>
                <td>Fill</td>
            </tr>
            <tr>
                <td colSpan="3">Fill</td>
                <td>Fill</td>
            </tr>
            </tfoot>
        </table> 
    );

  }
}

export default Table;