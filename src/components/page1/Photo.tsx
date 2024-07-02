import React from 'react';
import First from '../../asset/First.png'
function Photo() {
    return (
        <div className="flex  flex-col h-screen sm:flex-row">
            <div className="flex sm:pl-10 ">
        <img src={First} alt="06" className="" />
      </div>
        </div>
    );
}

export default Photo;