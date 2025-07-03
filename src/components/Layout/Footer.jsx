import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#0d0c29]">
      <div className="footer sm:footer-horizontal lg:justify-around   text-white pt-28 pb-12 px-4 lg:px-10">
        <aside className="flex flex-col items-center">
          <Link to={"/"} className="flex items-center ">
            <img src="./logo.png" className="w-1/4 " alt="" />
            <span className="text-2xl lg:text-3xl font-bold text-white">
              JobTrack
            </span>
          </Link>
          <p className="text-accent font-semibold text-center">
            fajlarabby.dev@gmail.com
          </p>
          <p className="text-accent  font-semibold text-center">
            +8801307495864
          </p>
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
      </div>
      <p className="text-accent md:font-semibold text-center  py-2">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
