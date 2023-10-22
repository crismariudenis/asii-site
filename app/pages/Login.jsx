"use client";
import { useEffect, useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return username.length > 0 && password.length > 5;
  };

  const handleSubmit = (event) => {
      console.log("Form submitted!");
    event.preventDefault();
  };

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);
  return (
    <>
      <h1>Here is the {username}</h1>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex">
            <button
              type="button"
              className="flex-auto shadow appearance-none border rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-sky-600"
              onClick={handleSubmit}
            >
              Login
            </button>

            <button
              type="button"
              className="flex-auto shadow appearance-none border rounded  py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-sky-600"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
