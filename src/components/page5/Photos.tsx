import React from "react";
import First from "../../assets/First.png";
import Second from "../../assets/Second.png";
import Third from "../../assets/Third.png";
function Photos() {
  return (
    <div className="flex flex-row h-screen ">
      <div className="flex flex-col h-full justify-between">
        <div className="w-72 relative ">
          <p className="absolute top-5 left-5 font-bold text-lg">04</p>
          <img src={First} alt="04" className="" />
        </div>
        <div className="w-72 relative">
          <p className="absolute top-5 left-5 font-bold text-lg">05</p>
          <img src={Second} alt="05" className="" />
        </div>
      </div>
      <div className="flex w-full h-full ml-6 relative">
        <p className="absolute top-5 left-5 font-bold text-lg">06</p>
        <img src={Third} alt="06" className="" />
      </div>
    </div>
  );
}

export default Photos;
