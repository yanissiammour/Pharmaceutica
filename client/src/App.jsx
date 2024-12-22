import './App.css'
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home'
import Inventair from './inventaire'
import InventairADD from './add'
import ListeClient from './listeClient'
import Transaction from './transaction'


function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventaire' element={<Inventair />}></Route>
        <Route path='/inventaire/add' element={<InventairADD />}></Route>
        <Route path='/listeClient' element={<ListeClient />}></Route>
        <Route path='/transaction' element={<Transaction />}></Route>        
      </Routes>
   </BrowserRouter>
  )
}

export default App
