import { Component } from "react";
import Table from "./../components/table.component";
import { Link } from "react-router";
import axios from "axios";
import Row from "../components/row.component";
import Products from "./products.page";

class Carts extends Component {
  state = {
    data: [],
    cartIndex: 0,
  };
  handleCartIndex = (event) => {
    const value =Number( event.target.value);
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
        <div className="max-w-4xl mx-auto py-4">
          <div className="relative inline py-2 group  mx-auto">
            <Link
              to="/"
              className="text-gray-300 hover:text-white font-medium transition duration-300"
            >
              ◀ Go Back Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
        <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex items-center flex-col gap-5">
          <h1 className="font-bold text-3xl">
            This is a Table of Cart number
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
          <div className="backdrop-blur-md bg-white/30 rounded-xl shadow-xl overflow-hidden w-full max-w-4xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/20 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">title</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">img</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">price</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">quantity</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">total price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartsProduct.map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-white/10 transition duration-300 ease-in-out"
                    >
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        {product.title}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <img src={product.thumbnail} className="w-20" alt="" />
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        {product.price}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 ">
                        {product.quantity}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 ">
                        {Number(product.quantity * product.price).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr className="text-center font-bold text-2xl">
                    <h1>Total Price : {totalPrice.toFixed(2)}</h1>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carts;
