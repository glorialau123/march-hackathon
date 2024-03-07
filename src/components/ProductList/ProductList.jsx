import "./ProductList.scss";

function ProductList(props) {
  const showProducts = props.products.map((product) => {
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

  const addProduct = async (clickedProduct) => {
    console.log("button pressed for", clickedProduct);
    props.setSelectedProduct((prevSelectedProduct) => [
      ...prevSelectedProduct,
      clickedProduct,
    ]);
  };

  return <div className="product">{showProducts}</div>;
}

export default ProductList;
