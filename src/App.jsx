import './App.scss'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import logo from './assets/Muy10.png'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'

import { CartContextProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'
import Login from './components/Login'
import PaymentForm from './components/PaymentForm'
import Footer from './components/Footer'


function App() {
  const title = logo


  return (
    <>
      <BrowserRouter>
        <CartContextProvider>

          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer title={title} />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/paymentform' element={<PaymentForm />} />
          </Routes>

          <Footer/>

        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
