import image01 from './Picture3/1.jpg'
import image02 from './Picture3/2.jpg'
import image03 from './Picture3/3.png'

function Part1() {
    return (
        <div>
            <div className='flex flex-row'>
                <div className='mr-5 w-80 my-10'>
                    <img src={image01} alt="Pictue01"/>
                </div>
                <div className='flex flex-col w-64'>
                    <div className='my-5'>
                        <img src={image02} alt="Picture02"/>
                    </div>
                    <div>
                        <img src={image03} alt="Picture03"/>
                    </div>
                </div>
                <div className='felx flex-col text-black pt-24 ml-60 text-start'>
                    <p>Featured</p>
                    <p className='font-bold'>Work</p>
                    <div className='text-sm'>
                        <p>01 Anissa &Tam Co., 2021</p>
                        <p>02 Mintmade Fashion, 2021</p>
                        <p>03 Tully and Drive, 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part1;
