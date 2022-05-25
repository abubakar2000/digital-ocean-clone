import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiip } from "../../../serverConfig";

export default function TutorialsDetail() {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState([]);
  const getTutorial = () => {
    axios
      .get(`${apiip}/community/api/tutorials/`)
      .then((res) => {
        if (res.status === 200) {
          setTutorial(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTutorial();
  }, []);
  return (
    <div className="container-fluid" style={{ backgroundColor: "white" }}>
      <Navbar />
      {tutorial
        .filter((fi) => fi.id === parseInt(id))
        .map((item) => (
          <div key={item.id} className="container py-5">
            <h1 className="text-center mb-3">{item.title}</h1>
            <h5 className="text-center mb-3 text-muted">
              Category:{" "}
              {item.category.map((cat) => (
                <i>{cat.title} /</i>
              ))}
            </h5>
            <img
              alt="img"
              style={{ width: "100%", height: "400pt" }}
              src={
                apiip +
                "/media/c2d421b7-dc1b-428a-aa95-cbe61c10bddb_open_graph-banner-1.png_0HCg5uE.webp"
              }
            />
            <p className="my-3">{item.description}</p>
            {item.steps.map((it) => (
              <div>
                <h2>{it.title}</h2>
                <div
                  className="my-3"
                  dangerouslySetInnerHTML={{ __html: it.content.HTML }}
                />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
