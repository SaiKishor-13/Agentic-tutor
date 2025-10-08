import React, { useState } from "react";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", formData);
    alert("Login successful! (Mock action)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Welcome Back
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Login to continue learning with AyraLearn.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-600 text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-black font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
