import image01 from '../assets/1.jpg'
import image02 from '../assets/2.jpg'
import image03 from '../assets/3.png'

function Photo() {
    return (
        <div className='flex flex-row h-screen '>
                    <img src={image01} alt="Pictue01" className='p-5'/>
                <div className='flex flex-col w-64 pt-5'>
                        <img src={image02} alt="Picture02"/>
                        <img src={image03} alt="Picture03"className="pt-5"/>
                </div>
        </div>
    );
}

export default Photo;