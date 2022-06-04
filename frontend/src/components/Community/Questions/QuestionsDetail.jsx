import axios from "axios";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { apiip } from "../../../serverConfig";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";

import EditorJs from "@natterstefan/react-editor-js";
import { EDITOR_JS_TOOLS, EDITOR_JS_TOOLS2 } from "./constants";
import EditorJS from "@editorjs/editorjs";
import FormData from "form-data";

export default function QuestionsDetail() {
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();

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

  const PostAnswerV2 = (answer) => {
    if (answer === "") {
      return;
    }

    var formdata = new FormData();

    formdata.append("question_id", parseInt(id));
    formdata.append("answer", answer);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      headers: {
        Authorization: "Token " + LoginKey,
      },
    };

    fetch(`${apiip}/community/api/answer/`, requestOptions)
      .then((result) => {
        if (result.statusText) {
          alert("Answer submitted!");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const editor = new EditorJS({
    tools: EDITOR_JS_TOOLS,
    holder: "editorjs",
  });

  const EditorFirst = async () => {
    await editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
        // postAnswer(outputData.blocks);

        PostAnswerV2(outputData.blocks);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  const PostComment = (comment) => {
    if (comment === "") {
      return;
    }

    console.log("This is the comment: ", comment);

    var formdata = new FormData();

    formdata.append("question_id", parseInt(id));
    formdata.append("comment", comment);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      headers: {
        Authorization: "Token " + LoginKey,
      },
    };

    fetch(`${apiip}/community/api/comment/`, requestOptions)
      .then((result) => {
        if (result.statusText) {
          alert("Comment submitted!");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const editor2 = new EditorJS({
    tools: EDITOR_JS_TOOLS2,
    holder: "editorjs2",
  });

  const EditorFirst2 = async () => {
    await editor2
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
        // postAnswer(outputData.blocks);

        PostComment(outputData.blocks);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
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
                    <div
                      className="card shadow-sm"
                      style={{ position: "relative" }}
                    >
                      <div id="editorjs"></div>
                      <button
                        className="btn btn-primary"
                        style={{
                          position: "absolute",
                          right: 20,
                          bottom: 25,
                          zIndex: "99999999",
                        }}
                        onClick={() => EditorFirst()}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-12">
                    <h4>Comment:</h4>
                    <div
                      className="card shadow-sm"
                      style={{ position: "relative" }}
                    >
                      <div id="editorjs2"></div>
                      <button
                        className="btn btn-primary"
                        style={{
                          position: "absolute",
                          right: 20,
                          bottom: 25,
                          zIndex: "99999999",
                        }}
                        onClick={() => EditorFirst2()}
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
                              className="user-img rounded-circle mr-2 "
                              alt="user"
                            />
                            <span>
                              <small className="font-weight-bold text-primary">
                                {c.user.username}
                              </small>{" "}
                              <small className="">
                                {c.comment?.data?.text}
                              </small>
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
