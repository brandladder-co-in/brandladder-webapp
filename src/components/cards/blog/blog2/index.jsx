import { Link } from 'react-router-dom';

import LazyLoadImg from '../../../../components/lazy-loading/img/LazyLoadImage';

const BlogCard2 = ({ order, image, editor, designation, topic, date, readTime, desc, navLink }) => {
    return (
        <div className="card max-w-full shadow-2xl bg-inherit border-none rounded-2xl">
            <div className={`card-body max-w-full grid grid-row-1 md:grid-${order}-5 gap-4 border p-4`}>
                <LazyLoadImg
                    src={image} alt={topic}
                    className='col-span-2 h-full w-full rounded-3xl'
                />
                <div className="col-span-2 my-auto">
                    <div className="flex my-2">
                        <LazyLoadImg src="" alt="" />
                        <div className="flex flex-col">
                            <p className='text-sm text-black'>{editor}</p>
                            <small className='text-xs text-gray-800'>{designation}</small>
                        </div>
                    </div>
                    <div className="flex flex-col my-2">
                        <h1 className='text-blue-950' >{topic}</h1>
                        <div className="flex">
                            <small className='font-xs' >{readTime}</small>
                            <small className='mx-4 font-xs'>{date}</small>
                        </div>
                    </div>
                    <p className='text-xs text-black my-2'>
                        {desc}
                        <Link to={navLink} className='font-semibold'>
                            Read More ...
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard2
