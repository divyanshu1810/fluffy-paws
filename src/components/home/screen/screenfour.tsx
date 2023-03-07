import React from "react";

function Screenfour() {
  return (
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="">
        <img src="\screens\s4.jpg" width={900} alt="" />
      </div>
      <div className=" text-center text-3xl lg:pt-40 py-10 lg:space-y-10 space-y-5 font-semibold text-white bg-[#e95546]">
        <div>Owner : Shawn Wilson</div>
        <div className=" text-3xl max-w-4xl px-10">
          Our pets lives revolve around us. Let's give back to them as much as
          they give us.
        </div>
      </div>
    </div>
  );
}

export default Screenfour;
