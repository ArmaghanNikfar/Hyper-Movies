import React, { useContext } from "react";
import { UserContext } from "../../components/context/UserContext";

const Login = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    login(userName, password);
  }
  return (
    <div className="container items-center justify-center ">
      <form className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg justify-center shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-200 mb-2" htmlFor="username">
            Username
          </label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-200 mb-2" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button
          className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-400 transition duration-300"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
