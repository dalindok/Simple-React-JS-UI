import React from 'react';
import Text from '../components/page3/Text';
import Photo from '../components/page3/Photo';
function Page2() {
    return (
        <div className='flex flex-row justify-between h-screen'>
            <Photo />
            <Text /> 
        </div>
    );
}

export default Page2;