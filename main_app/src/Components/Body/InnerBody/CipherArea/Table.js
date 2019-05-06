import React, { Component } from 'react';
import './CipherArea.css';
class Table extends Component {
  render() {
    var numRows = this.props.numRows;
    var numCols = this.props.numCols;
    var headings = this.props.tableHeadings;

    return (
        <table>
            <thead>
                <tr>
                    {/* <th scope="col" colSpan="1">Fill</th>
                    <th scope="col" colSpan="1">Fill</th> */}
                    <TableHeadings headings = {headings}/>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fill1</td>
                    <td>Fill2</td>
                </tr>
                <tr>
                    <td>Fill</td>
                    <td>Fill</td>
                </tr>
                <tr>
                    <td>Fill</td>
                    <td>Fill</td>
                </tr>
                <tr>
                    <td>Fill</td>
                    <td>Fill</td>
                </tr>
            </tbody>
            {/* <tfoot>
                <tr>
                    <td colSpan="3">Fill</td>
                    <td>Fillasd</td>
                </tr>
                <tr>
                    <td colSpan="3">Fill</td>
                    <td>Fill</td>
                </tr>
                <tr>
                    <td colSpan="3">Fill</td>
                    <td>Fill</td>
                </tr>
            </tfoot> */}
        </table> 
    );

  }
}

const TableHeadings = (props) => {
    console.log(props.headings.length);
    var headingArr = [];
    for (var i = 0; i < props.headings.length; i++){
        headingArr.push(<th scope="col" colSpan="1">{props.headings[i]}</th>);
    }
    
    return headingArr;
}

export default Table;