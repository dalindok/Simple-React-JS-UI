import React from 'react';
import { FaStarOfLife } from "react-icons/fa6";

function Text() {
    return (
        <div className='pt-92 pl-72'>
            <div>
                <p className="text-8xl font-medium">JASMINE</p>
                <p className="text-8xl font-medium">PEDRAZA</p>
                <div className="mt-10">
                    <div className="flex items-center">
                        <FaStarOfLife className="text-amber-700 text-4xl mr-4" />
                        <p className="text-3xl">Fashion Photography</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-12" /> {/* Adjust width to match icon width */}
                        <p className="text-3xl font-bold">Portfolio</p>
                    </div>
                </div>
                <div className="pt-12 ">
                    <button className="hover:bg-black hover:text-white border-solid border-2 border-black px-12 py-3 text-sm font-extrabold uppercase">
                        GET IN TOUCH
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Text;