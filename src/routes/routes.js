import config from '../config';

// Layouts

// Pages
import Home from '../pages/Home';
import Result from '../pages/Result';
import Login from '../pages/Login'
import ChooseAccount from '../pages/ChooseAccount';
import Teacher from '../pages/ChooseAccount/Teacher';
import Student from '../pages/ChooseAccount/Student'
import SignUp from '../pages/SignUp';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.result, component: Result },
    { path: config.routes.login, component: Login },
    { path: config.routes.signup, component: SignUp },

    {path:  config.routes.chooseAccount, component:ChooseAccount},
    {path:  config.routes.teacher, component:Teacher},
    {path:  config.routes.student, component:Student},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };