import "./HomePage.scss";
import ProductList from "../../components/ProductList/ProductList";
import axios from "axios";
import { useEffect } from "react";

function HomePage(props) {
  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("http://localhost:9080/shoppingcart");
      props.setProducts(response.data);
      console.log(response.data);
    }
    getProducts();
  }, []);

  return (
    <div className="home">
      <ProductList
        selectedProduct={props.selectedProduct}
        setSelectedProduct={props.setSelectedProduct}
        products={props.products}
        setProducts={props.setProducts}
      />
    </div>
  );
}
export default HomePage;
