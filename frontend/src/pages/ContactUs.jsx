import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./style.css";

export default function ContactUs() {
  return (
    <>
      <div>
        <Navbar></Navbar>

        <div className="container mb-5" style={{ marginTop: "70pt" }}>
          <div className="py-5 text-center">
            <h1 className="mb-3">Contact Us</h1>
          </div>

          <div className="mt-4" style={{ marginBottom: "70pt" }}>
            <div className="row mb-5">
              <div className="col-md-6">
                <label>First Name:</label>
                <input className="form-input" style={{ width: "90%" }} />
              </div>
              <div className="col-md-6">
                <label>Last Name:</label>
                <input className="form-input" style={{ width: "90%" }} />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-6">
                <label>Business Email Address:</label>
                <input className="form-input" style={{ width: "90%" }} />
              </div>
              <div className="col-md-6">
                <label>Business Phone Number:</label>
                <input className="form-input" style={{ width: "90%" }} />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-6">
                <label>
                  Country (please select the country where you company is
                  headquartered)
                </label>
                <select className="form-input" style={{ width: "90%" }}>
                  <option value="">Select...</option>
                  <option value="US">UNITED STATES</option>
                  <option value="IN">INDIA</option>
                  <option value="AD">ANDORRA</option>
                  <option value="AE">UNITED ARAB EMIRATES</option>
                  <option value="AF">AFGHANISTAN</option>
                  <option value="AG">ANTIGUA AND BARBUDA</option>
                  <option value="AI">ANGUILLA</option>
                  <option value="AL">ALBANIA</option>
                  <option value="AM">ARMENIA</option>
                  <option value="AN">NETHERLANDS ANTILLES</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>Company:</label>
                <input className="form-input" style={{ width: "90%" }} />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-6">
                <label>Which products & services are you considering?</label>
                <select className="form-input" style={{ width: "90%" }}>
                  <option value="">Select...</option>
                  <option value="US">UNITED STATES</option>
                  <option value="IN">INDIA</option>
                  <option value="AD">ANDORRA</option>
                  <option value="AE">UNITED ARAB EMIRATES</option>
                  <option value="AF">AFGHANISTAN</option>
                  <option value="AG">ANTIGUA AND BARBUDA</option>
                  <option value="AI">ANGUILLA</option>
                  <option value="AL">ALBANIA</option>
                  <option value="AM">ARMENIA</option>
                  <option value="AN">NETHERLANDS ANTILLES</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>What is your use case?</label>
                <select className="form-input" style={{ width: "90%" }}>
                  <option value="">Select...</option>
                  <option value="US">UNITED STATES</option>
                  <option value="IN">INDIA</option>
                  <option value="AD">ANDORRA</option>
                  <option value="AE">UNITED ARAB EMIRATES</option>
                  <option value="AF">AFGHANISTAN</option>
                  <option value="AG">ANTIGUA AND BARBUDA</option>
                  <option value="AI">ANGUILLA</option>
                  <option value="AL">ALBANIA</option>
                  <option value="AM">ARMENIA</option>
                  <option value="AN">NETHERLANDS ANTILLES</option>
                </select>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-6">
                <label>
                  What is your total monthly spend on cloud infrastructure?
                </label>
                <select className="form-input" style={{ width: "90%" }}>
                  <option value="$250 - $999">$250 - $999</option>
                  <option value="$0 - $249">$0 - $249</option>
                  <option value="$1,000 - $9,999">$1,000 - $9,999</option>
                  <option value="$10,000 - $99,999">$10,000 - $99,999</option>
                  <option value="$100,000 +">$100,000 + </option>
                </select>
              </div>
              <div className="col-md-6">
                <label>What is your use case?</label>
                <select className="form-input" style={{ width: "90%" }}>
                  <option value="ASAP">ASAP</option>
                  <option value="Within the next 4 weeks">
                    Within the next 4 weeks
                  </option>
                  <option value="Within 2-6 months">Within 2-6 months</option>
                  <option value="More than 6 months out">
                    More than 6 months out
                  </option>
                </select>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-6">
                <label>
                  What is the biggest challenge you are trying to solve with
                  this project?
                </label>
                <textarea className="textarea-input" style={{ width: "90%" }} />
              </div>
            </div>

            <div className="row mb-5">
              <div
                className="col-md-12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button className="btn btn-primary">Talk To An Expert</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
