import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Produtos from './Produtos'
import Ofertas from './Oferta'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/offer' element={<Offer/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)