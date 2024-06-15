import React from "react";
import Image from "../../assets/Image.png";
function Background() {
  return (
    <div className="w-full h-full">
      <img src={Image} alt="Background" className="w-screen h-screen" />
    </div>
  );
}

export default Background;
