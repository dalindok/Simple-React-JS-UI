import React from 'react';
import { FaStarOfLife } from "react-icons/fa6";

function Text() {
    return (
        <div className='pt-4 pl-6 flex flex-col sm:pt-16 sm:pl-0 sm:flex-col'>
            <div>
                <p className="text-8xl font-medium">JASMINE</p>
                <p className="text-8xl font-medium">PEDRAZA</p>
                <div className="mt-10">
                    <div className=" sm:flex-row flex flex-col items-start ">
                        <FaStarOfLife className="text-amber-700 text-4xl mr-4 " />
                        <p className="text-3xl pt-20 sm:pt-0">Fashion Photography</p>
                    </div>
                    <div className='flex'>
                        <div className="w-0 sm:w-12" /> {/* Adjust width to match icon width */}
                        <p className="text-3xl text-start font-bold sm:pl-1">Portfolio</p>
                    </div>
                </div>
                <div className=" pt-16 pl-36 sm:pl-6 sm:pt-12 items-center">
                    <button className="hover:bg-black hover:text-white border-solid border-2 border-black px-12 py-3 text-sm font-extrabold uppercase sm:flex-col sm:mt-10 sm:items-center">
                        GET IN TOUCH
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Text;