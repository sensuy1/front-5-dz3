import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProductsPage from './Pages/ProductsPage'
import SingleProductPage from './Pages/SingleProductPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='products' element={<ProductsPage />}/>
          <Route path='product' element={<SingleProductPage />} />
          <Route path='products/:productId' element={<SingleProductPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

