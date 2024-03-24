import React from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Regsiter = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
    console.log(form.get("pass"));
  };

  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen">
        <div className="hero-content lg:w-1/2 flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold text-center pt-5 p-3">
              Register your account!
            </h1>
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>{" "}
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <label className="label text-center m-auto mb-2">
              <Link
                to="/login"
                className="label-text-alt link link-hover font-semibold text-gray-500"
              >
                Already Have An Account?{" "}
                <span className="text-blue-600">Login!</span>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regsiter;