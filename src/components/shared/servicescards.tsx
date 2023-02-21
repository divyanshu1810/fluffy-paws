import React from "react";
import { Link } from "react-router-dom";
interface Cardstype {
  name: string;
  details: string;
  image: string;
  link: string;
}
function Servicescards({ name, details, image, link }: Cardstype) {
  return (
    <Link to={link}>
      <div className="flex justify-center pb-10">
        <div className="rounded-lg text-orange-500 hover:text-white shadow-lg bg-white max-w-xs hover:shadow-2xl duration-200 hover:bg-orange-500 cursor-pointer ">
          <a href="#!">
            <img className="rounded-t-lg" src={image} alt="" />
          </a>
          <div className="p-6 ">
            <h5 className="text-xl font-medium mb-2 text-center">{name}</h5>
            <p className="text-base mb-4 text-center ">{details}</p>
            {/* <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Servicescards;
