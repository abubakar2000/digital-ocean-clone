import React from "react";

export default function GetInvolvedSection() {
  return (
    <div className="container">
      <div className="row py-5 my-5">
        <h1>Get Involved</h1>
        <div className="col-md-6 my-5">
          <div className="row">
            <div className="col-2">
              <img
                src="https://picsum.photos/200"
                style={{ width: "60px", height: "60px" }}
                alt=""
              />
            </div>
            <div className="col-10">
              <h1>Write for DOnations</h1>
            </div>
          </div>
          <div className="row my-3">
            <p>
              Get paid to write content for DigitalOcean! You can even choose a
              tech-focused charity for DO to donate to when you contribute to
              our library of content.
            </p>
          </div>
        </div>
        <div className="col-md-6 my-5">
          <div className="row">
            <div className="col-2">
              <img
                src="https://picsum.photos/200"
                style={{ width: "60px", height: "60px" }}
                alt=""
              />
            </div>
            <div className="col-10">
              <h1>Join Hollie’s Hub for Good</h1>
            </div>
          </div>
          <div className="row my-3">
            <p>
              If you’re building a nonprofit project or startup that needs
              resources or visibility to actively improve health and education,
              reduce inequality, and/or spur economic growth, we want to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
