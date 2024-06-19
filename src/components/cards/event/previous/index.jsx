import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const PreviousEvents = ({ id, img, date, domain, title, orgName }) => {
    return (
        <div className='card bg-orange-2 py-4 max-w-full z-10'>
            <img src={img} alt={title} />
            <div className="card-body py-2">
                <div className="flex justify-between">
                    <small className='text-black'>{date}</small>
                    <span className="badge badge-outline text-orange-10 border-orange-9 shadow-2xl">{domain}</span>
                </div>
                <h5>By {orgName}</h5>
                <h3 className='text-black'>{title}</h3>
            </div>
            <Link to={`/events/${id}`} className='px-2' >
                <button
                    className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full"
                >
                    Show Details <FaArrowRight className='text-base mx-1' />
                </button>
            </Link>
        </div>
    )
}

export default PreviousEvents
