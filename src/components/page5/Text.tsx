import React from "react";
import { FaStarOfLife } from "react-icons/fa6";
function text() {
  return (
    <div className="pt-72 pl-20">
      <div className="">
        <p className="text-3xl font-semibold">Featured</p>
        <p className="text-3xl font-bold">Work</p>
        <p className="text-lg ">04 Randelo Co.,2020</p>
        <p className="text-lg ">05 Stipple Unlimited,2022</p>
        <p className="text-lg">06 Beal and Harlow,2023</p>
      </div>
      <FaStarOfLife className="text-amber-700 text-4xl mt-20" />
    </div>
  );
}

export default text;
