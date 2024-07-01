import image01 from '../assets/1.jpg'
import image02 from '../assets/2.jpg'
import image03 from '../assets/3.png'

function Photo() {
    return (
        <div className='flex lg:flex-row flex-col item-center lg:h-screen '>
                    <img src={image01} alt="Pictue01" className='lg:p-5 p-6'/>
                <div className='flex flex-col lg:w-80 lg:pt-5 lg:pl-5 pl-16 pr-16'>
                        <img src={image02} alt="Picture02"/>
                        <img src={image03} alt="Picture03"className="pt-5"/>
                </div>
        </div>
    );
}

export default Photo;