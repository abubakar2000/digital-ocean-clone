import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiip } from "../../../serverConfig";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Navbar";

export default function Tutorials() {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    axios.get();
    loadtutorialsData();
    return () => {};
  }, [axios]);

  const loadtutorialsData = () => {
    axios
      .get(`${apiip}/community/api/tutorials/`)
      .then((res) => {
        setarticles(res.data.data);
        console.log(articles);
      })
      .catch((err) => {
        alert("Cannot load community articles");
      });
  };

  const [SearchParam, setSearchParam] = useState("");

  return (
    <div className="container-fluid" style={{ backgroundColor: "white" }}>
      <Navbar />
      <div className="row">
        <div
          className="col-12 text-light text-center py-5"
          style={{ backgroundColor: "rgb(20, 192, 123)" }}
        >
          <h1 style={{ fontSize: "48px" }}>Tutorials</h1>
          <p style={{ fontSize: "24px" }}>
            Follow along with one of our 3,982 development and sysadmin
            tutorials.
          </p>
          <div
            className="col-md-8 rounded-3"
            style={{ margin: "0 auto", backgroundColor: "white" }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              color={"rgba(0,0,0,.4)"}
            ></FontAwesomeIcon>
            <input
              type="text"
              className="p-3 rounded-3 border-0"
              placeholder="Search Tutorials"
              style={{ width: "92%", outline: "none" }}
              value={SearchParam}
              onChange={(e) => setSearchParam(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-9 p-1 my-2" style={{ margin: "0 auto" }}>
            <h6>{articles?.length} Tutorials</h6>
          </div>
        </div>

        <div className="row">
          {articles
            .filter((fl) =>
              fl.title
                .toString()
                .toLowerCase()
                .includes(SearchParam.toLowerCase())
            )
            .map((item) => (
              <div
                className="card col-9 p-1 my-2 rounded shadow-sm"
                style={{ margin: "0 auto" }}
              >
                <div className="card-body  ">
                  <h6 className="text-primary my-2">
                    {item.category[0].title}
                  </h6>

                  <div className="col-12">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>
                      3 days ago • By Justin Ellingwood, Savic &nbsp;&nbsp;{" "}
                      <Link to={"/community/tutorials/" + item.id}>
                        <button className="btn btn-primary text-decoration-none p-2 rounded-3 text-light ">
                          Read more
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
