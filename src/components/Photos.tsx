import React from "react";
import First from "../assets/First.png";
import Second from "../assets/Second.png";
import Third from "../assets/Third.png";
function Photos() {
  return (
    <div className="flex ">
      <div className="flex justify-col">
        <div>
          <img src={First} alt="04" />
        </div>
        <div>
          <img src={Second} alt="05" />
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-16">
        <img src={Third} alt="06" />
      </div>
    </div>
  );
}

export default Photos;
