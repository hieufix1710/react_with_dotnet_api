import React from "react";
import {
  faPaperPlane,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ADD_ARTICLE_PATH } from "../../Constants/UriPath";

const Header = () => {
  return (
    <div className="sticky flex flex-row items-center justify-between px-2 top-0 left-0 bg-white z-10 h-14">
      <div className="max-w-full ">
        <img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          alt=""
          className="h-8"
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <Link to={ADD_ARTICLE_PATH}>
          <FontAwesomeIcon
            icon={faSquarePlus}
            fontSize={22}
            className="p-2 mr-2 cursor-pointer"
          />
        </Link>
        <FontAwesomeIcon
          icon={faPaperPlane}
          fontSize={21}
          className="p-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
