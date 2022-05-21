import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiip } from "../../serverConfig";

export default function Basics() {
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

  return (
    <div className="container py-5 my-5">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h1>Dive into the Basics</h1>
        {articles
          .filter((fl) => fl.featured === true)
          .map((art) => (
            <Link
              to={"/community/tutorials/" + art.id}
              className="col-md-5 my-3 p-5 text-light text-decoration-none bg-primary rounded-2"
            >
              <div style={{ margin: "0 auto" }}>
                <div className="row">
                  <div className="col-2">
                    <img
                      src={
                        art?.image
                          ? apiip + art.image
                          : "https://picsum.photos/70"
                      }
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-3"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <h2>{art.title}</h2>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-11">
                    <p>{art.description}</p>
                    Learn More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
