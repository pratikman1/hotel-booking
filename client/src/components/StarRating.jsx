import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 4}) => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => (
            <img src={rating > index  ? assets.starIconFilled : assets.starIconOutlined} alt="" className="w-6 h-6" />
))}
    </>
  );
};

export default StarRating;
