import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiip } from "../../../serverConfig";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Navbar";

export default function Questions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get();
    loadQuestionsData();
    return () => {};
  }, [axios]);

  const loadQuestionsData = () => {
    axios
      .get(`${apiip}/community/api/question/`)
      .then((res) => {
        setQuestions(res.data.data);
        console.log(questions);
      })
      .catch((err) => {
        alert("Cannot load community questions");
      });
  };

  return (
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
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-9 p-1 my-2" style={{ margin: "0 auto" }}>
            <h6>{questions.length} Questions</h6>
          </div>
        </div>
        <div className="row">
          {questions.map((item) => (
            <div
              className="card col-9 p-1 my-2 rounded shadow-sm"
              style={{ margin: "0 auto" }}
            >
              <div className="card-body  ">
                <h6 className="text-primary">{item.category.title}</h6>

                <div className="col-12">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p>
                    {item.answers?.length} answers •{" "}
                    {item.posted_date.substr(0, item.posted_date.indexOf("T"))}{" "}
                    • {item.posted_by?.title} &nbsp;&nbsp;{" "}
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
