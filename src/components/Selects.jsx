import React from "react";
import BoraBora from "../images/borabora.jpg";
import BoraBora2 from "../images/borabora2.jpg";
import Maldives from "../images/maldives.jpg";
import Maldives2 from "../images/maldives2.jpg";
import Maldives3 from "../images/maldives3.jpg";
import KeyWest from "../images/keywest.jpg";
import SelectCards from "./SelectCards";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCards bg={BoraBora} text="Bora Bora" />
      <SelectCards bg={BoraBora2} text="Maldives" />
      <SelectCards bg={Maldives} text="Antigua" />
      <SelectCards bg={Maldives2} text="Cozumel" />
      <SelectCards bg={Maldives3} text="Jamaica" />
      <SelectCards bg={KeyWest} text="Key West" />
    </div>
  );
};

export default Selects;
