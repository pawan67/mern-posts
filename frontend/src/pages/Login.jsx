import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { loginUser } from "../handlers/authHandler";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser({ email, password });

      //  store user in local storage
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/home";

      console.log(user);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Layout>
      <div>
        <div className="w-full max-w-md mx-auto  p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
          {errorMessage && (
            <p className=" bg-red-600 text-white">{errorMessage}</p>
          )}
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form
            novalidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
            data-bitwarden-watching="1"
            onSubmit={handleSubmit}
          >
            <div className="space-y-1 text-sm">
              <label for="username" className="block dark:text-gray-400">
                Username
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="password" className="block dark:text-gray-400">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
              <div className="flex justify-end text-xs dark:text-gray-400">
                <a rel="noopener noreferrer" href="/">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
            >
              Sign in
            </button>
          </form>

          <p className="text-xs mt-5 text-center sm:px-6 dark:text-gray-400">
            Don't have an account?
            <Link
              rel="noopener noreferrer"
              to="/register"
              className="underline dark:text-gray-100"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
