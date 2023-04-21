import './App.scss'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import logo from './assets/logo.png'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'

import { CartContextProvider } from './context/CartContext'


function App() {
  const title = logo
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer title={title} />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>

      </CartContextProvider>
    </>
  )
}

export default App
