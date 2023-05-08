import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMugHot } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <div className="navbar mx-auto bg-orange-900">
        <div className="mx-auto text-center">
          <h1
            className="text-white text-center mx-auto text-xl"
            style={{ fontFamily: "cursive" }}
          >
            <FontAwesomeIcon icon={faMugHot} className="me-2 " size="2x" />
            Cafe Royal
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
