import { FaBook } from "react-icons/fa6";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex flex-col gap-y-8">
        <div className="flex gap-x-5 mt-[100px] cursor-pointer">
          <FaBook size={20} color="gray" />
          <FaGithub size={20} color="gray" />
          <FaTwitter size={20} color="gray" />
          <FaMedium size={20} color="gray" />
          <FaDiscord size={20} color="gray" />
        </div>
        <div className="text-center text-slate-400 hover:underline">
          <a className="cursor-pointer">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
