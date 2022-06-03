import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiip } from "../../../serverConfig";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Navbar";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get();
    loadQuestionsData();
    return () => { };
  }, [axios]);

  const loadQuestionsData = () => {
    axios
      .get(`${apiip}/community/api/question/`)
      .then((res) => {
        setQuestions(res.data.data);
        console.log(questions);
        setIsLoading(false)
      })
      .catch((err) => {
        alert("Cannot load community questions");
        setIsLoading(false)
      });
  };

  const [SearchParam, setSearchParam] = useState("");

  return (

    <>
      {
        !isLoading &&
        <div className="container-fluid" style={{ backgroundColor: "white" }}>
          <Navbar />
          <div className="row">
            <div
              className="col-12 text-light text-center py-5"
              style={{ backgroundColor: "rgb(20, 192, 123)" }}
            >
              <h1 style={{ fontSize: "48px" }}>Questions</h1>
              <p style={{ fontSize: "24px" }}>
                Ask a development question or answer others’ in our diverse Q&A
                section. For information about the DigitalOcean product, check out
                our Product Docs.
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
                <h6>{questions.length} Questions</h6>
              </div>
            </div>
            <div className="row">
              {questions
                .filter((fl) =>
                  fl.title
                    .toString()
                    .toLowerCase()
                    .includes(SearchParam.toLowerCase())
                )
                .map((item) => (
                  <div
                    className="card col-9 p-1 my-2 rounded shadow"
                    style={{ margin: "0 auto" }}
                  >
                    <div className="card-body  ">
                      <h6 className="text-primary">{item.category.title}</h6>

                      <div className="col-12">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>
                          {item.answers?.length} answers •{" "}
                          {item.posted_date.substr(
                            0,
                            item.posted_date.indexOf("T")
                          )}{" "}
                          • {item.posted_by?.title} &nbsp;&nbsp;{" "}
                          <div className="text-right">
                            <Link to={"/community/questions/" + item.id}>
                              <button className="btn btn-success text-decoration-none p-2 rounded-3 text-light ">
                                Answer
                              </button>
                            </Link>
                            <Link to={"/community/questions/" + item.id}>
                              <button className="btn btn-primary text-decoration-none p-2 rounded-3 text-light ml-2">
                                Comment
                              </button>
                            </Link>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      }
      {
        isLoading &&
        <div style={{
          height: '90vh', width: "100%", display: 'flex',
          alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
        }}>
          <div className="spinner-border" />
          <div style={{ fontWeight: 'bold', marginTop: '10pt' }}>Loading...</div>
        </div>
      }
    </>

  );
}
