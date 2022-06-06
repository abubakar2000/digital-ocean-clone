import React, { useState, useEffect } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import axios from "axios";
import { apiip } from "../../serverConfig";

const Footer = () => {
  const [solutions, setSolutions] = useState([]);
  const [products, setProducts] = useState([]);

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
  }, [axios]);

  return (
    <div
      className="footer container-fluied mt-5"
      style={{ backgroundColor: "#1969FF" }}
    >
      <div className="container">
        <div
          className="row text-white pt-5"
          style={{ justifyContent: "space-between" }}
        >
          <div className="col-md-2">
            <h4 className="mb-4">Company</h4>
            <ul
              className="p-0 "
              style={{ listStyle: "none", fontSize: "1.2rem" }}
            >
              <li className="mb-1 ">
                <a href="/about">About</a>
              </li>
              <li className="mb-1">
                <a href="/blog">Blog</a>
              </li>
              <li className="mb-1">
                <a href="/docs">Docs</a>
              </li>
              <li className="mb-1">
                <a href="/legal">Legal</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4 className="mb-4">Products</h4>
            <ul
              className="p-0"
              style={{ listStyle: "none", fontSize: "1.2rem" }}
            >
              {products.map((item) => {
                return (
                  <li className="mb-1">
                    <a href={"/product"}>{item.title}</a>
                  </li>
                );
              })}
              {products.map((item) => {
                return item.sub_products?.map((subItems) => {
                  return (
                    <li className="mb-1">
                      <a href={"/product"}>{subItems?.title}</a>
                    </li>
                  );
                });
              })}
            </ul>
          </div>
          <div className="col-md-2">
            <h4 className="mb-4">Community</h4>
            <ul
              className="p-0"
              style={{ listStyle: "none", fontSize: "1.2rem" }}
            >
              <li className="mb-1">
                <a href="/tutorials">Tutorials</a>
              </li>
              <li className="mb-1">
                <a href="/community/questions">Q&A</a>
              </li>
              <li className="mb-1">
                <a href="/community">CSS-Tricks</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4 className="mb-4">Solutions</h4>
            <ul
              className="p-0"
              style={{ listStyle: "none", fontSize: "1.2rem" }}
            >
              {solutions.map((item) => {
                return (
                  <li className="mb-1">
                    <a href={"/solution/detail/" + item.id}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-2">
            <h4 className="mb-4">Contact</h4>
            <ul
              className="p-0"
              style={{ listStyle: "none", fontSize: "1.2rem" }}
            >
              <li className="mb-1">
                <a href="/contactus">Support</a>
              </li>
              <li className="mb-1">
                <a href="/sales">Sales</a>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ color: "white" }} />
        <div className="row mt-4 pb-5">
          <div
            className="col-md-6 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <p className="m-0 text-white">
              © 2022 DigitalOcean, LLC. All rights reserved.
            </p>
          </div>
          <div
            className="col-md-6"
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <a
              href="/"
              className="p-2 ml-3 rounded"
              style={{ backgroundColor: "#3387FF" }}
            >
              <FaYoutube size={20} color={"white"} />
            </a>
            <a
              href="/"
              className="p-2 ml-3 rounded"
              style={{ backgroundColor: "#3387FF" }}
            >
              <FaLinkedinIn size={20} color={"white"} />
            </a>
            <a
              href="/"
              className="p-2 ml-3 rounded"
              style={{ backgroundColor: "#3387FF" }}
            >
              <FaGithub size={20} color={"white"} />
            </a>
            <a
              href="/"
              className="p-2 ml-3 rounded"
              style={{ backgroundColor: "#3387FF" }}
            >
              <FaTwitter size={20} color={"white"} />
            </a>
            <a
              href="/"
              className="p-2 ml-3 rounded"
              style={{ backgroundColor: "#3387FF" }}
            >
              <FaFacebookF size={20} color={"white"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
