import { Component } from "react";
import { Link } from "react-router";
import axios from "axios";

class Users extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const promise = axios.get("https://dummyjson.com/users");
    promise.then((res, req) => {
      this.setState({ data: res.data.users });
      console.log(this.state.data)
    }).catch((error) => { console.log("Api Error :",error.message) })
  }
  render() {
    const users = this.state.data
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
          <h1 className="font-bold text-3xl">This is a Table of Users</h1>
          <div className="backdrop-blur-md bg-white/30 rounded-xl shadow-xl overflow-hidden w-full max-w-4xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/20 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">img</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">Name</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">gender</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">bith date</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">age</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-white/10 transition duration-300 ease-in-out"
                    >
                      <td className="px-4 sm:px-6 py-3 sm:py-4"><img src={user.image} className="w-15" alt="" /></td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">{user.firstName}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">{user.gender}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">{user.birthDate}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">{user.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
     
      </div>
    );
  }
}

export default Users;
