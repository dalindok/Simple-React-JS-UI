import React from "react";
import { FaStarOfLife } from "react-icons/fa6";
function Text() {
  return (
    <div className="pt-48 pl-20">
      <div className="flex flex-col pl-12">
        <p className="text-4xl font-normal">Artist</p>
        <p className="text-4xl font-bold">Biography</p>
        <div className="pt-8">
          <p className="text-base w-80  equal-lines">
            I use my camera to tell stories. I have been doing this
            professionally for ten years and I have no plans of stopping.
          </p>
        </div>
        <div className="pt-7">
          <p className="text-base w-80 equal-lines">
            I have worked with global brands like Anissa & Tam Co., Mintmade
            Fashion, and Tully and Drive.
          </p>
        </div>
      </div>
      <FaStarOfLife className="text-amber-600 text-4xl mt-20" />
    </div>
  );
}

export default Text;
