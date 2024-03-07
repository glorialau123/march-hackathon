import "./SelectedProducts.scss";

function SelectedProducts(props) {
  const showProducts = props.selectedProduct.map((product) => {
    return (
      <div className="selectedProduct__item" key={product.id}>
        <h1>{product.title}</h1>
        <p>{product.price}</p>

        <img className="selectedProduct__image" src={product.image} />
      </div>
    );
  });

  return (
    <section>
      <h2>Cart</h2>
      {showProducts}
    </section>
  );
}

export default SelectedProducts;
