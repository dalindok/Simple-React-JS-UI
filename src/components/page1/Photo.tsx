import React from "react";
import First_Page1 from "../../assets/First_Page1.png";
function Photo() {
  return (
    <div className=" flex h-screen p-5">
      <div className=" flex ml-6 ">
        <img src={First_Page1} alt="first" />
      </div>
    </div>
  );
}

export default Photo;
