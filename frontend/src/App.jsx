import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'


import Home from './Components/Home/Home'
import Form from './Components/Form/Form'
import Client from './Components/vues/Client/Client'
import Reclamation from './Components/vues/Reclamation/Reclamation'
import Parametre from './Components/vues/Parametre/Parametre'
import Loading from './Components/Loading/Loading'
import Card from './Components/Cards/Card'
import Chart from './Components/vues/Chart/Chart1/Chart1'
import Chart2 from './Components/vues/Chart/Chart2/Chart2'
import Calendar from './Components/vues/Calendar/Calendar'
import Navbar from './Components/Navbar/Navbar'
import { Index } from './Components/Index'


function App() {
  

  return (
    <>
     {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Form/>}></Route>
        <Route path='/client' element={<Client/>}></Route>
        <Route path='/reclamation' element={<Reclamation/>}></Route>
        <Route path='/parametre/:id' element={<Parametre/>}/>
      </Routes>
     </BrowserRouter> */}
     <RouterProvider router={Index}></RouterProvider>
    </>
  )
}

export default App
