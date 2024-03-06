import "./CartPage.scss";
import SaveLater from "../../components/SaveLater/SaveLater";
import SelectedProducts from "../../components/SelectedProducts/SelectedProducts";

function CartPage() {
  return (
    <div>
      <h1>Cart Page</h1>
      <SelectedProducts />
      <SaveLater />
    </div>
  );
}
export default CartPage;
