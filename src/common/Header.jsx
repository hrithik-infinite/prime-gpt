import React, { useState } from "react";
import useAuthChecker from "../hooks/useAuthChecker";
import { useSelector } from "react-redux";
import { AlignJustify, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { dropdownValues } from "../utils/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import user_avatar from "../assets/image.png";
import user_avatar_2 from "../assets/image2.png";
const Header = () => {
  const userDetails = useSelector((store) => store.user);
  const [hideNav, setHideNav] = useState(true);
  useAuthChecker();
  return (
    <nav className="bg-slate-950 py-2 sticky  w-full mx-auto z-50">
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
        <ul className={`flex text-gray-400 text-lg font-semibold gap-8 ps-5 md:ps-20 flex-col md:flex-row w-full md:w-fit ${hideNav ? " hidden " : " visible "} md:flex`}>
          <li>
            <Link to="/search">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="pt-6 md:pt-0">
                      <Search />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="hover:bg-sky-400 hover:text-white">
                    <p className="text-lg">GPT Search</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>
          <li>{userDetails ? <Dropdown name="My Stuff" values={dropdownValues.MyStuff} /> : "Try for free"}</li>
          <li>
            {userDetails ? (
              <div className="flex w-72 justify-between md:w-fit">
                <span className="text-gray-400 text-lg font-semibold pr-4">{userDetails?.displayName}</span>
                <div className="flex">
                  <img src={user_avatar} alt="user-icn" width={35} />
                  <Dropdown values={dropdownValues.userProfile} />
                </div>
              </div>
            ) : (
              <img src={user_avatar_2} alt="user-icn" width={35} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
