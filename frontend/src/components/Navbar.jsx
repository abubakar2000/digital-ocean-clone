import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/fontawesome-free-solid";
import axios from "axios";
import { apiip } from "../serverConfig";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProductsOpen: false,
      isCommunityOpen: false,
      isServiceOpen: false,
      isAboutOpen: false,
      isScrollingUp: false,
      isScrollingDown: true,
      scrollingPosition: 0,
      // abm
      products: [],
      articles: [],
      isLoggedIn: localStorage.getItem("isLoggedIn"),
    };
    console.log(localStorage.getItem("isLoggedIn"));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    this.loadProductsData();
    this.loadtutorialsData();
  }

  loadProductsData = () => {
    axios
      .get(`${apiip}/products/api/products/`)
      .then((res) => {
        this.setState({ products: res.data.data });
        console.log("products -> ", this.state.products);
      })
      .catch((err) => {
        alert("Cannot load products");
      });
  };

  loadtutorialsData = () => {
    axios
      .get(`${apiip}/community/api/tutorials/`)
      .then((res) => {
        this.setState({ articles: res.data.data });
        // console.log(res.data.data);
      })
      .catch((err) => {
        alert("Cannot load community blogs");
      });
  };

  listenToScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 100) {
      this.setState({
        isScrollingUp: scrolled < this.state.scrollingPosition,
        isMoreThan100: true,
        scrollingPosition: scrolled,
      });
    } else {
      this.setState({
        isScrollingUp: false,
        isMoreThan100: true,
        scrollingPosition: scrolled,
      });
    }
  };

  render() {
    return (
      <div style={{ display: this.props.display }}>
        <header
          className="header"
          style={{
            backgroundColor: this.state.isScrollingUp
              ? "white"
              : "rgb(249, 250, 254)",
            position: this.state.isScrollingUp ? "fixed" : "relative",
            top: 0,
          }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="brand-name">
                <Link to="/">Frontend</Link>
              </div>
              <div className="nav-toggle">
                <span></span>
              </div>
              <nav className="nav">
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <li>
                    <button
                      style={{ background: "none", border: "none" }}
                      onClick={() => {
                        this.setState({
                          isProductsOpen: !this.state.isProductsOpen,
                          isServiceOpen: false,
                          isCommunityOpen: false,
                          isAboutOpen: false,
                        });
                      }}
                    >
                      Products{" "}
                      <FontAwesomeIcon
                        icon={
                          this.state.isProductsOpen ? faAngleUp : faAngleDown
                        }
                      />{" "}
                    </button>
                  </li>
                  <li>
                    <button
                      style={{ background: "none", border: "none" }}
                      onClick={() => {
                        this.setState({
                          isProductsOpen: false,
                          isServiceOpen: false,
                          isCommunityOpen: !this.state.isCommunityOpen,
                          isAboutOpen: false,
                        });
                      }}
                    >
                      Community{" "}
                      <FontAwesomeIcon
                        icon={
                          this.state.isCommunityOpen ? faAngleUp : faAngleDown
                        }
                      />{" "}
                    </button>
                  </li>
                  {this.state.isLoggedIn !== "true" && (
                    <li>
                      <button
                        style={{ background: "none", border: "none" }}
                        onClick={() => {
                          window.location.href = "login";
                        }}
                      >
                        Login{" "}
                      </button>
                    </li>
                  )}
                  {this.state.isLoggedIn !== "true" && (
                    <li>
                      <div>
                        <div
                          style={{
                            backgroundColor: "#0169FF",
                            paddingTop: "5pt",
                            paddingBottom: "5pt",
                            paddingLeft: "10pt",
                            paddingRight: "10pt",
                            color: "white",
                            cursor: "pointer",
                            borderRadius: "3pt",
                          }}
                          onClick={() => {
                            window.location.href = "/register";
                          }}
                        >
                          Signup
                        </div>
                      </div>
                    </li>
                  )}
                  {this.state.isLoggedIn === "true" && (
                    <li>
                      <div>
                        <div
                          style={{
                            backgroundColor: "red",
                            paddingTop: "5pt",
                            paddingBottom: "5pt",
                            paddingLeft: "10pt",
                            paddingRight: "10pt",
                            color: "white",
                            cursor: "pointer",
                            borderRadius: "3pt",
                          }}
                          onClick={() => {
                            localStorage.removeItem("isLoggedIn");
                            this.setState({ isLoggedIn: "false" }, () => {
                              window.location.href = "/login";
                            });
                          }}
                        >
                          Logout
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
            <div
              className="dropdown-content bg-light p-2"
              style={{ display: this.state.isProductsOpen ? "block" : "none" }}
            >
              <div className="row p-4">
                <div className="col-md-4 bg-light left-side overflow-auto">
                  <h5 className="bold mb-5 text-dark">Featured Products</h5>
                  {this.state.products.map((prd) =>
                    prd.sub_products
                      .filter((si) => si.featured === true)
                      .map((it) => (
                        <div className="card custom-card text-dark">
                          <Link
                            key={it.title + prd.title}
                            className="text-decoration-none text-dark"
                            to="/product"
                          >
                            <div>
                              <h5>{it.title}</h5>
                              <p>{it.description}</p>
                            </div>
                          </Link>
                        </div>
                      ))
                  )}
                </div>
                <div className="col-md-7 m-3 mt-5">
                  <div className="row">
                    {this.state.products.map((prd) => (
                      <div className="col-md-4">
                        <h6 className="bold">{prd.title}</h6>
                        <ul>
                          {prd.sub_products.map((si) => (
                            <li>{si.title}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dropdown-content bg-light p-2"
              style={{ display: this.state.isCommunityOpen ? "block" : "none" }}
            >
              <div className="row p-4">
                <div className="col-md-4 bg-light left-side overflow-auto">
                  <h5 className="bold mb-5 text-dark">Community</h5>
                  <div className="card custom-card text-dark">
                    <Link
                      className="text-decoration-none text-dark"
                      to="/community"
                    >
                      <div>
                        <h5>Overview</h5>
                        <p>Connect, share and learn</p>
                      </div>
                    </Link>
                  </div>
                  <div className="card custom-card text-dark">
                    <Link
                      className="text-decoration-none text-dark"
                      to="/community"
                    >
                      <div>
                        <h5>Tutorials</h5>
                        <p>DevOps and development guides</p>
                      </div>
                    </Link>
                  </div>
                  <div className="card custom-card text-dark">
                    <Link
                      className="text-decoration-none text-dark"
                      to="/community"
                    >
                      <div>
                        <h5>Questions and Answers</h5>
                        <p>Development and systems Q&A</p>
                      </div>
                    </Link>
                  </div>
                  <div className="card custom-card text-dark">
                    <Link
                      className="text-decoration-none text-dark"
                      to="/community"
                    >
                      <div>
                        <h5>Tools</h5>
                        <p>Community-built integrations</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-7 m-3 mt-5">
                  <div className="row">
                    <div className="col-md-4">
                      <h6 className="bold">Get Involved</h6>
                      <ul>
                        <li>
                          <Link
                            to={"/community"}
                            className="text-dark text-decoration-none"
                          >
                            Write for Donations
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={"/community"}
                            className="text-dark text-decoration-none"
                          >
                            Meetups
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={"/community"}
                            className="text-dark text-decoration-none"
                          >
                            Hatch Startup Program
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-8">
                      <h6 className="bold">Featured Articles</h6>
                      <ul>
                        {this.state.articles
                          .filter((art) => art.featured === true)
                          .map((art) => (
                            <li>
                              <div className="row">
                                <div className="col-3">
                                  <img
                                    src="https://picsum.photos/70"
                                    className="rounded-3"
                                    style={{ width: "70px", height: "70px" }}
                                    alt=""
                                  />
                                </div>
                                <div className="col-8 text-left">
                                  <Link
                                    to={"/postdetails/" + art.id}
                                    className="text-black text-decoration-none"
                                  >
                                    <p>{art.title}</p>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
