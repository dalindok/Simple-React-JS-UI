import image01 from '../assets/page4.jpg'

function Photo() {
    return (
        <div>
            <img src={image01} alt="page4" className='object-cover h-screen sm:object-fill sm:w-full'/>
        </div>
    );
}

export default Photo;