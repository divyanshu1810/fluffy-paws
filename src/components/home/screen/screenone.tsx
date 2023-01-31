import React from "react";
import Button from "../../shared/button";
import "./screenone.css";
function Screenone() {
  return (
    <div className=" flex flex-col text-orange-400  items-center image h-screen pt-20">
      <div className=" font-semibold lg:text-6xl font-outline-2 text-4xl text-center pt-10">
        Fluffy Paws🐾🐶
      </div>
      <div className=" font-bold lg:text-6xl text-4xl mx-2 font-outline-2 text-orange-400 text-center pt-14 max-w-2xl">
        We'll care for your pets the same way you do for them.
      </div>
      <div className=" pt-20">
        <Button />
      </div>
    </div>
  );
}

export default Screenone;
