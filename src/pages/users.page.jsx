import { Component } from "react";
import axios from "axios";
import Table from "../components/table/table.component";

class Users extends Component {
  state = {
    data: [],
    columns: [
      {
        label: "img",
        path: "image",
        content: (row, column) => (
          <img src={row[column.path]} className="w-15" />
        ),
      },
      {
        label: "name",
        path: "firstName",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "gender",
        path: "gender",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "bith date",
        path: "birthDate",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "age",
        path: "age",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
    ],
  };
  componentDidMount() {
    const promise = axios.get("https://dummyjson.com/users");
    promise
      .then((res, req) => {
        this.setState({ data: res.data.users });
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
          title="Users"
          rows={this.state.data}
          columns={this.state.columns}
        />
      </div>
    );
  }
}

export default Users;
