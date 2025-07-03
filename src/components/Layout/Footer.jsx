import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer sm:footer-horizontal lg:justify-around  text-white pt-28 pb-12 px-4 lg:px-10">
        <aside>
          <Link to={"/"} className="flex items-center ">
            <img src="./logo.png" className="w-1/4 " alt="" />
            <span className="text-2xl lg:text-3xl font-bold text-white">
              JobTrack
            </span>
          </Link>
          <p className="text-accent font-semibold">hello@jobtrack.com</p>
          <p className="text-accent font-semibold">+8801344444444</p>
          <div className="flex gap-3 items-center mt-2">
            <a target="_blank" href="https://github.com/FajlaRabby24">
              <IoLogoGithub
                size={40}
                className="p-2  bg-gradient-to-br from-primary to-secondary border-0 rounded-full btn-xl text-white"
              />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/fajla">
              <FaLinkedin
                size={40}
                className="p-2  bg-gradient-to-br from-primary to-secondary border-0 rounded-full btn-xl text-white"
              />
            </a>
            <a target="_blank" href="https://x.com/FajlaRabby24">
              <BsTwitterX
                size={40}
                className="p-2  bg-gradient-to-br from-primary to-secondary border-0 rounded-full btn-xl text-white"
              />
            </a>
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
      <p className="text-accent md:font-semibold text-center  py-2">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved
        @jobTrack.io
      </p>
    </footer>
  );
};

export default Footer;
