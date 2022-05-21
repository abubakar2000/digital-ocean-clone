import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { apiip } from "../serverConfig";
import firebase_auth from "../firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { FaFacebookF } from "react-icons/fa";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const login = () => {
    // if (username === "" || password === "") {
    //   alert("Input data!");
    // } else {
    const body = {
      username: username,
      password: password,
    };

    console.log(body);

    axios
      .post(`${apiip}/api/accounts/auth/login/`, body)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("loginKey", res.data.key);
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response.data.non_field_errors) {
          alert(err.response.data.non_field_errors);
        } else if (err.response.data.password) {
          alert(err.response.data.password);
        }
      });
    // }
  };

  const setIsLoggedIn = () => {
    localStorage.setItem("isLoggedIn", "true");
    login();
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  const LoginGoogle = (GoogleAccessToken, GoogleUid) => {
    axios
      .post(`${apiip}/api/accounts/google/`, {
        access_token: GoogleAccessToken,
        code: GoogleUid,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("error ", err);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebase_auth, provider)
      .then((result) => {
        const user = result.user;
        LoginGoogle(user.accessToken, user.uid);
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential")
          alert("Account exists with same email!");
      });
  };

  const LoginGithub = (GoogleAccessToken, GoogleUid) => {
    axios
      .post(`${apiip}/api/accounts/github/`, {
        access_token: GoogleAccessToken,
        code: GoogleUid,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("error ", err);
      });
  };

  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(firebase_auth, provider)
      .then((result) => {
        const user = result.user;
        LoginGithub(user.accessToken, user.uid);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/account-exists-with-different-credential")
          alert("Account exists with same email!");
      });
  };

  const LoginFacebook = (GoogleAccessToken, GoogleUid) => {
    axios
      .post(`${apiip}/api/accounts/facebook/`, {
        access_token: GoogleAccessToken,
        code: GoogleUid,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("error ", err);
      });
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(firebase_auth, provider)
      .then((result) => {
        const user = result.user;
        LoginFacebook(user.accessToken, user.uid);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/account-exists-with-different-credential")
          alert("Account exists with same email!");
      });
  };

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
        <form className="login-form text-left" action="#">
          <h2>Log in to your account</h2>
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
            <label htmlFor="pass">password</label>
            <input
              style={{ color: "black" }}
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
              onClick={() => signInWithFacebook()}
            >
              Sign In With Facebook
            </button>
            <button
              type="button"
              className="btn btn-outline-primary btn-lg mt-3"
              onClick={() => signInWithGoogle()}
            >
              Sign In With Google
            </button>
            <button
              type="button"
              className="btn btn-outline-primary btn-lg mt-3"
              onClick={() => signInWithGithub()}
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
