import config from '../config';

// Layouts

// Pages
// import Home from '../pages/Home';
import Result from '../pages/Result';
import Login from '../pages/Login'
import ChooseAccount from '../pages/ChooseAccount';
import Teacher from '../pages/ChooseAccount/Teacher';
import Student from '../pages/ChooseAccount/Student'
import SignUp from '../pages/SignUp';
import ListRoom from '../pages/ChooseAccount/Teacher/Room/List';
import ViewRoom from '../pages/ChooseAccount/Teacher/Room/Watch';
import Student_username from '../pages/ChooseAccount/Student/Student-Username';
import Student_waiting from '../pages/ChooseAccount/Student/Student-waitingGame';
import Create_question from '../pages/ChooseAccount/Teacher/Room/Create_questions';
// Public routes
const publicRoutes = [
    // { path: config.routes.home, component: Home },
    { path: config.routes.result, component: Result },
    { path: config.routes.login, component: Login },
    { path: config.routes.signup, component: SignUp },

    {path:  config.routes.chooseAccount, component:ChooseAccount},
    {path:  config.routes.teacher, component:Teacher},
    {path:  config.routes.student, component:Student},
    {path:  config.routes.create_question, component:Create_question},
    {path:  config.routes.student_username, component:Student_username},
    {path:  config.routes.student_waiting, component:Student_waiting},
    {path:  config.routes.room, component:ListRoom},
    {path:  config.routes.watch, component:ViewRoom},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };