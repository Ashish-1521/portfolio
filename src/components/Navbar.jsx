import logo from "../assets/logo.png";
// import testLogo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 item-center">
                <img className="mx-0" width={70} height={70} src={logo} alt="" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ashish-thatipelli-211b5b1b3/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Ashish-1521" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://x.com/thatipellia?s=21" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                </a>
                <a href="https://www.instagram.com/ashish_thatipelli?igsh=MWxpOWRieGwxOHNsZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;