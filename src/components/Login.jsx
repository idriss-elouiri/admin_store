import React from "react";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Admin Panel Login
        </h2>
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 font-semibold"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium  text-gray-700 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg   focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
