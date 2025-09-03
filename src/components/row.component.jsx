import { Component } from "react";

class Row extends Component {
  render() {
    const { columnA,columnB,columnC,columnD,imgSrc} = this.props;
    return (
      <tr className="hover:bg-white/10 transition duration-300 ease-in-out">
        <td className="px-4 sm:px-6 py-3 sm:py-4">{columnA}</td>
        <td className="px-4 sm:px-6 py-3 sm:py-4">{columnB}</td>
        <td className="px-4 sm:px-6 py-3 sm:py-4">
            <img src={imgSrc} alt="" className="w-20 border"/>
         
        </td>
        <td className="px-4 sm:px-6 py-3 sm:py-4">
          <button className="bg-white/20 hover:bg-white/40 px-3 py-1 rounded transition">
            {columnC}
          </button>
        </td>
        <td className="px-4 sm:px-6 py-3 sm:py-4">
          <button className="bg-white/20 hover:bg-white/40 px-3 py-1 rounded transition">
            {columnD}
          </button>
        </td>
      </tr>
    );
  }
}

export default Row;
