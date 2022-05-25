import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

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
      search: "",
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

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
      <div>
        <header
          className="header"
          style={{
            backgroundColor: this.state.isScrollingUp ? "white" : "white",
            position: this.state.isScrollingUp ? "fixed" : "relative",
            top: 0,
          }}
        >
          <div className="container">
            <div className="row align-items-left">
              <div
                className="col-md-5"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="brand-name">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/"}
                  >
                    Frontend
                  </Link>
                </div>

                <div className="nav-toggle">
                  <span></span>
                </div>
              </div>
              <div className="col-md-7">
                <nav className="nav text-dark">
                  <ul>
                    <li>
                      <Link
                        to={"/tutorials"}
                        style={{ background: "none", border: "none" }}
                        onClick={() => {}}
                      >
                        Tutorials
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/community/questions"}
                        style={{ background: "none", border: "none" }}
                        onClick={() => {}}
                      >
                        Questions
                      </Link>
                    </li>
                    <li
                      style={{
                        backgroundColor: "white",
                        border: "1px solid rgba(0,0,0,.3)",
                      }}
                      className="rounded-3 px-3 my-md-3 "
                    >
                      <form action={"/search/" + this.state.search}>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        <input
                          type="text"
                          className="py-2 mx-3 px-2"
                          placeholder="Search Community"
                          value={this.state.search}
                          onChange={(e) =>
                            this.setState({ search: e.target.value })
                          }
                          style={{
                            border: "none",
                            outline: "none",
                            width: "70%",
                          }}
                        />
                        <span
                          className="bg-light p-2 rounded-3"
                          style={{ border: "none" }}
                        >
                          /
                        </span>
                      </form>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
