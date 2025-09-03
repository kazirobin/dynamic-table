import { Component } from "react";
import Table from "../components/table.component";

class Products extends Component {
  render() {
    return (
      <>
         <li  className="relative group ">
              <Link
                to="/"
                className="text-gray-300 hover:text-white font-medium transition duration-300 flex"
              >
                Go Home
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
        <Table />
      </>
    );
  }
}

export default Products;
