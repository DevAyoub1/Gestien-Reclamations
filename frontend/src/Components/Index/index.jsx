import {createBrowserRouter} from 'react-router-dom';
import UserHome from '../Home/UserHome';
import Form from '../Form/Form';
import Client from '../vues/Client/Client';
import Reclamation from '../vues/Reclamation/Reclamation';
import Parametre from '../vues/Parametre/Parametre';
import Navbar from '../Navbar/Navbar';
import Nav from '../Home/nav';
import { Children } from 'react';
import AdminHome from '../Home/AdminHome';
import Login from '../Form/Login/Login';
import Register from '../Form/Register/Register';
import SidebarAdmin from '../Sidebar/User/SidebarHome';
// import Home from '../Home/Home';
import LoginHome from '../layout/Home/LoginHome';
import Home from '../Home/Home';
import RegisterHome from '../layout/Home/RegisterHome';
import ReclamationHome from '../layout/Home/ReclamationHome';
import UserProfile from '../layout/User/UserProfile';
import UserReclamation from '../layout/User/UserReclamation';
import UserSurggestion from '../layout/User/UserSuggertion';
import AdminUsers from '../layout/Admin/AdminProfile';
import AdminReclamation from '../layout/Admin/AdminReclamation';
import AdminSurggestion from '../layout/Admin/AdminSuggertion';
import AdminObservation from '../layout/Admin/AdminObservation';
import UserReclamations from '../layout/User/user/UserReclamation';
import UserSuggestions from '../layout/User/user/UserSuggestion';
import UserObservations from '../layout/User/user/UserObservations.jsx';
import UserObservation from '../layout/User/UserObservation';
import AddObservation from '../layout/User/user/Actions/AddObservation.jsx';
//import AddSuggestion from '../layout/User/user/Actions/AddSuggestion.jsx';
import AddReclamation from '../layout/User/user/Actions/AddReclamation.jsx';
import AddSuggestion from '../layout/User/user/Actions/AddSuggestion.jsx';
import UserObservationAdd from '../layout/User/UserObservationAdd.jsx';
import UserReclamationAdd from '../layout/User/UserReclamationAdd.jsx';
import UserSuggestionAdd from '../layout/User/UserSuggestionAdd.jsx';
import AdminReclamationEdit from '../layout/Admin/edit/Link/AdminReclamationEdit.jsx';
import AdminUsersEdit from '../layout/Admin/edit/Link/AdminUsersEdit.jsx';
import AdminSuggestionEdit from '../layout/Admin/edit/Link/AdminSuggestionEdit.jsx';
import AdminObservationEdit from '../layout/Admin/edit/Link/AdminObservationsEdit.jsx';
import UserReclamationEdit from '../layout/User/user/Actions/edit/UserReclamationEdit.jsx';
import UserObservationEdit from '../layout/User/user/Actions/edit/UserObservationEdit.jsx';
import UserSuggertionEdit from '../layout/User/user/Actions/edit/UserSuggestionEdit.jsx';
import UsersEdit from '../layout/User/user/Actions/edit/Link/UserEdit.jsx';
import UserEdit from '../layout/User/user/Actions/edit/UserEdit.jsx';
import ForgotPassword from '../layout/Home/ForgotPassword.jsx';
import ResetPassword from '../layout/Home/ForgotPassword.jsx';
import AdminProfile from '../layout/Admin/AdminProfile copy.jsx';
import AdminEditProfile from '../layout/Admin/AdminProfile copy 2.jsx';
import NotFound from '../vues/Client/Client';

//import Home from './Components/Home/Home'
// import Form from './Components/Form/Form'
// import Client from './Components/vues/Client/Client'
// import Reclamation from './Components/vues/Reclamation/Reclamation'
// import Parametre from './Components/vues/Parametre/Parametre'
// import Loading from './Components/Loading/Loading'
// import Card from './Components/Cards/Card'
// import Chart from './Components/vues/Chart/Chart1/Chart1'
// import Chart2 from './Components/vues/Chart/Chart2/Chart2'
// import Calendar from './Components/vues/Calendar/Calendar'
// import Navbar from './Components/Navbar/Navbar'
export  const Index=createBrowserRouter([
   
            
                
                   
                    //home
                        
                        
                           {
                        path: "/login",
                        element: <LoginHome/>
                    },    {
                        path:'/register',
                        element: <RegisterHome/>
                    },
                        
                    
                  
                    
            
            
               
                    {
                        path:'/',
                        element:<Home/>
                    },
                    //admin
                    {
                        path:'/AdminHome',
                        element:<AdminHome/>
                    },
                    {
                        path:'/EditProfile/:id',
                        element:<AdminEditProfile/>                    },
        //EditUser
        {
                        path:'/AdminProfile',
                        element:<AdminProfile/>
                    },
                    {
                        path:'/UserHome',
                        element: <UserHome/>
                    },
                    {
                        path:'/reclamation',
                        element: <ReclamationHome/>
                    },
                    {
                        path:'/profile',
                        element:<UserProfile/>
                    },{
                        path:'/reclamationUser',
                        element: <UserReclamation/>
                    },
                    {
                        path:'/Usersurggestion',
                        element:<UserSurggestion/>
                    },
                    {
                        path:'/AdminUsers',
                        element:<AdminUsers/>
                    },{
                        path:'/AdminReclamation',
                        element: <AdminReclamation/>
                    },
                    {
                        path:'/Adminsurggestion',
                        element:<AdminSurggestion/>
                    },
                    {
                        path:'/AdminObservation',
                        element:<AdminObservation/>
                    },{
                        path:'/reclamationUsers',
                        element: <UserReclamations/>
                    },{
                        path:'/UserSuggestions',
                        element: <UserSuggestions/>
                    },{
                        path:'/UserObservations',
                        element: <UserObservations/>
                    },{
                        path:'/UserObservation',
                        element: <UserObservation/>
                    },
                    //ajouter
                    {
                        path:'/AddObservation',
                        element: <UserObservationAdd/>
                    },
                    {
                        path:'/AddReclamation',
                        element: <UserReclamationAdd/>
                    },
                    {
                        path:'/AddSuggestion',
                        element: <UserSuggestionAdd/>
                    },
                    //EditAdmin
                    {
                        path:'/EditReclamation/:id',
                        element:<AdminReclamationEdit/>                    },
                        {
                            path:'/EditObservation/:id',
                            element:<AdminObservationEdit/>                    },
                            {
                                path:'/EditSuggestion/:id',
                                element:<AdminSuggestionEdit/>                    },
                                {
                                    path:'/EditUsers/:id',
                                    element:<AdminUsersEdit/>                    },
                    //EditUser
                    {
                        path:'/UserReclamationEdit/:id',
                        element:<UserReclamationEdit/>                    },
                        {
                            path:'/UserObservationEdit/:id',
                            element:<UserObservationEdit/>                    },
                            {
                                path:'/UserSuggetionEdit/:id',
                                element:<UserSuggertionEdit/>                    },
                                {
                                    path:'/UserEdit/:id',
                                    element:<UserEdit/>                    },
                                    {
                                        path:'/Forgotpassword',
                                        element:<ResetPassword/>                    },
                                        {path:"*",element:<NotFound/>},
                    

                ]
          

    
    
);
{/* <BrowserRouter>
      <Routes>
        <Route path='/' element=></Route>
        <Route path='/login' element={<Form/>}></Route>
        <Route path='/client' element={<Client/>}></Route>
        <Route path='/reclamation' element={<Reclamation/>}></Route>
        <Route path='/parametre/:id' element={<Parametre/>}/>
      </Routes>
     </BrowserRouter> */}