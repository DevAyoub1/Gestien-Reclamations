import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'



import { Index } from './Components/Index'

import ReclamationContext from './Components/ContextApi/ContexteApi'

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
     <ReclamationContext>
      <RouterProvider router={Index}></RouterProvider>
    </ReclamationContext>
    </>
  )
}

export default App
