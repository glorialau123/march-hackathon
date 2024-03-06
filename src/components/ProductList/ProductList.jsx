import { useEffect, useState } from "react";
import "./ProductList.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      console.log(response);
    }
    getProducts();
  }, []);

  const showProducts = products.map((product) => {
    return (
      <div className="product__item" key={product.id}>
        <img src={product.image} alt="product image" className="product__image" />
        <div className="product__details">
          <button className="product__button" onClick={() => addProduct(product)}>
            ADD TO CART
          </button>
          <div className="product__breakdown">
            <p className="product__title">{product.title}</p>
            <p className="product__price">{product.price}</p>
          </div>
        </div>
      </div>
    );
  });

  const addProduct = async (selectedProduct) => {
    console.log("button pressed for", selectedProduct);
    params.setSelectedProduct = { selectedProduct };
  };

  return <div className="product">{showProducts}</div>;
}

export default ProductList;
