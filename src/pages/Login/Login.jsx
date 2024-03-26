import React, { useContext } from "react";
import Header from "../Shared/Header/Header";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  // fetch data from AuhtProvider using useContext
  const { signIn } = useContext(AuthContext);

  // login eventHandler
  const handleLogin = (e) => {
    e.preventDefault();

    // get data from login from
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // signIn User
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero-content lg:w-1/2 flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold text-center pt-5 p-3">
              Login your account!
            </h1>
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <label className="label text-center m-auto mb-2">
              <Link
                to="/register"
                className="label-text-alt link link-hover font-semibold text-gray-500"
              >
                Don't Have An Account?{" "}
                <span className="text-blue-600">Register!</span>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
