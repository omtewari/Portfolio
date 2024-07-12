import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaGithub} from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 mt-0">
        <div className="flex flex-shrink-0 items-center h-20 w-20 mt-0">
            <img src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/om-tewari-1b0b78201/ " target="blank"><FaLinkedin/></a>
            <a href="https://x.com/OTewari1006" target="blank"><FaSquareXTwitter/></a>
            <a href="https://github.com/omtewari" target="blank"><FaGithub/></a>
        </div>
    </nav>
  )
}

export default Navbar
