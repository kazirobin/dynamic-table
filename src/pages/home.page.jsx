import { Component } from "react";
import Table from "../components/table.component";
import Navbar from "../components/navbar.component";

class Home extends Component {
  state= {
    hello:"hello"
  }
  render() {
    return <>
   <Navbar/>
    <Table hello={this.state.hello}/>
    </>
  }
}

export default Home;
