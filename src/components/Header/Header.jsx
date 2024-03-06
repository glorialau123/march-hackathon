import "./Header.scss";
import { Link } from "react-router-dom";
import logoImage from "./../../assets/logo/cart-logo.png";
import CartImage from "./../../assets/images/cart.png";

function Header() {
  return <header className="header">

    <div className="header__column">
      <Link to="/">
        <img className="header__logo" alt="ProductLogo" src={logoImage} />
      </Link>
    </div>

    <div className="header__title header__column"><h1>ClickCart</h1></div>

    <div className="header__column">
      <Link className="header__link" to="/">
        <div>HOME</div>
      </Link>
      <div className="header__cart">
        <Link className="header__link" to="/cart">
          <img className="header__cart-image" alt="CartImage" src={CartImage} />
        </Link>
      </div>
    </div>

  </header>
}
export default Header;
