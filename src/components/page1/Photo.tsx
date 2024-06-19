import React from 'react';
import First from '../../asset/First.png'
function Photo() {
    return (
        <div className="flex flex-row h-screen p-5">
            <div className="flex ml-6 relative">
        <img src={First} alt="06" className="" />
      </div>
        </div>
    );
}

export default Photo;