import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const Buttonprops = [
    "All",
    "Gaming",
    "Music",
    "Roast",
    "Web Series",
    "Makeup",
    "Skincare",
    "Kids Shows",
    "Vlogs",
    "Paintings",
    "Gym",
    "Dance",
    "Hair",
    "Shows",
    "Gym",
    "Dance",
    "Hair",
    "Shows",
  ];
  return (
    <div className=" h-12  flex overflow-x-auto whitespace-nowrap hide-scrollbar mb-3 ">
      {Buttonprops.map((name, index) => (
        <Button key={`${name}-${index}`} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
