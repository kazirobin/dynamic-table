import { Component } from "react";

class TableHead extends Component {
  render() {
    const { columns } = this.props;
    return <thead className="bg-white/20 uppercase tracking-wider">
      <tr>

      {columns.map((column) => (<th key={column.path} className="px-4 sm:px-6 py-3 sm:py-4">{column.label}</th>))}
      </tr>
    </thead>;
  }
}
export default TableHead;
