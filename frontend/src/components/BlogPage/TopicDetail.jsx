import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiip } from "../../serverConfig";
import "./TopicDetails.module.css";
import Navbar from "../Navbar";
import { TailSpin } from "react-loader-spinner";

export default function TopicDetail() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(true);

  const getBlogs = () => {
    axios
      .get(`${apiip}/blog/api/blog/?blog_id=${id}`)
      .then((res) => {
        if (res.status === 200) {
          setBlogs(res.data.data);
          setLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div
      className="row topicdetails-blog"
      style={{ margin: "100px", marginTop: "110pt" }}
    >
      <Navbar />

      {!loader ? (
        <>
          <div className="col-lg-3 d-none d-md-block d-lg-block d-xl-block">
            <h4 className="text-dark">Topics</h4>
            {blogs.map((item) => (
              <div key={item.id} className="row">
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

          <div className="col-lg-8">
            <div className="row">
              {blogs.map((item) => (
                <div key={item.id}>
                  <h1>{item.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.CONTENT_HTML }}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div
          className="container my-5"
          style={{ display: "grid", placeItems: "center" }}
        >
          <TailSpin height="100" width="100" color="grey" ariaLabel="loading" />
        </div>
      )}
    </div>
  );
}
