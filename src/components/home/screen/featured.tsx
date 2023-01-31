import React from "react";
import Servicescards from "../../shared/servicescards";

function Featured() {
  return (
    <div className=" pt-10 pb-20">
      <div className=" text-center text-5xl text-orange-500 font-semibold pb-20">
        Featured Clients
      </div>
      <div className=" flex justify-evenly flex-wrap">
        <Servicescards
          image="/dogs/dog1.jpg"
          name="ARTHUR"
          details="Your friendly neighbourhood labrador."
        />
        <Servicescards
          image="/dogs/dog2.jpg"
          name="COOPER"
          details="A bone a day keeps me cuter than all those dogs away."
        />
        <Servicescards
          image="/dogs/dog3.jpg"
          name="PEGGY"
          details="You would love to fall in love with my eyes."
        />
      </div>
    </div>
  );
}

export default Featured;
