import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { apiip } from "../serverConfig";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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
    } else {
      const body = {
        username: username,
        email: email,
        password1: password,
        password2: confirm_password,
      };

      axios
        .post(`${apiip}/api/accounts/auth/registration/`, body)
        .then((res) => {
          if (res.status === 200) {
            console.log("Res -> ", res);
            navigate("/login");
          }
        })
        .catch((err) => {
          alert("Cannot login!");
        });
    }
  };

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <div className="login container-fluid">
      <div className="col-md-4 rounded-3 my-5" style={{ margin: "0 auto" }}>
        <div className="login-form text-left">
          <h2>Register your account</h2>
          <div className="mb-3">
            <label htmlFor="email">User name</label>
            <input
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
              type="password"
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
