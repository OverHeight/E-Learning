import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const BackButton = ({ where }) => {
  return (
    <Link to={where}>
      <div className="container w-10 h-10 rounded-full border-2 border-neutral-500 m-3 p-2.5">
        <BiArrowBack className="text-lg font-semibold" />
      </div>
    </Link>
  );
};

export default BackButton;
