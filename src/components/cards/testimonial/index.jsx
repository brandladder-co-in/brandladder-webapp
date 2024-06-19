import avtImg from '../../../assests/images/logo1.png';

const TestimonialCard = ({ image, name, designation, content }) => {
    return (
        <div className=' my-8 container p-4 shadow-2xl rounded-3xl bg-orange-2 transition duration-500 ease-in-out hover:bg-orange-3'>
            <div className="flex justify-start">
                {
                    image ? (
                        <img src={image} alt={name} />
                    ) : (
                        <img src={avtImg} alt="" />
                    )
                }
                <div className="flex flex-col my-auto">
                    <h5 className='text-black'>{name}</h5>
                    <small>{designation}</small>
                </div>
            </div>
            <small className='p-4 text-blue-950'>
                {content}
            </small>
        </div>
    )
}

export default TestimonialCard
