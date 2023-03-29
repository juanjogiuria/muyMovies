import './App.scss'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import logo from './assets/logo.png'


function App() {
  const title = logo
  return (
    <>
      <Navbar />
      <ItemListContainer title={title} />
    </>
  )
}

export default App
