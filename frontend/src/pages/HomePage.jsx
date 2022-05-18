import React, { useState, useEffect } from "react";
import FrontBanner from "../components/HomePage/FrontBanner";
import WhyUs from "../components/HomePage/WhyUs";
import Pricing from "../components/HomePage/Pricing";
import Navbar from "../components/Navbar";
import bg from "../img/bg.jpg";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }, []);

  return (
    <>
      <div>
        <Navbar></Navbar>

        {isLoggedIn !== "true" && (
          <div>
            <div
              className="row front-bg text-light"
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
                <button className="btn btn-primary rounded-1 btn-md text-ligt py-2 m-1">
                  Signup with email
                </button>
                <button className="btn btn-light rounded-3 btn-md text-ligt py-2 m-1">
                  <img
                    src="https://www-static.cdn.prismic.io/www-static/7b66f955-63dd-41f5-a403-e6727b24d4ea_google-logo.svg"
                    alt=""
                    width="20"
                  />{" "}
                  Sign In with Gmail
                </button>
                <button className="btn btn-light rounded-3 btn-md text-ligt py-2 m-1">
                  <img
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
          </div>
        )}

        <FrontBanner></FrontBanner>
        <WhyUs></WhyUs>
        <Pricing></Pricing>
        <Footer></Footer>
      </div>
    </>
  );
}
