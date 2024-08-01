import React from "react";

const CommonHeroSection = ({ title }) => {
  return (
    <div className="py-10 -mt-[96px] pt-32 md:pt-60 pb-16 md:pb-40 bg-dark-mirage  w-full">
      <div className="container-main w-full md:flex">
        <span className="text-4xl md:text-[54px] md:leading-[70px] font-bold text-white text-center w-full">
          {title}
        </span>
      </div>
    </div>
  );
};

export default CommonHeroSection;
