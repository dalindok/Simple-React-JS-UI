import React from "react";
import Text from "../components/page1/Text";
import Photo from "../components/page1/Photo";

function Page1() {
  return (
    <div className="flex flex-col items-start justify-between h-screen sm:flex-row">
      <div className="flex items-center justify-center  sm:mt-0 sm:pl-28">
        <Text />
      </div>
      <div className="flex items-center justify-center p-4 sm:mt-0 sm:p-0">
        <Photo />
      </div>
    </div>
  );
}

export default Page1;
