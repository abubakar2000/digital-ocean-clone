import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { apiip } from "../../../serverConfig";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { Editor, EditorState } from "draft-js";

export default function QuestionsDetail() {
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();

  const [answer, setAnswer] = useState("");
  const [comment, setComment] = useState("");

  const [LoginKey, setLoginKey] = useState("");

  useEffect(() => {
    setLoginKey(localStorage.getItem("loginKey"));
    axios.get();
    loadQuestionsData();
    return () => {};
  }, [axios]);

  const loadQuestionsData = () => {
    axios
      .get(`${apiip}/community/api/question/`)
      .then((res) => {
        setQuestions(res.data.data);
      })
      .catch((err) => {
        alert("Cannot load community questions");
      });
  };

  const postAnswer = () => {
    if (answer !== "") {
      const headers = {
        authorization: "Token " + LoginKey,
      };

      const body = {
        question_id: parseInt(id),
        answer: answer,
      };

      console.log(body, headers);

      axios
        .post(`${apiip}/community/api/answer/`, { body }, { headers })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert("Cannot answer right now!");
        });
    } else {
      alert("Write your answer!");
    }
  };

  const postComment = () => {
    if (comment !== "") {
      const headers = {
        authorization: "Token " + LoginKey,
      };

      const body = {
        question_id: parseInt(id),
        comment: comment,
      };

      console.log(body, headers);
      axios
        .post(`${apiip}/community/api/comment/`, { body }, { headers })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          alert("Cannot comment right now!");
        });
    } else {
      alert("Write your comment!");
    }
  };

  return (
    <div
      className="questions container-fluid"
      style={{ backgroundColor: "white" }}
    >
      <Navbar />
      <div className="container">
        <div className="row" style={{ marginTop: "20pt" }}>
          {questions
            .filter((fl) => fl.id === parseInt(id))
            .map((item) => (
              <div className="col-9 p-1 my-2" style={{ margin: "0 auto" }}>
                <h6 className="text-primary">{item.category.title}</h6>

                <div className="col-12">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p>
                    {item.answers?.length} answers •{" "}
                    {item.posted_date.substr(0, item.posted_date.indexOf("T"))}{" "}
                    • {item.posted_by?.title} &nbsp;&nbsp;{" "}
                    <Link to={"/community/tutorials/?q=apache"}>
                      <span className="bg-primary text-decoration-none p-2 rounded-3 text-light">
                        Apache
                      </span>
                    </Link>
                  </p>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <h4>Answer:</h4>
                    <div style={{ position: "relative" }}>
                      <textarea
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        style={{
                          width: "100%",
                          height: "150pt",
                          resize: "none",
                          padding: "10pt 20pt",
                        }}
                      />
                      <button
                        className="btn btn-primary"
                        style={{
                          position: "absolute",
                          right: 20,
                          bottom: 25,
                        }}
                        onClick={() => postAnswer()}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-12">
                    <h4>Comment:</h4>
                    <div style={{ position: "relative" }}>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        style={{
                          width: "100%",
                          resize: "none",
                          padding: "7pt 20pt",
                        }}
                      />
                      <button
                        className="btn btn-primary"
                        style={{
                          position: "absolute",
                          right: 20,
                          bottom: 20,
                        }}
                        onClick={() => postComment()}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                <hr className="my-5" />

                <div className="row  ">
                  <div className="col-md-12">
                    <div className="headings d-flex justify-content-between align-items-center mb-3">
                      <h4>Comments({item.comments?.length})</h4>
                    </div>

                    {item.comments?.map((c) => (
                      <div className="card p-3 py-4 mb-3">
                        <div className="row">
                          <div className="col-10">
                            <img
                              src={
                                item.image
                                  ? item.image
                                  : "https://i.imgur.com/hczKIze.jpg"
                              }
                              width="30"
                              class="user-img rounded-circle mr-2 "
                              alt="user"
                            />
                            <span>
                              <small className="font-weight-bold text-primary">
                                {c.user.username}
                              </small>{" "}
                              <small className="">{c.comment}</small>
                            </span>
                          </div>
                          <div className="col-2">
                            <div className="d-flex justify-content-center align-items-center">
                              <small>2 days ago</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
