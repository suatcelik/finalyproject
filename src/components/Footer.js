import React from "react";
import "./Footer.css";
import fb from "../assets/fb.png";
import twitter from "../assets/sm_5b32227ca3eb9.jpg";
import insta from "../assets/1104d6c372b3fd0f7550aee9238180d5.jpg";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col px-16 py-16">
        <div className="footer-links flex justify-between items-start flex-row flex-wrap w-full text-left mb-8">
          <div className=" w-36 m-4 flex justify-start flex-col">
            <h4>Company Info</h4>
            <a href="/aboutus">
              <p>About Us</p>
            </a>
            <a href="/carrier">
              <p>Carrier</p>
            </a>
            <a href="/wearehiring">
              <p>We are hiring</p>
            </a>
            <a href="/blog">
              <p>Blog</p>
            </a>
          </div>
          <div className="w-36 m-4 flex justify-start flex-col">
            <h4>Legal</h4>
            <a href="/aboutus">
              <p>About Us</p>
            </a>
            <a href="/carrier">
              <p>Carrier</p>
            </a>
            <a href="/wearehiring">
              <p>We are hiring</p>
            </a>
            <a href="/blog">
              <p>Blog</p>
            </a>
          </div>
          <div className="w-36 m-4 flex justify-start flex-col">
            <h4>Features</h4>
            <a href="/businessmarketing">
              <p>Business Marketing</p>
            </a>
            <a href="/useranalytic">
              <p>User Analytic</p>
            </a>
            <a href="/livechat">
              <p>Live Chat</p>
            </a>
            <a href="unlimitedsupport">
              <p>Unlimited Support</p>
            </a>
          </div>
          <div className="w-36 m-4 flex justify-start flex-col">
            <h4>Resources</h4>
            <a href="/ıosandroid">
              <p>IOS & Android</p>
            </a>
            <a href="/watchademo">
              <p>Watch a Demo</p>
            </a>
            <a href="/customers">
              <p>Customers</p>
            </a>
            <a href="/apı">
              <p>API</p>
            </a>
          </div>
          <div className="w-40 m-4 flex justify-start flex-col">
            <h4>Get In Touch</h4>
            <div className="flex flex-row">
              <p>
                <img className="w-4/5" src={fb} alt="" />
              </p>
              <p>
                <img className="w-4/5" src={twitter} alt="" />
              </p>
              <p>
                <img className="w-4/5" src={insta} alt="" />
              </p>
            </div>
          </div>
        </div>

        <hr className=""></hr>

        <div className="sb--footer-below">
          <div className="sb-footer-copyright">
            <p>@{new Date().getFullYear()} Bandage. All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
