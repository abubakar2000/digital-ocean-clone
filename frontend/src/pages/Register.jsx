import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { apiip } from "../serverConfig";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  let testRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
  let ValidatedEmail = testRegex.test(email);

  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  let navigate = useNavigate();

  const register = () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirm_password === ""
    ) {
      alert("Input data!");
    } else if (ValidatedEmail === false) {
      alert("Enter valid email.");
    } else if (password.length < 6 || confirm_password.length < 6) {
      alert("Password must be a minimum of 6 characters.");
    } else if (password !== confirm_password) {
      alert("The two password fields didn't match.");
    } else {
      const body = {
        username: username,
        email: email,
        password1: password,
        password2: confirm_password,
      };

      console.log("body -> ", body);

      axios
        .post(`${apiip}/api/accounts/auth/registration/`, body)
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            console.log("Res -> ", res);
            alert("User Registration Successful!");
            navigate("/login");
          }
        })
        .catch((err) => {
          if (err.response.data.password1) {
            alert(err.response.data.password1);
          } else if (err.response.data.username) {
            alert(err.response.data.username);
          } else if (err.response.data.email) {
            alert(err.response.data.email);
          }
        });
    }
  };

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <div
      className="login container-fluid"
      style={{
        minHeight: "calc(100vh - 42pt)",
        backgroundImage:
          "url(" +
          "https://ui-cdn.digitalocean.com/registration/c3c4764/static/media/new-brand-bg.f4ffd8f05acc4405214a.png" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="col-md-4 rounded-3 py-5" style={{ margin: "0 auto" }}>
        <div className="login-form text-left">
          <h2>Register your account</h2>
          <div className="mb-3">
            <label htmlFor="email">User name</label>
            <input
              style={{ color: "black" }}
              type="text"
              className="form-control"
              id="username"
              placeholder="User name"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass">Email</label>
            <input
              style={{ color: "black" }}
              type="text"
              id="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass">Password</label>
            <input
              style={{ color: "black" }}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass">Confirm Password</label>
            <input
              style={{ color: "black" }}
              type="password"
              id="confirm-password"
              className="form-control"
              placeholder="Confirm Password"
              value={confirm_password}
              onInput={(e) => setConfirm_Password(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-custom btn-lg btn-block mt-3"
            onClick={() => register()}
          >
            Register
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
          <a href="/login">Already a user?</a>
        </div>
      </div>
    </div>
  );
}
