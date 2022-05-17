import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiip } from "../serverConfig";
import { useParams } from "react-router-dom";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
  const { text } = useParams();
  const [searchText, setSearchText] = useState("");
  const [SearchDetails, setSearchDetails] = useState([]);
  useEffect(() => {
    axios.get();
    loadtutorialsData();
    return () => {};
  }, [axios]);

  const loadtutorialsData = () => {
    axios
      .get(`${apiip}/core/api/searchwhole/?search_params=` + text)
      .then((res) => {
        console.log("Data -> ", res.data.data.blogs);
        setSearchDetails(res.data.data);
      })
      .catch((err) => {
        alert("Cannot search");
      });
  };
  return (
    <div className="container-fluid" style={{ backgroundColor: "white" }}>
      <div className="row">
        <div
          className="col-12 text-light text-center py-5"
          style={{
            backgroundColor: "rgb(20, 192, 123)",
          }}
        >
          <h1 style={{ fontSize: "48px" }}>Search</h1>
          <p style={{ fontSize: "24px" }}>
            Follow along with one of our 3,982 development and sysadmin
            tutorials.
          </p>
          <div
            className="col-md-8 rounded-3"
            style={{ margin: "0 auto", backgroundColor: "white" }}
          >
            <form action={"/search/" + searchText}>
              <FontAwesomeIcon
                icon={faSearch}
                color={"rgba(0,0,0,.4)"}
              ></FontAwesomeIcon>
              <input
                type="text"
                className="p-3 rounded-3 border-0"
                placeholder="Search anything"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: "92%", outline: "none" }}
              />
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/*Products*/}
          <div className="col-md-12">
            {SearchDetails?.products?.length !== 0 ? (
              <div>
                <div className="col-9 p-1 my-3" style={{ margin: "0 auto" }}>
                  <h1>Products</h1>
                </div>

                {SearchDetails?.products?.map((item) => (
                  <div
                    className="col-9 p-1 my-3"
                    style={{ margin: "0 auto" }}
                    key={item.id}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={
                          item.images?.image
                            ? apiip + item.images.image
                            : "https://picsum.photos/200"
                        }
                        style={{ width: "100%", height: "300pt" }}
                        alt=""
                      />
                    </div>
                    <h6 className="text-primary my-2">
                      {item.category?.title}
                    </h6>

                    <Link
                      to={"/postdetails/" + item.id}
                      className="row my-2 text-dark text-decoration-none"
                    >
                      <div className="col-12">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>

          {/*Blogs*/}
          <div className="col-md-12">
            {SearchDetails?.blogs?.length !== 0 ? (
              <div>
                <div className="col-9 p-1 my-3" style={{ margin: "0 auto" }}>
                  <h1>Blogs</h1>
                </div>
                {SearchDetails?.blogs?.map((item) => (
                  <div
                    className="col-9 p-1 my-3"
                    style={{ margin: "0 auto" }}
                    key={item.id}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={
                          item.image
                            ? apiip + item.image
                            : "https://picsum.photos/200"
                        }
                        style={{ width: "100%", height: "300pt" }}
                        alt=""
                      />
                    </div>
                    <h6 className="text-primary my-2">{item.category.title}</h6>

                    <Link
                      to={"/postdetails/" + item.id}
                      className="row my-2 text-dark text-decoration-none"
                    >
                      <div className="col-12">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>
                          3 days ago • By Justin Ellingwood, Savic &nbsp;&nbsp;{" "}
                          <Link to={"/community/tutorials/?q=apache"}>
                            <span className="bg-primary text-decoration-none p-2 rounded-3 text-light">
                              Apache
                            </span>
                          </Link>
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>

          {/*Docs*/}
          <div className="col-md-12">
            {SearchDetails?.docs?.length !== 0 ? (
              <div>
                <div className="col-9 p-1 my-3" style={{ margin: "0 auto" }}>
                  <h1>Docs</h1>
                </div>
                {SearchDetails?.docs?.map((item) => (
                  <div
                    className="col-9 p-1 my-3"
                    style={{ margin: "0 auto" }}
                    key={item.id}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={
                          item.image
                            ? apiip + item.image
                            : "https://picsum.photos/200"
                        }
                        style={{ width: "100%", height: "300pt" }}
                        alt=""
                      />
                    </div>
                    <h6 className="text-primary my-2">
                      {item.category?.title}
                    </h6>

                    <Link
                      to={"/docs/detail/" + item.id}
                      className="row my-2 text-dark text-decoration-none"
                    >
                      <div className="col-12">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>

          {/*Tutorials*/}
          <div className="col-md-12">
            {SearchDetails?.tutorials?.length !== 0 ? (
              <div>
                <div className="col-9 p-1 my-3" style={{ margin: "0 auto" }}>
                  <h1>Tutorials</h1>
                </div>
                {SearchDetails?.tutorials?.map((item) => (
                  <div
                    className="col-9 p-1 my-3"
                    style={{ margin: "0 auto" }}
                    key={item.id}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={
                          item?.image
                            ? apiip + item?.image
                            : "https://picsum.photos/200"
                        }
                        style={{ width: "100%", height: "300pt" }}
                        alt=""
                      />
                    </div>
                    <h6 className="text-primary my-2">
                      {item.category?.title}
                    </h6>

                    <Link
                      to={"/community/tutorials/" + item.id}
                      className="row my-2 text-dark text-decoration-none"
                    >
                      <div className="col-12">
                        <h2>{item.title}</h2>
                        Category:{" "}
                        {item.category.map((cat) => (
                          <i>{cat.title} . </i>
                        ))}
                        <p className="mt-3">{item.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
