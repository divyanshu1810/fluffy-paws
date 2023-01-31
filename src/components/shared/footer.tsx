import React from "react";

function Footer() {
  return (
    <div className=" bg-orange-400 py-8 text-white flex justify-evenly items-center space-y-4 md:space-y-0 flex-col md:flex-row">
      <div>
        <div className=" font-semibold text-2xl">ADDRESS</div>
        <div className=" font-semibold text-xl">Kattankulathur Chennai</div>
      </div>
      <div>
        <div className=" font-semibold text-2xl">EMAIL ADDRESS</div>
        <div className=" font-semibold text-xl">fluffypaws@gmail.com</div>
      </div>
      <div>
        <div className=" font-semibold text-2xl">CONTACT NUMBER</div>
        <div className=" font-semibold text-xl">9876543210</div>
      </div>
    </div>
  );
}

export default Footer;
