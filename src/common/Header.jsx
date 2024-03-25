import React, { useState } from "react";
import useAuthChecker from "../hooks/useAuthChecker";
import { useSelector } from "react-redux";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { dropdownValues } from "../utils/constants";

const Header = () => {
  const userDetails = useSelector((store) => store.user);
  const [hideNav, setHideNav] = useState(true);
  useAuthChecker();
  return (
    <nav className="bg-slate-950 py-2 sticky top-3 w-[85%] mx-auto rounded-lg z-50">
      <div className="flex justify-center pe-32 flex-col md:flex-row">
        <div className="w-full mx-[10%] mb-4 md:mx-0 md:my-1 md:w-40 flex">
          <AlignJustify color="#fff" width={50} className="md:hidden mr-3 cursor-pointer" onClick={() => setHideNav(!hideNav)} />
          <Link to={userDetails ? "/browse" : "/"} className="md:pr-8">
            <img src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png" alt="Prime Video" />
          </Link>
        </div>
        <ul className={`flex text-gray-400 text-lg font-semibold gap-8 ps-5 flex-col md:flex-row  ${hideNav ? " hidden " : " visible "} md:flex`}>
          <li>
            <Dropdown name="Home" values={dropdownValues.Home} />
          </li>
          <li>
            <Dropdown name="Store" values={dropdownValues.Store} />
          </li>
          <li>LiveTV</li>
          <li>Categories</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
