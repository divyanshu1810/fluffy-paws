import React, { FunctionComponent, useEffect, useState } from "react";
interface Dogtype {
  quote: string;
}
const Dogcards: FunctionComponent<Dogtype> = ({ quote }: Dogtype) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const upDateDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogjson = await response.json();
    // console.log(dogjson.message.substring(30));
    const i = dogjson.message.lastIndexOf("/");
    setImage(dogjson.message);
    setName(dogjson.message.substring(30, i).toUpperCase());
  };
  useEffect(() => {
    upDateDog();
  }, []);

  return (
    <div className="p-10">
      <div className="max-w-xs rounded overflow-hidden shadow-lg hover:text-white hover:shadow-2xl duration-200 hover:bg-orange-500 text-orange-500">
        <img className="w-full max-h-52" src={image} alt="dog" />
        <div className="px-6 py-4">
          <div className="text-xl font-semibold text-center mb-2">{name}</div>
          <p className="text-base text-justify font-semibold">
            The dog lives for the day, the hour, even the moment.
          </p>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Dogcards;
