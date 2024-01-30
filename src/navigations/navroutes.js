import Home from '../pages';
import Plans from '../pages/plans';
import Insight from '../pages/Insight';
import About from '../pages/about';
import Contact from '../pages/contact';
import Cart from '../pages/cart';
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
    {
        path: '/aboutus',
        element: <About />,
    },
    {
        path: '/contactus',
        element: <Contact />,
    },
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