import { Component } from "react";
import Table from "../components/table.component";
import Navbar from "../components/navbar.component";
import { Link } from "react-router";

class Home extends Component {
  state = {
    hello: "hello",
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-6 px-4 shadow-lg">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between">

            <div>
              <h1 className="text-3xl font-bold mb-2 sm:mb-0">
                🧮 Dynamic Table 
              </h1>
              <p className="text-sm sm:text-base text-white/90">
                Fetching live cart data from{" "}
                <span className="font-semibold">DummyJSON</span> and rendering
                it dynamically.
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              <Link
                to="https://dummyjson.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded hover:bg-indigo-100 transition duration-300"
              >
                View API Source
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
