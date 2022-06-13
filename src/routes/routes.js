import config from '../config';

// Layouts

// Pages
import Home from '../pages/Home';
import Result from '../pages/Result';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.result, component: Result },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };