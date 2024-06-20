import React from "react";
import First from "../../assets/First.png";
import Second from "../../assets/Second.png";
import Third from "../../assets/Third.png";
function Photos() {
  return (
    <div className="flex flex-row h-screen p-5">
      <div className="">
        <div className="w-72 h-2/5 relative">
          <p className="absolute top-5 left-5 font-bold text-lg">04</p>
          <img
            src={First}
            alt="04"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="w-72 h-3/5 relative mt-5">
          <p className="absolute top-5 left-5 font-bold text-lg">05</p>
          <img
            src={Second}
            alt="05"
            style={{ width: "100%", height: "94%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="flex ml-6 relative">
        <p className="absolute top-5 left-5 font-bold text-lg">06</p>
        <img src={Third} alt="06" className="" />
      </div>
    </div>
  );
}

export default Photos;
