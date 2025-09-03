import { Component } from "react";
import { Link } from "react-router";

class Error extends Component {
  render() {
    return (
      <div class="bg-gradient-to-br from-[#90e0ef] to-indigo-700 text-white h-screen flex items-center justify-center">
        <div class="text-center px-6">
          <div class="animate-bounce mb-6">
            <svg
              class="mx-auto w-20 h-20 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 class="text-5xl font-extrabold mb-4">404</h1>
          <p class="text-xl mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            class="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-100 transition duration-300"
          >
            Go Home
          </Link>

         
        </div>
      </div>
    );
  }
}

export default Error;
