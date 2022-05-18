import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiip } from "../../serverConfig";
export default function Topics() {
  const [Docs, setDocs] = useState([]);
  useEffect(() => {
    var config = {
      method: "get",
      url: `${apiip}/docs/api/docs`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === "ok") {
          console.log(response.data.data);
          setDocs(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [axios]);

  return (
    <div className="topics container" style={{ marginTop: "90pt" }}>
      <h1 style={{ marginTop: "3%", marginBottom: "3%" }}>Welcome to Docs</h1>
      {/* <hr /> */}

      <div className="container-fluied px-3 py-3">
        <div className="row" style={{ justifyContent: "space-between" }}>
          {Docs.map((item) => (
            <Link
              key={item.id}
              to={"/docs/detail/" + item.id}
              className="text-decoration-none text-black"
            >
              <div className="card p-1 rounded col-sm-4 mb-3">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://picsum.photos/200"
                      style={{ width: "100%", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <h3 className="my-2">{item.title}</h3>
                  <p className="m-0">
                    How to Create a Droplet from the DigitalOcean Control Panel
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
