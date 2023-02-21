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
    <a
      href={`https://www.google.com/search?q=${name}&oq=${name}&aqs=chrome.0.0i271j46i433i512j0i67i433j0i67j0i67i433l2j0i67i433i457j69i60.944j0j9&sourceid=chrome&ie=UTF-8`}
    >
      {/* https://en.wikipedia.org/wiki/Husky */}
      {/* https://www.google.com/search?q=labrador&oq=labrador&aqs=chrome.0.0i271j46i433i512j0i67i433j0i67j0i67i433l2j0i67i433i457j69i60.944j0j9&sourceid=chrome&ie=UTF-8 */}
      <div className="p-10">
        <div className="max-w-xs rounded overflow-hidden shadow-lg hover:text-white hover:shadow-2xl duration-200 hover:bg-orange-500 text-orange-500">
          <img className="w-full max-h-52" src={image} alt="dog" />
          <div className="px-6 py-4">
            <div className="text-xl font-semibold text-center mb-2">{name}</div>
            <p className="text-base text-justify font-semibold">{quote}</p>
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
    </a>
  );
};

export default Dogcards;
