import { Component } from "react";

class TableBody extends Component {
  render() {
    const {rows,columns} =this.props
    return <tbody>
      {rows.map((row) => (<tr key={row.id} className="hover:bg-white/10 transition duration-300 ease-in-out">
        {columns.map((column,index) => (<td key={index} className="px-4 sm:px-6 py-3 sm:py-4">{column.content(row,column)}</td>))}
      </tr>))}
      
    </tbody>;
  }
}
export default TableBody;
