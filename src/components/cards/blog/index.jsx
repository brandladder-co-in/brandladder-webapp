import { Link } from 'react-router-dom';
import LazyLoadImg from '../../lazy-loading/img/LazyLoadImage';

const BlogCard = ({ image, topic, desc, link, domain }) => {

    const limitContent = () => {
        const words = desc?.split(' ');
        if (words?.length > 20) {
            return words.slice(0, 20).join(' ') + '  ';
        } else {
            return desc;
        }
    };

    return (
        <div className='container space-y-6 p-4 shadow-2xl rounded-3xl transition duration-500 ease-in-out hover:bg-orange-2 '>
            <div className="border-none overflow-hidden lg:h-52 md:h-56 w-full m-auto shadow p-4 rounded-2xl">
                <LazyLoadImg
                    src={image}
                    alt={topic}
                    className="rounded m-auto" />
            </div>

            <div className='text-black space-y-2'>
                <div className="space-y-4">
                    <small className='text-xs border rounded-xl border-orange-5 px-2 py-1'>
                        {domain}
                    </small>
                    <Link to={link}>
                        <h2 className='font-medium'>{topic}</h2>
                    </Link>
                </div>
                <div className='text-xs text-orange-8'>
                    {limitContent()}
                    <Link to={link} className='link' > <p className='text-sm text-orange-10'>Read More ...</p></Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
