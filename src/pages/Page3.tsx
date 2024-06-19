import image01 from '../assets/1.jpg'
import image02 from '../assets/2.jpg'
import image03 from '../assets/3.png'

function Part1() {
    return (
        <div className='flex flex-row justify-between h-screen w-screen'>
            <div className='flex flex-row h-screen '>
                    <img src={image01} alt="Pictue01" className='p-5'/>
                <div className='flex flex-col w-64 pt-5'>
                        <img src={image02} alt="Picture02"/>
                        <img src={image03} alt="Picture03"className="pt-5"/>
                </div>
            </div>
                <div className='felx flex-col text-black pt-24 pr-60 text-start'>
                    <p>Featured</p>
                    <p className='font-bold'>Work</p>
                    <div className='text-sm'>
                        <p>01 Anissa &Tam Co., 2021</p>
                        <p>02 Mintmade Fashion, 2021</p>
                        <p>03 Tully and Drive, 2021</p>
                    </div>
                </div>         
        </div>
    );
}

export default Part1;
