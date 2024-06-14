import Home from '../pages';
import Plans from '../pages/plans';
import Services from '../pages/services'
import Insight from '../pages/Insight';
// import Events from '../pages/events';
// import EventDtl from '../pages/events/event-dtl';
// import Blogs from '../pages/Insight/blogs'
// import Blog from '../pages/Insight/blogs/blog';
import About from '../pages/about';
import Contact from '../pages/contact';
import Cart from '../pages/cart';
import Career from '../pages/career';
import Portfolio from '../pages/portfolio';
import Innovation from '../pages/innovation';
// import Investment from '../pages/investment';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

export const UnAuthenticateRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/plans',
        element: <Plans />,
    },
    {
        path: '/insight',
        element: <Insight />,
    },
    // {
    //     path: '/blogs',
    //     element: <Blogs />,
    // },
    // {
    //     path: '/insight/:blog',
    //     element: <Blog />,
    // },
    {
        path: '/services',
        element: <Services />,
    },
    // {
    //     path: '/events',
    //     element: <Events />,
    // },
    // {
    //     path: '/events/:eventId',
    //     element: <EventDtl />,
    // },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/career',
        element: <Career />,
    },
    {
        path: '/our-portfolio',
        element: <Portfolio />,
    },
    {
        path: '/our-innovation',
        element: <Innovation />,
    },
    // {
    //     path: '/investment',
    //     element: <Investment />,
    // },
]

export const AuthenticateRoutes = [
    {
        path: '/cart',
        element: <Cart />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
]