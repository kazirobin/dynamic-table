import { Component } from "react";
import { Link } from "react-router";
import axios from "axios";
import Table from "../components/table/table.component";

class Recipes extends Component {
  state = {
    data: [],
    columns: [
      {
        label: "title",
        path: "name",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "category",
        path: "cuisine",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "img",
        path: "image",
        content: (row, column) => (
          <img src={row[column.path]} className="w-15" />
        ),
      },
      {
        label: "time",
        path: "prepTimeMinutes",
        content: (row, column) => <span>{row[column.path]} minutes</span>,
      },
      {
        label: "rating",
        path: "rating",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
    ],
  };
  componentDidMount() {
    const promise = axios.get("https://dummyjson.com/recipes");
    promise
      .then((res, req) => {
        this.setState({ data: res.data.recipes });
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
          title="Recipes"
          rows={this.state.data}
          columns={this.state.columns}
        />
      </div>
    );
  }
}

export default Recipes;
