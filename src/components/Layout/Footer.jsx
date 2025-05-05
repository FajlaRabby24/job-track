import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaCopyright,
  FaFacebook,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer sm:footer-horizontal justify-around  text-white pt-28 pb-20  px-10">
        <aside>
          <Link to={"/"} className="flex items-center ">
            <span className="logo">
              <HiChartBar size={50} color="white" />
            </span>
            <span className="text-3xl font-bold text-white">Jobby</span>
          </Link>
          <p className="text-accent font-semibold">hello@jobby.com</p>
          <p className="text-accent font-semibold">+8801344444444</p>
          <div className="flex gap-3 items-center mt-2">
            <FaFacebookF
              size={40}
              className="p-2  bg-gradient-to-br from-primary to-secondary border-0 rounded-full btn-xl text-white"
            />
            <IoLogoGithub
              size={40}
              className="p-2  bg-gradient-to-br from-primary to-secondary border-0 rounded-full btn-xl text-white"
            />
            <FaLinkedin
              size={40}
              className="p-2  bg-gradient-to-br from-primary to-secondary border-0 rounded-full btn-xl text-white"
            />
            <BsTwitterX
              size={40}
              className="p-2  bg-gradient-to-br from-primary to-secondary border-0 rounded-full btn-xl text-white"
            />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Products</h6>
          <a className="link link-hover">Fetures</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Get app</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Member</a>
          <a className="link link-hover">Employes</a>
          <a className="link link-hover">Career</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of condition</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Terms of services</a>
        </nav>
      </div>
      <p className="text-accent font-semibold text-center  py-3">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved
        @jobby.io
      </p>
    </footer>
  );
};

export default Footer;
