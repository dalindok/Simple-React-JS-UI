import React from "react";

function Card() {
  return (
    <div className="w-1/3 bg-white absolute inset-y-10 right-20 pt-36">
      <div className="flex flex-col pl-20">
        <p className="text-4xl font-semibold">Get in</p>
        <p className="text-4xl font-bold">Touch</p>
        <div className="py-2">
          <p className="">123 Anywhere St.,Any City ST 12345</p>
          <p className="">hello@reallygreatsite.com</p>
        </div>
      </div>
      <div className="pl-20 pt-12 ">
        <button className="hover:bg-black hover:text-white border-solid border-2 border-black px-5 py-2 text-sm font-bold uppercase">
          Sent an Email
        </button>
      </div>
    </div>
  );
}

export default Card;
