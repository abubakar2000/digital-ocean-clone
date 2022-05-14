import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiip } from "../../serverConfig";
import { useParams } from "react-router-dom";

export default function DocDetails() {
  const { id } = useParams();
  const [Docs, setDocs] = useState([]);
  useEffect(() => {
    var config = {
      method: "get",
      url: `${apiip}/docs/api/docs?doc_id=${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === "ok") {
          setDocs(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [axios]);

  return (
    <div className="topics">
      <h1>Welcome to Docs</h1>
      <hr />

      <div className="container-fluied mx-3 px-3 py-3">
        <div className="row" style={{ justifyContent: "space-between" }}>
          {Docs.map((item) => (
            <div key={item.id} className="card p-3 rounded col-sm-12 mb-3">
              <div className="card-body">
                <h3>{item.title}</h3>

                {item.steps.map((it) => (
                  <Accordion
                    key={it.id}
                    defaultActiveKey="0"
                    style={{ marginBottom: "10pt" }}
                  >
                    <Accordion.Item eventKey={it.id}>
                      <Accordion.Header>{it.title}</Accordion.Header>
                      <Accordion.Body>
                        <div dangerouslySetInnerHTML={{ __html: it.HTML }} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
