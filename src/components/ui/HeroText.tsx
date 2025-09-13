import React from "react";
import TextBuilder from "../shared/TextBuilder";

const HeroText = () => {
  return (
    <div className="flex flex-col ">
      <TextBuilder fontSize="36px" className="leading-[1.2]" weight="medium" color="dark">
        We create innovative,
        <br />
        sustainable, and
      </TextBuilder>
      <TextBuilder className="leading-[1.1]" fontSize="80px" weight="bold" color="primary">
        Customizable
        <br /> Cabins
      </TextBuilder>
    </div>
  );
};

export default HeroText;
