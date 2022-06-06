import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiip } from "../serverConfig";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Accordion } from "react-bootstrap";

import bg from "../img/bg.jpg";
import droplet_basics from "../img/droplet_basics.svg";
import green_checkmark from "../img/green_checkmark.svg";
import droplet_premium from "../img/droplet_premium.svg";

export default function ProductPage() {
  const [blogs, setBlogs] = useState([]);
  const [products, setProducts] = useState([]);
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    getBlogs();
    getPricing();
    getProducts();
  }, []);

  const getBlogs = () => {
    axios
      .get(`${apiip}/blog/api/blog/`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Res -> ", res.data);
          setBlogs(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProducts = () => {
    axios
      .get(`${apiip}/products/api/products/`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Res -> ", res.data);
          setProducts(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  //OffCanvas
  const [SpecificProduct, setSpecificProduct] = useState([]);
  const [SpecificProductTitle, setSpecificProductTitle] = useState("");
  const [SpecificProductDocs, setSpecificProductDocs] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getSpecificProduct = (id) => {
    axios
      .get(`${apiip}/products/api/product-by-id/?id=${id}`)
      .then((res) => {
        console.log("SPECIFIC PRODUCT --->  ", res.data.data);
        if (res.status === 200) {
          OFFCanvas();
          setSpecificProduct(res.data.data.page_info);
          setSpecificProductTitle(res.data.data.title);
          // console.log(res.data.data.page_info.docs.map((item) => item.title));
          setSpecificProductDocs(res.data.data?.page_info?.docs);
        }
      })
      .then(() => handleShow())
      .catch((err) => {
        console.log(err);
      });
  };

  const OFFCanvas = () => {
    return (
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{SpecificProductTitle}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>{SpecificProduct?.title}</h3>

          {SpecificProduct?.description}

          {SpecificProductDocs?.map((item) => (
            <div className="card rounded col-sm-12 mb-3 mt-3">
              <div className="card-body">
                <h3>{item.title}</h3>

                {item.steps.map((it) => (
                  <Accordion
                    defaultActiveKey="0"
                    style={{ marginBottom: "10pt" }}
                  >
                    <Accordion.Item eventKey={it.id}>
                      <Accordion.Header>{it.title}</Accordion.Header>
                      <Accordion.Body>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: it.HTML,
                          }}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
              </div>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    );
  };

  return (
    <div className="container-fluid" style={{ marginTop: "60pt" }}>
      {/*Header*/}
      <div
        className="row front-bg text-light"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="col-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>
        <div
          className="col-10 text-center py-5"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <h1 style={{ fontSize: "80px", color: "white", fontWeight: "bold" }}>
            Simple, affordable virtual machines
          </h1>
        </div>
        <div
          className="col-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>
        <div
          className="col-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>
        <div
          className="col-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <p>
            Get dependable uptime with our 99.99% SLA, simple security tools,
            and predictable monthly pricing with DigitalOcean's virtual
            machines, called Droplets.
          </p>
        </div>
        <div
          className="col-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>
        <div
          className="col-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>

        <div
          className="col-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>
        <div
          className="col-12 py-5"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>
      </div>
      {/*Header ends*/}

      {/*Featured blogs & Product Pricing*/}
      <div className="pricing6">
        <div className="container-fluid">
          <div className="row mt-4 text-center" style={{ margin: "0 auto" }}>
            <h1 className="my-5" style={{ fontSize: "48px" }}>
              Comprehensive, cost-effective cloud computing
            </h1>
            {blogs
              .filter((fe) => fe.featured === true)
              .map((item) => (
                <div className="col-md-4" style={{ fontSize: "11px" }}>
                  <div className="card card-shadow border-0 mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://picsum.photos/200"
                          style={{ width: "100%", height: "200px" }}
                          alt=""
                        />
                      </div>
                      <div className="row my-5">
                        <div className="col-lg-12 align-self-center">
                          <h4>{item.title}</h4>
                          <p>{item.description.slice(0, 220)} ...</p>
                        </div>
                      </div>

                      {/* <div className="col-4">
                        <Link
                          to={"/postdetails/" + item.id}
                          className="text-decoration-none bold"
                        >
                          Read More {">>"}
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="row my-4 text-center">
            <h1 className="my-5 " style={{ fontSize: "48px" }}>
              Our Products
            </h1>

            <div className="col-md-11" style={{ margin: "0 auto" }}>
              {products.map((item) => (
                <div className="row">
                  <div className="col-md-12" style={{ textAlign: "left" }}>
                    <div>
                      <h1>{item.title}</h1>
                      <h6 className="mt-2">{item.description}</h6>
                      <div className="row mt-4">
                        {item.sub_products.map((it) => (
                          <div className="col-md-3">
                            <div
                              className="card"
                              style={{ cursor: "pointer" }}
                              variant="primary"
                              onClick={() => getSpecificProduct(it.id)}
                            >
                              <div className="card-body">
                                <h3>{it.title}</h3>
                                <h6>{it.description}</h6>
                              </div>
                            </div>
                          </div>
                        ))}

                        <OFFCanvas />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row my-4 text-center">
            <h1 className="my-5 " style={{ fontSize: "48px" }}>
              Simple enough for any user, powerful enough for fast-growing
              businesses
            </h1>
            <div
              className="col-md-11 p-5"
              style={{
                fontSize: "11px",
                margin: "0 auto",
                backgroundColor: "rgb(239, 242, 251)",
                borderRadius: "30px",
              }}
            >
              <div className="row">
                {pricing.map((item) => (
                  <div
                    className="col-md-3"
                    style={{ fontSize: "11px", border: "50px" }}
                  >
                    <div
                      className="card card-shadow border-0"
                      style={{ borderRadius: "30px" }}
                    >
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-12" style={{ textAlign: "left" }}>
                            <img src={droplet_basics} alt="" />
                          </div>
                          <div
                            className="col-12 pt-3"
                            style={{ textAlign: "left" }}
                          >
                            <h3>{item.title}</h3>
                            <h6>Hourly Rate: </h6>
                            <div className="d-flex my-3">
                              <h1>${item.hourly_rate}</h1>
                              <div style={{ marginTop: "15pt" }}>
                                <h4>/ mo</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ textAlign: "left", fontSize: "14px" }}
                        >
                          <p className="mb-2">
                            <img src={green_checkmark} alt="" />
                            Memory: &nbsp;&nbsp;{item.memory.memory}
                          </p>
                          <p className="mb-2">
                            <img src={green_checkmark} alt="" />
                            vCPU: &nbsp;&nbsp;{item.vCPU.vCPU}
                          </p>
                          <p className="mb-2">
                            <img src={green_checkmark} alt="" />
                            Disk: &nbsp;&nbsp;{item.disk.disk}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Premium Pricing*/}
                {/* <div
                  className="col-md-6"
                  style={{ fontSize: "11px", border: "50px" }}
                >
                  <div
                    className="card card-shadow border-0 mb-4 bg-primary text-light"
                    style={{ borderRadius: "30px" }}
                  >
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="col-2">
                          <img src={droplet_premium} alt="" />
                        </div>
                        <div className="col-6">
                          <h4 className="text-light">Premium</h4>
                          <p>For simple applications</p>
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ textAlign: "left", fontSize: "18px" }}
                      >
                        <p>
                          Upgrade to Premium Droplets for faster performing
                          Intel, AMD processors, & NVMe SSDs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Featured blogs & Product Pricing ends*/}
    </div>
  );
}
