import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SingleProductPage = () => {
  const [ product, setProduct ] = useState(null)
  const { productId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${productId}`)
      setProduct(response.data)
    }
    getProduct();
  }, [])

  return (
    <>
    <button onClick={() => navigate(-1) }>Назад</button>
      <h3>Товар: {product && product.title}</h3>
      <p>Цена: {product && product.price}</p>
      <span>id: {product && product.id}</span>
    </>
  )
}

export default SingleProductPage