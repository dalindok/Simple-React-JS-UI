import React from "react";
import Text from "../components/page1/Text";
import Photo from "../components/page1/Photo";
function Page1() {
  return (
    <div className="flex flex-row justify-between">
       <div className="mt-8 py-12">
        <Text />
        </div>
        <Photo />
    </div>
  );
}

export default Page1;

