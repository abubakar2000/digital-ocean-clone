import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
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
                <a href="/">About</a>
              </li>
              <li className="mb-1">
                <a href="/">Leadership</a>
              </li>
              <li className="mb-1">
                <a href="/blog">Blog</a>
              </li>
              <li className="mb-1">
                <a href="/">Careers</a>
              </li>
              <li className="mb-1">
                <a href="/">Customers</a>
              </li>
              <li className="mb-1">
                <a href="/">Partners</a>
              </li>
              <li className="mb-1">
                <a href="/">Referral Program</a>
              </li>
              <li className="mb-1">
                <a href="/">Press</a>
              </li>
              <li className="mb-1">
                <a href="/">Legal</a>
              </li>
              <li className="mb-1">
                <a href="/">Trust Platform</a>
              </li>
              <li className="mb-1">
                <a href="/">Investor Relations</a>
              </li>
              <li className="mb-1">
                <a href="/">DO Impact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4 className="mb-4">Products</h4>
            <ul
              className="p-0"
              style={{ listStyle: "none", fontSize: "1.2rem" }}
            >
              <li className="mb-1">
                <a href="/product">About Products Overview</a>
              </li>
              <li className="mb-1">
                <a href="/product">Droplets</a>
              </li>
              <li className="mb-1">
                <a href="/product">Kubernetes</a>
              </li>
              <li className="mb-1">
                <a href="/product">Managed Databases</a>
              </li>
              <li className="mb-1">
                <a href="/product">Spaces</a>
              </li>
              <li className="mb-1">
                <a href="/product">Marketplace</a>
              </li>
              <li className="mb-1">
                <a href="/product">Load Balancers</a>
              </li>
              <li className="mb-1">
                <a href="/product">Block Storage</a>
              </li>
              <li className="mb-1">
                <a href="/product">Tools & Integrations</a>
              </li>
              <li className="mb-1">
                <a href="/product">API</a>
              </li>
              <li className="mb-1">
                <a href="/product">Pricing</a>
              </li>
              <li className="mb-1">
                <a href="/product">Documentation</a>
              </li>
              <li className="mb-1">
                <a href="/product">Release Notes</a>
              </li>
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
                <a href="/community">Meetups</a>
              </li>
              <li className="mb-1">
                <a href="/community">Q&A</a>
              </li>
              <li className="mb-1">
                <a href="/community">CSS-Tricks</a>
              </li>
              <li className="mb-1">
                <a href="/community">Write for DOnations</a>
              </li>
              <li className="mb-1">
                <a href="/community">Droplets for Demos</a>
              </li>
              <li className="mb-1">
                <a href="/community">Hatch Startup Program</a>
              </li>
              <li className="mb-1">
                <a href="/community">Shop Swag</a>
              </li>
              <li className="mb-1">
                <a href="/community">Research Program</a>
              </li>
              <li className="mb-1">
                <a href="/community">Currents Research</a>
              </li>
              <li className="mb-1">
                <a href="/community">Open Source</a>
              </li>
              <li className="mb-1">
                <a href="/community">Code of Conduct</a>
              </li>
              <li className="mb-1">
                <a href="/community">Newsletter Signup</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4 className="mb-4">Solutions</h4>
            <ul
              className="p-0"
              style={{ listStyle: "none", fontSize: "1.2rem" }}
            >
              <li className="mb-1">
                <a href="/solutions">Web & Mobile Apps</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">Website Hosting</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">Game Development</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">Streaming</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">VPN</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">Startups</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">SaaS Solutions</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">Agency & Web Dev Shops</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">Managed Cloud Hosting Providers</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">Big Data</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">Business Solutions</a>
              </li>
              <li className="mb-1">
                <a href="/solutions">Cloud Hosting for Blockchain</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4 className="mb-4">Contact</h4>
            <ul
              className="p-0"
              style={{ listStyle: "none", fontSize: "1.2rem" }}
            >
              <li className="mb-1">
                <a href="/">Support</a>
              </li>
              <li className="mb-1">
                <a href="/">Sales</a>
              </li>
              <li className="mb-1">
                <a href="/">Report Abuse</a>
              </li>
              <li className="mb-1">
                <a href="/">System Status</a>
              </li>
              <li className="mb-1">
                <a href="/">Share your ideas</a>
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
