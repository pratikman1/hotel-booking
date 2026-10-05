import React from "react";

const Title = ({ title, subTitle, align, font }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:text-left md:items-start"}`}>
      <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair" }`}>{title}</h1>
      <p className="text-sm ">{subTitle}</p>
    </div>
  );
};

export default Title;
