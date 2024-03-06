import "./HomePage.scss";
import ProductList from "../../components/ProductList/ProductList";
import { useParams } from "react-router-dom";

function HomePage() {
  const params = useParams();

  return (
    <div className="home">
      <ProductList
        selectedProduct={params.selectedProduct}
        setSelectedProduct={params.setSelectedProduct}
      />
    </div>
  );
}
export default HomePage;
