import Axios from "../http";
import React, { useState } from "react";
import setAuthToken from "./setAuthToken";

export default function Login(props) {
  const [error, setError] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError(false);

    const { data } = await Axios.post("/login", {
      email: e.target.username.value,
      password: e.target.password.value,
    });

    setTimeout(function () {
      if (!data) {
        setError(true);
        return;
      }
    }, 1000);

    localStorage.setItem("Token", data.token);
    setAuthToken(data.token);
    window.location.href = "/admin";
  }

  return (
    <div className="block">
      <div className="login">
        <div className="text-center">
          <a href="/">
            <img src={process.env.PUBLIC_URL + "img/logo.png"} />
          </a>
          <hr />
        </div>
        <form onSubmit={onSubmit}>
          <br />
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              className="form-control"
              name="username"
              required
            />
          </div>
          {error && (
            <div style={{ color: "red" }}>
              Username or password is incorrect
            </div>
          )}
          <br />
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              name="password"
              required
            />
          </div>
          <br />
          <div className="text-right">
            <button type="submit" className="btn btn-default" name="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
