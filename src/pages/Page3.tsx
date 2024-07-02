import Photo from "../components/Photo";
import Text from "../components/Text";


function Part1() {
    return (
        <div className='flex sm:flex-row flex-col sm:justify-between h-screen w-screen'>
               <Photo/>    
               <Text/> 
        </div>
    );
}

export default Part1;
