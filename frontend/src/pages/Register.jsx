import React, { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { registerUser } from "../handlers/authHandler";

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pic, setPic] = React.useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [name, setName] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const [picMessage, setPicMessage] = useState(null);
  const postDetails = (pics) => {
    console.log(pics);

    setPicMessage(null);
    if (
      pics.type === "image/jpg" ||
      pics.type === "image/jpeg" ||
      pics.type === "image/png"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "helloworld");
      data.append("cloud_name", "dewctbby3");
      fetch("https://api.cloudinary.com/v1_1/dewctbby3/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await registerUser({ email, password, pic, name });

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
        {errorMessage && (
          <p className=" bg-red-600 text-white">{errorMessage}</p>
        )}
        {picMessage && <p>{picMessage}</p>}
        <div className="w-full max-w-md mx-auto  p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
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
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="username"
                id="username"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="username" className="block dark:text-gray-400">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="username"
                id="username"
                placeholder="Email"
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
            </div>
            <div className="space-y-1 text-sm">
              <label for="password" className="block dark:text-gray-400">
                Enter Password again
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>

            <input
              type="file"
              label="Upload Profile Picture"
              onChange={(e) => postDetails(e.target.files[0])}
              className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
            />

            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
            >
              Sign up
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="underline dark:text-gray-100"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
