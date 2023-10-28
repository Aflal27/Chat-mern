import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SingnUp from './pages/SingnUp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/signup' element={<SingnUp/>} />
      </Routes>
    </BrowserRouter>
  )
}
