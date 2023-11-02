import React from 'react'
import myImage from "./homeimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="bg-fuchsia-500 h-screen">
      <div className="h-screen flex flex-col items-center pt-24 ">
        <div>
          <FontAwesomeIcon icon={faMicrophone} size="lg" />
        </div>
        <p className="font-bold text-lg pt-12">
          Hello I am Speechify <br />
          How can I Help you?
        </p>
        <img
          src={myImage}
          alt="My Image"
          className="transform scale-50 pt--12"
        />
        <Link
          to="/username"
          className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer "
        >
          Next
        </Link>
      </div>
    </div>
  );
}
