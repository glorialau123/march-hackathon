import "./CartPage.scss";
import SelectedProducts from "../../components/SelectedProducts/SelectedProducts";

function CartPage(props) {
  return (
    <div>
      <SelectedProducts
        selectedProduct={props.selectedProduct}
        setSelectedProduct={props.setSelectedProduct}
        products={props.products}
        setProducts={props.setProducts}
      />
    </div>
  );
}
export default CartPage;
