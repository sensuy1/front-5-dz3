import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let filteredProducts = products;

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      setProducts(response.data.products);
    };
    const getCategories = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response.data);
    };
    getProducts();
    getCategories();
  }, []);

  const category = searchParams.get("cat");
  if (category) {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }

  const handleFilterByMinPrice = (minPrice) => {
    setSearchParams({ ...searchParams, minPrice: minPrice });
  };

  const minPrice = searchParams.get("minPrice");
  if (minPrice) {
    filteredProducts = products.filter(
      (product) => product.price > parseInt(minPrice)
    );
  }

  return (
    <div>
      ProductsPage
      <div className="categories">
        <button onClick={() => setSearchParams({})}>Всё</button>
        <button onClick={() => handleFilterByMinPrice(200)}>Минимальная цена: 200</button>
        {categories &&
          categories.map((category) => (
            <button
              key={category}
              onClick={() => setSearchParams({ cat: category })}
            >
              {category}
            </button>
          ))}
      </div>
      <ul className="products">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
