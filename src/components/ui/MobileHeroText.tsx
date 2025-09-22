import React from "react";
import TextBuilder from "../shared/TextBuilder";
import TextBuilderMobile from "../shared/TextBuilderMobile";

const MobileHeroText = () => {
  return (
    <div className="flex flex-col pt-6 md:pt-10 pb-10">
      <TextBuilderMobile
        // instead of fixed "36px", make it viewport-based
        fontSize="32px"
        className="leading-[1.2]"
        weight="medium"
        color="dark"
      >
        We create innovative,
        <br />
        sustainable, and
      </TextBuilderMobile>

      <TextBuilderMobile
        className="leading-[1.1]"
        // bigger headline that scales with viewport
        fontSize="38px"
        weight="bold"
        color="primary"
      >
        Customizable
        <br /> Cabins
      </TextBuilderMobile>
    </div>
  );
};

export default MobileHeroText;
