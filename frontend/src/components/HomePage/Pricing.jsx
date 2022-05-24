import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiip } from "../../serverConfig";

// import pricing_image from '../../img/pricing_image.png'

export default function Pricing() {
  const [pricing, setPricing] = useState([]);
  const getPricing = () => {
    axios
      .get(`${apiip}/products/api/pricing-plan/`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Res -> ", res.data);
          setPricing(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPricing();
  }, []);

  return (
    <section className="service-section" id="services">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="section-title text-center">
              <p>Pricing Plans</p>
              <h1>Our Best Pricing</h1>
            </div>
          </div>
        </div>

        <div className="pricing6">
          <div className="container">
            <div className="row mt-4">
              {pricing
                .filter((fl) => fl.id === 1)
                .map((item) => {
                  return (
                    <div className="col-md-12">
                      <div className="card card-shadow border-0 mb-4">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center">
                            <h5 className="font-weight-medium mb-0">
                              {item.title}
                            </h5>
                            <div className="ml-auto">
                              &nbsp;
                              <span className="badge badge-danger font-weight-normal p-2">
                                Popular
                              </span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-5 text-center">
                              <div className="price-box my-3">
                                <sup>$</sup>
                                <span className="text-dark display-5">
                                  {item.hourly_rate}
                                </span>
                                <h6 className="font-weight-light">HOURLY</h6>
                                <a
                                  className="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3"
                                  href="/product"
                                >
                                  CHOOSE PLAN{" "}
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-7 align-self-center">
                              <ul className="list-inline pl-3 font-14 font-weight-medium text-dark">
                                <li className="py-2">
                                  <i className="icon-check text-info mr-2"></i>{" "}
                                  <span>Memory: {item.memory.memory}</span>
                                </li>
                                <li className="py-2">
                                  <i className="icon-check text-info mr-2"></i>{" "}
                                  <span>vCPU: {item.vCPU.vCPU}</span>
                                </li>
                                <li className="py-2">
                                  <i className="icon-check text-info mr-2"></i>{" "}
                                  <span>Disk: {item.disk.disk}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {pricing
                .filter((fl) => fl.id !== 1)
                .map((item) => {
                  return (
                    <div className="col-md-6">
                      <div className="card card-shadow border-0 mb-4">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center">
                            <h5 className="font-medium m-b-0">{item.title}</h5>
                          </div>
                          <div className="row">
                            <div className="col-lg-5 text-center">
                              <div className="price-box my-3">
                                <sup>$</sup>
                                <span className="text-dark display-5">
                                  {item.hourly_rate}
                                </span>
                                <h6 className="font-weight-light">HOURLY</h6>
                                <a
                                  className="btn btn-info-gradiant border-0 font-14 text-white p-3 btn-block mt-3"
                                  href="/product"
                                >
                                  CHOOSE PLAN{" "}
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-7 align-self-center">
                              <ul className="list-inline pl-3 font-14 font-weight-medium text-dark">
                                <li className="py-2">
                                  <i className="icon-check text-info mr-2"></i>{" "}
                                  <span>Memory: {item.memory.memory}</span>
                                </li>
                                <li className="py-2">
                                  <i className="icon-check text-info mr-2"></i>{" "}
                                  <span>vCPU: {item.vCPU.vCPU}</span>
                                </li>
                                <li className="py-2">
                                  <i className="icon-check text-info mr-2"></i>{" "}
                                  <span>Disk: {item.disk.disk}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
