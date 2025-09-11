import { Component } from "react";
import axios from "axios";
import Table from "../components/table/table.component";

class Cart extends Component {
  state = {
    data: [],
    columns: [
      {
        label: "title",
        path: "title",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "img",
        path: "thumbnail",
        content: (row, column) => (
          <img src={row[column.path]} className="w-15" />
        ),
      },
      {
        label: "price",
        path: "price",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "quantity",
        path: "quantity",
        content: (row, column) => (
          <div className="text-center">{row[column.path]}</div>
        ),
      },
      {
        label: "total price",
        path: "total price",
        content: (row, column) => (
          <span>{(row.price * row.quantity).toFixed(2)}</span>
        ),
      },
    ],
    cartIndex: 0,
  };
  handleCartIndex = (event) => {
    const value = Number(event.target.value);
    this.setState({ cartIndex: value });
  };
  componentDidMount() {
    const promise = axios.get("https://dummyjson.com/carts");
    promise
      .then((res, req) => {
        this.setState({ data: res.data.carts });
        // console.log(this.state.data);
      })
      .catch((error) => {
        console.log("Api Error :", error.message);
      });
  }
  render() {
    const carts = this.state.data[this.state.cartIndex];
    const cartsProduct = carts?.products || [];

    const totalPrice =
      cartsProduct?.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      ) || 0;
    console.log(cartsProduct);

    return (
      <div className="bg-[#0077b6]   mx-auto">
        <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex items-center flex-col gap-5">
          <h1 className="font-bold text-3xl">
            Select a number
            <select
              className="ms-4 cursor-pointer text-center border border-green-500"
              name=""
              id=""
              value={this.state.cartIndex}
              onChange={(event) => {
                this.handleCartIndex(event);
              }}
            >
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
              <option value="4">5</option>
              <option value="5">6</option>
              <option value="6">7</option>
              <option value="7">8</option>
              <option value="8">9</option>
              <option value="9">10</option>
              <option value="10">11</option>
              <option value="11">12</option>
              <option value="12">13</option>
              <option value="13">14</option>
              <option value="14">15</option>
              <option value="15">16</option>
              <option value="16">17</option>
              <option value="17">18</option>
              <option value="18">19</option>
              <option value="19">20</option>
              <option value="20">21</option>
              <option value="21">22</option>
              <option value="22">23</option>
              <option value="23">24</option>
              <option value="24">25</option>
              <option value="25">26</option>
              <option value="26">27</option>
              <option value="27">28</option>
              <option value="28">29</option>
              <option value="29">30</option>
            </select>
          </h1>

          <Table title="Cart" rows={cartsProduct} columns={this.state.columns}>
            <tr>
              <td className="ps-6 font-semibold text-2xl">
                Total Product : {cartsProduct.length}
              </td>
              <td className="text-2xl font-semibold text-center" colSpan={4}>
                Total Price : {totalPrice.toFixed(2)}
              </td>
            </tr>
          </Table>
        </div>
      </div>
    );
  }
}

export default Cart;
