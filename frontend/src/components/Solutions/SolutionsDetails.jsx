import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiip } from "../../serverConfig";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Navbar from "../Navbar";

export default function DocDetails() {
  const { id } = useParams();
  const [solution, setSolution] = useState([]);
  useEffect(() => {
    var config = {
      method: "get",
      url: `${apiip}/solution/api/solutions/?solution_id=${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === "ok") {
          setSolution(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [axios]);

  return (
    <div className="topics" style={{ marginTop: "60pt" }}>
      <Navbar />
      <h1 className="mt-5">{solution.title}</h1>
      <hr />

      <div className="container-fluied mx-3 px-3 py-3">
        <div className="row" style={{ justifyContent: "space-between" }}>
          {solution.map((item) => (
            <div>
              <h2 className="mb-4">{item.title}</h2>

              <div className="mb-5">
                <h4>{item?.section_one?.title}</h4>
                <div className="row">
                  {item?.section_one?.cards?.map((s1) => (
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <img
                              src={apiip + s1.image}
                              style={{ width: "100%", height: "200px" }}
                              alt=""
                            />
                          </div>
                          <h3 className="my-2">{s1.title}</h3>
                          <p>{s1.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h4>
                  {item.section_two.title
                    ? item.section_two.title
                    : "Section Two:"}
                </h4>
                <h6>
                  {item.section_two.description
                    ? item.section_two.description
                    : "Section Two description:"}
                </h6>

                {item.section_two?.video_url && (
                  <div className="my-3">
                    <ReactPlayer url={item.section_two.video_url} />
                  </div>
                )}
              </div>

              <div className="mb-5">
                {item.section_three && (
                  <div>
                    <h4>{item.section_three.title}</h4>
                    <div className="row mt-3">
                      {item.section_three.images.map((img) => (
                        <div className="col-md-4">
                          <img src={apiip + img.image} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-5">
                {item.section_four && (
                  <div>
                    <h4>{item.section_four.title}</h4>
                    <h6>{item.section_four.description}</h6>
                    <div className="row mt-3">
                      {item.section_four.docs.map((it) => (
                        <div className="col-md-10">
                          {it.steps.map((steps) => (
                            <div className="mt-2">
                              <Accordion
                                key={steps.id}
                                defaultActiveKey="0"
                                style={{ marginBottom: "5pt" }}
                              >
                                <Accordion.Item eventKey={steps.id}>
                                  <Accordion.Header>
                                    {steps.title}
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: steps.HTML,
                                      }}
                                    />
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-5">
                {item.section_five && (
                  <div>
                    <h4>{item.section_five.title}</h4>
                    <Accordion
                      defaultActiveKey="0"
                      style={{ marginBottom: "5pt" }}
                    >
                      <Accordion.Item eventKey={0}>
                        <Accordion.Header>F.A.Q</Accordion.Header>
                        <Accordion.Body>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.section_five.description_html,
                            }}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
