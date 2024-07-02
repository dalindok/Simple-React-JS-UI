import image01 from '../assets/1.jpg'
import image02 from '../assets/2.jpg'
import image03 from '../assets/3.png'

function Photo() {
    return (
        <div className='flex sm:flex-row flex-col item-center sm:h-screen '>
                    <img src={image01} alt="Pictue01" className='p-5 sm:p-6'/>
                <div className='flex flex-col pl-24 pr-24 sm:pt-6 sm:pr-16 sm:w-80 sm:pl-1 '>
                        <img src={image02} alt="Picture02"/> 
                        <img src={image03} alt="Picture03"className="pt-5"/>
                </div>
        </div>
    );
}

export default Photo;