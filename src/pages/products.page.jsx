import { Component } from "react";
import Table from "../components/table/table.component";
import { Link } from "react-router";
import axios from "axios";

class Products extends Component {
  state = {
    data: [],
    columns: [
      {
        label: "title",
        path: "title",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "category",
        path: "category",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "img",
        path: "images",
        content: (row, column) => (
          <img src={row[column.path][0]} className="w-15" />
        ),
      },
      {
        label: "price",
        path: "price",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "rating",
        path: "rating",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
    ],
  };
  componentDidMount() {
    const promise = axios.get("https://dummyjson.com/products");
    promise
      .then((res, req) => {
        this.setState({ data: res.data.products });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log("Api Error :", error.message);
      });
  }
  render() {
    return (
      <div className="bg-[#0077b6]   mx-auto">
     

        <Table
          title="Product"
          rows={this.state.data}
          columns={this.state.columns}
        />
      </div>
    );
  }
}

export default Products;
