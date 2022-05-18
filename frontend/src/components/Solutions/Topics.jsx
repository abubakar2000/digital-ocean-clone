import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiip } from "../../serverConfig";
import Navbar from "../Navbar";
export default function Topics() {
  const [solutions, setSolutions] = useState([]);
  useEffect(() => {
    var config = {
      method: "get",
      url: `${apiip}/solution/api/solutions/`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === "ok") {
          console.log(response.data.data);
          setSolutions(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [axios]);

  return (
    <div className="topics container pt-5" style={{ marginTop: "60pt" }}>
      <Navbar />
      <h1 className="mt-5">Welcome to the Solutions</h1>
      <hr />

      <div className="container px-3 py-3">
        <div className="row" style={{ justifyContent: "space-between" }}>
          {solutions.map((item) => (
            <div className="card p-1 rounded col-sm-4 mb-3">
              <Link
                key={item.id}
                to={"/solution/detail/" + item.id}
                className="text-decoration-none text-black"
              >
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://picsum.photos/200"
                      style={{ width: "100%", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <h3 className="my-2">{item.title}</h3>
                  <p className="m-0">{item.description.slice(0, 150)} . . .</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
