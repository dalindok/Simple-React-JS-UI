import React from 'react';

function Text() {
    return (
        <div className='felx flex-col text-black lg:pt-24 pt-5 pl-24 pr-60 text-start'>
            <p>Featured</p>
            <p className='font-bold'>Work</p>
                <div className='text-sm'>
                    <p>01 Anissa &Tam Co., 2021</p>
                    <p>02 Mintmade Fashion, 2021</p>
                    <p>03 Tully and Drive, 2021</p>
                </div>
        </div>
    );
}

export default Text;