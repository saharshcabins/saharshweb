import React from "react";
import TextBuilder from "../shared/TextBuilder";

const HeroText = () => {
  return (
    <div className="flex flex-col pt-6 md:pt-10">
      <TextBuilder
        // instead of fixed "36px", make it viewport-based
        fontSize="3vw"
        className="leading-[1.2]"
        weight="medium"
        color="dark"
      >
        We create innovative,
        <br />
        sustainable, and
      </TextBuilder>

      <TextBuilder
        className="leading-[1.1]"
        // bigger headline that scales with viewport
        fontSize="6vw"
        weight="bold"
        color="primary"
      >
        Customizable
        <br /> Cabins
      </TextBuilder>
    </div>
  );
};

export default HeroText;
