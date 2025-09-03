import { Component } from "react";
import Table from "./../components/table.component";
import { Link } from "react-router";
import axios from "axios";
import Row from "../components/row.component";

class Products extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const promise = axios.get("https://dummyjson.com/products");
    promise.then((res, req) => {
      this.setState({ data: res.data.products });
      console.log(this.state.data)
    }).catch((error) => { console.log("Api Error :",error.message) })
  }
  render() {
    const products = this.state.data
    return (
      <div className="bg-[#0077b6]   mx-auto">
        <div className="max-w-4xl mx-auto py-4">
          <div className="relative inline py-2 group  mx-auto">
            <Link
              to="/"
              className="text-gray-300 hover:text-white font-medium transition duration-300"
            >
              ◀ Go Back Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        <Table title={"Products"}  columnA={"Title"} columnB={"category"} columnC={"Price"} columnD={"rating"} img={"Images"}>
          {products.map((product) => (

      <Row key={product.id} columnA={product.title} columnB={product.category} columnC={product.price} columnD={product.rating} imgSrc={product.images[0]}/>
          ))}
        </Table>
      </div>
    );
  }
}

export default Products;
