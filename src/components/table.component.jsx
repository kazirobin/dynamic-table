import { Component } from "react";

class Table extends Component {
  render() {
    const { children,title,columnA,columnB,columnC,columnD,img} = this.props
    return (
      <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex items-center flex-col gap-5">
        <h1 className="font-bold text-3xl">This is a Table of {title}</h1>
        <div className="backdrop-blur-md bg-white/30 rounded-xl shadow-xl overflow-hidden w-full max-w-4xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/20 uppercase tracking-wider">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4">{columnA}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4">{columnB}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4">{img}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4">{columnC}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4">{columnD}</th>
                </tr>
              </thead>
              <tbody>
              
               {children}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
