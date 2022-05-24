import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiip } from "../../serverConfig";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Navbar from "../Navbar";
import "./solutions.css";

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
    <div className="topics text-center" style={{ marginTop: "60pt" }}>
      <Navbar />

      <div className="solution-header">
        <div className="container">
          <h1 className="text-center text-white">
            Simple and reliable cloud website hosting
          </h1>
          <h4 className="text-center text-white">
            DigitalOcean offers a simple and reliable cloud hosting solution
            that enables developers and businesses to get their website or
            application up and running quickly. Spin up a site quickly with our
            1-click apps for Wordpress, Ghost, and other content management
            systems, or get three free static sites using DigitalOcean App
            Platform.
          </h4>
        </div>
      </div>

      <div
        className="container py-5"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="row" style={{ justifyContent: "space-between" }}>
          {solution.map((item) => (
            <div>
              <h2 className="mb-4 text-center ">{item.title}</h2>

              <div className="mb-5">
                <h4 className="text-center mb-4">{item?.section_one?.title}</h4>
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

              <div className="my-5">
                <h4>{item.section_two.title}</h4>
                <h6 className="mb-5">{item.section_two.description}</h6>

                {item.section_two?.video_url && (
                  <div
                    className="my-3 d-flex"
                    style={{ justifyContent: "center" }}
                  >
                    <ReactPlayer url={item.section_two.video_url} />
                  </div>
                )}
              </div>

              <div className="my-5">
                {item.section_three && (
                  <div>
                    <h4>{item.section_three.title}</h4>
                    <div className="row mt-3">
                      {item.section_three.images.map((img) => (
                        <div className="col-md-4">
                          <img src={apiip + img.image} width={"100%"} alt="" />
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
                    <h6 className="mb-4">{item.section_four.description}</h6>
                    <div className="row mt-3">
                      {item.section_four.docs.map((it) => (
                        <div className="col-md-12">
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
                    <h4 className="mb-4">{item.section_five.title}</h4>
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
