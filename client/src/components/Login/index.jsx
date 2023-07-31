import { useState } from "react";
import axios from "axios";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "../../index.css";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/dashboard";
      console.log("Submit success");
    } catch (error) {
      console.error("Error: ", error);
      console.log("Submit Error");
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="bg-zinc-400 flex items-center justify-center h-screen">
      <div className="container mx-auto p-5 rounded-xl bg-white w-96 border justify-center">
        <div className="text-center mb-16 mt-16">
          <h1 className="font-bold text-4xl">Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="container flex mx-auto bg-neutral-100 w-80 border border-neutral-300 p-2 rounded-full my-7">
            <FaUserAlt className="my-1 mx-3" />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className="bg-transparent font-medium outline-none"
            ></input>
          </div>
          <div className="container flex mx-auto bg-neutral-100 w-80 border border-neutral-300 p-2 rounded-full my-7">
            <FaLock className="my-1 mx-3" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="bg-transparent font-medium outline-none"
            ></input>
          </div>
          {error && (
            <div className="container w-max p-2 px-8 bg-red-400 border rounded-xl block mx-auto text-white">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="block mx-auto bg-blue-400 p-2 px-14 font-medium items-center text-white rounded-full text-xl mt-12 mb-12"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
