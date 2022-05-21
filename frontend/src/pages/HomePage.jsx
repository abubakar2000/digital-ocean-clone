import React, { useState, useEffect } from "react";
import FrontBanner from "../components/HomePage/FrontBanner";
import WhyUs from "../components/HomePage/WhyUs";
import Pricing from "../components/HomePage/Pricing";
import Navbar from "../components/Navbar";
import bg from "../img/bg.jpg";
import { Link } from "react-router-dom";
import "./style.css";
import firebase_auth from "../firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import axios from "axios";
import { apiip } from "../serverConfig";
import { useNavigate } from "react-router";
import { FaFacebookF } from "react-icons/fa";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }, []);
  let navigate = useNavigate();

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
    <>
      <div>
        <Navbar></Navbar>

        {isLoggedIn !== "true" && (
          <div
            className="home-page row front-bg text-light"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginTop: "60pt",
            }}
          >
            <div
              className="col-1"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div
              className="col-10 text-center py-5"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <h1
                style={{
                  fontSize: "80px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Simple, affordable virtual machines
              </h1>
            </div>
            <div
              className="col-1"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div
              className="col-2"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div
              className="col-8"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <p>
                Get dependable uptime with our 99.99% SLA, simple security
                tools, and predictable monthly pricing with DigitalOcean's
                virtual machines, called Droplets.
              </p>
            </div>
            <div
              className="col-2"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div
              className="col-2"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div
              className="text-center"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                margin: "0 auto",
              }}
            >
              <button
                className="btn btn-light rounded-3 btn-md text-ligt py-2 m-1"
                onClick={() => signInWithFacebook()}
              >
                <FaFacebookF color={"#4064AC"} size={20} className="mr-2" />
                Sign In with Facebook
              </button>

              <button
                className="btn btn-light rounded-3 btn-md text-ligt py-2 m-1"
                onClick={() => signInWithGoogle()}
              >
                <img
                  className="mr-2"
                  src="https://www-static.cdn.prismic.io/www-static/7b66f955-63dd-41f5-a403-e6727b24d4ea_google-logo.svg"
                  alt=""
                  width="20"
                />{" "}
                Sign In with Google
              </button>

              <button
                className="btn btn-light rounded-3 btn-md text-ligt py-2 m-1"
                onClick={() => signInWithGithub()}
              >
                <img
                  className="mr-2"
                  src="https://www-static.cdn.prismic.io/www-static/0a3e37e0-1706-41d5-98d1-854585205a5e_github-logo.svg"
                  alt=""
                  width="20"
                />{" "}
                Sign In with Github
              </button>
            </div>
            <div
              className="col-2"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div
              className="col-12 py-5"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
          </div>
        )}

        <FrontBanner></FrontBanner>
        <WhyUs></WhyUs>
        <Pricing></Pricing>
      </div>
    </>
  );
}
