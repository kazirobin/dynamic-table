import { Component } from "react";
import { Link } from "react-router";
const navItems = [
  { label: 'Products', path: '/products' },
  { label: 'Carts', path: '/carts' },
  { label: 'Recipes', path: '/recipes' },
  { label: 'Users', path: '/users' },
];
class Navbar extends Component {
  
  render() { 
    return (    <nav className="bg-[#0077b6] p-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-white text-2xl font-bold">My Table</div>
        <ul className="flex flex-col sm:flex-row space-x-6 mt-4 sm:mt-0  gap-y-4">
          {navItems.map(({ label, path }, index) => (
            <li key={index} className="relative group ">
              <Link
                to={path}
                className="text-gray-300 hover:text-white font-medium transition duration-300 flex"
              >
                {label}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>)
  }
}
 
export default Navbar;