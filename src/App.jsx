import './App.scss'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'


function App() {
  const title = 'Muy Movie'
  return (
    <>
      <Navbar />
      <ItemListContainer title={title} />
    </>
  )
}

export default App
