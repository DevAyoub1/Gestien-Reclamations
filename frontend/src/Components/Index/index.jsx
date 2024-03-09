import {createBrowserRouter} from 'react-router-dom';
import Home from '../Home/Home';
import Form from '../Form/Form';
import Client from '../vues/Client/Client';
import Reclamation from '../vues/Reclamation/Reclamation';
import Parametre from '../vues/Parametre/Parametre';
import Navbar from '../Navbar/Navbar';
import Nav from '../Home/nav';
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
   
           {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Form/>
    },
    {
        path:'/client',
        element:<Client/>
    },
    {
        path:'/reclamation',
        element:<Reclamation/>
    },{
        path:'/parametre/:id',
        element:<Parametre/>
    }
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