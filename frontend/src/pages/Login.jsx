import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { apiip } from "../serverConfig";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const login = () => {
    if (username === "" || password === "") {
      alert("Input data!");
    } else {
      const body = {
        username: username,
        password: password,
      };

      axios
        .post(`${apiip}/api/accounts/auth/login/`, body)
        .then((res) => {
          if (res.status === 200) {
            console.log("Res -> ", res);
            navigate("/home");
          }
        })
        .catch((err) => {
          alert("Cannot login!");
        });
    }
  };

  const setIsLoggedIn = () => {
    localStorage.setItem("isLoggedIn", "true");
    login();
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="login container-fluid">
      <div className="col-md-4 rounded-3 my-5" style={{ margin: "0 auto" }}>
        <form className="login-form text-left" action="#">
          <h2>Log in to your account</h2>
          <div className="mb-3">
            <label htmlFor="email">email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email address or phone number"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass">password</label>
            <input
              type="password"
              id="pass"
              className="form-control"
              placeholder="Password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <a href="/register">New user?</a>
          </div>
          <button
            type="button"
            className="btn btn-custom btn-lg btn-block mt-3"
            onClick={() => setIsLoggedIn()}
          >
            Login
          </button>
          <div className="text-center pt-3 pb-3">
            <hr />
            <button
              type="button"
              className="btn btn-outline-primary btn-lg mt-3"
            >
              Sign In With Google
            </button>
            <button
              type="button"
              className="btn btn-outline-primary btn-lg mt-3"
            >
              Sign In With Github
            </button>
          </div>
          <a href="/resetpassword">Forgotten password?</a>
        </form>
      </div>
    </div>
  );
}
