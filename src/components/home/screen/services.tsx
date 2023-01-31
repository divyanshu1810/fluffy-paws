import React from "react";
import Servicescards from "../../shared/servicescards";

function Services() {
  return (
    <div className=" pt-10 pb-20">
      <div className=" text-center text-5xl text-orange-500 font-semibold pb-20">
        Our Services
      </div>
      <div className=" flex justify-evenly flex-wrap">
        <Servicescards
          name="VETERINARY"
          image="/services/appoinments.jpg"
          details="Easy appoinments available at best price."
        />
        <Servicescards
          image="/services/shop.jpg"
          name="PET FOOD"
          details="Wide range of pet products available."
        />
        <Servicescards
          image="/services/grooming.jpg"
          name="PET GROOMING"
          details="We guarantee one full day of pet grooming."
        />
      </div>
    </div>
  );
}

export default Services;
