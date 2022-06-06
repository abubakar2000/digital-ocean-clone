import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiip } from "../../serverConfig";

export default function Front() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    axios
      .get(`${apiip}/blog/api/blog/`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Res -> ", res.data.data[0].images[0]);
          setBlogs(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row py-5" style={{ margin: "0 auto" }}>
        <h1>Featured Posts</h1>
        <div className="pricing6">
          <div className="container">
            <div className="row mt-4">
              {blogs
                .filter((fe) => fe.featured === true)
                .map((item) => (
                  <div
                    className="col-md-4 rounded-3 p-1"
                    style={{ fontSize: "11px" }}
                  >
                    <div className="card card-shadow border-0 mb-4">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center">
                          <img
                            src={
                              item?.images
                                ? apiip + "/" + item.images[0]
                                : "https://picsum.photos/200"
                            }
                            style={{ width: "100%", height: "200px" }}
                            alt=""
                          />
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="my-3">
                              <img
                                src={
                                  item?.uploaded_by?.image
                                    ? apiip + item.uploaded_by.image
                                    : "https://picsum.photos/200"
                                }
                                className="rounded-circle"
                                style={{ width: "20px", height: "20px" }}
                                alt=""
                              />
                              &nbsp;&nbsp;
                              <Link
                                to="/profile"
                                className="text-decoration-none"
                              >
                                {item.uploaded_by.username}
                              </Link>
                              &nbsp;
                              <span
                                className="text-dark"
                                style={{ fontWeight: "bold" }}
                              >
                                on
                              </span>
                              &nbsp;
                              <Link
                                to={item.posted_on.url}
                                className="text-decoration-none"
                              >
                                {item.posted_on.title}
                              </Link>
                              &nbsp;&nbsp;
                              <span
                                className="text-dark"
                                style={{ fontWeight: "bold" }}
                              >
                                •{" "}
                                {item.posted_date.substr(
                                  0,
                                  item.posted_date.indexOf("T")
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-12 align-self-center">
                            <h4>
                              <Link
                                to={`/postdetails/${item.id}`}
                                // to={"/postdetails/" + item.id}
                                className="text-decoration-none text-dark"
                                style={{ fontSize: "24px" }}
                              >
                                {item.title}
                              </Link>
                            </h4>
                            <p>{item.description.slice(0, 180)}...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
