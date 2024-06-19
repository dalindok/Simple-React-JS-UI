import React from 'react';
import Text from '../components/page2/Text'
import Photo from '../components/page2/Photo';
function Page2() {
    return (
        <div className='flex flex-row justify-between'>
            <Text /> 
            <Photo />
        </div>
    );
}

export default Page2;