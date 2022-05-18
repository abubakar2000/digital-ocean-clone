import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiip } from "../../serverConfig";

export default function Topics() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    axios
      .get(`${apiip}/blog/api/blog/`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Res -> ", res.data.data);
          setBlogs(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row" style={{ margin: "100px" }}>
      <div className="col-3 d-none d-md-block d-lg-block d-xl-block">
        <h4 className="text-dark">Topics</h4>
        {blogs.map((item) => (
          <div className="row">
            <Link
              className="topic-link m-2"
              style={{ textDecoration: "none", textAlign: "left" }}
              to={`/postdetails/${item.id}`}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="col-8">
        {blogs.map((item) => (
          <div className="row">
            <div className="col-5">
              <img
                src={
                  item?.image
                    ? apiip + item.image
                    : "https://picsum.photos/500/300?random=2"
                }
                alt=""
                style={{ width: "90%", height: "150px", borderRadius: "2%" }}
              />
            </div>
            <div className="col-7">
              <div className="row">
                <h5>
                  <a
                    href={"/postdetails/" + item.id}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item?.title}
                  </a>
                </h5>
              </div>
              <div className="row mt-1" style={{ fontSize: "12px" }}>
                &nbsp;&nbsp;
                <div className="col-1">
                  <img
                    src="https://picsum.photos/500/300?random=1"
                    style={{
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                    }}
                    alt=""
                  />
                </div>
                <div className="col-10 m-1">
                  <Link
                    to="/userprofile"
                    style={{ textDecoration: "none", wordSpacing: "1px" }}
                  >
                    {item.uploaded_by.username}
                  </Link>
                  &nbsp;on&nbsp;
                  <a
                    href={"/" + item.posted_on.url}
                    style={{ textDecoration: "none", wordSpacing: "1px" }}
                  >
                    {item.posted_on.title}
                  </a>
                  &nbsp;&nbsp; •{" "}
                  {item.posted_date.substr(0, item.posted_date.indexOf("T"))}
                </div>
              </div>
              <div className="row mt-2">
                <p>{item.description.substring(0, 200)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
