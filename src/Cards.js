const Cards = ({ product, name, price, prevPrice }) => {
  const onClickItem = (index) => {
    console.log("Clicked item:", index);
  };

  return (
    <>
      <div className="col-3 card" onClick={() => onClickItem(name)}>
        <img
          src={product}
          style={{ width: "auto", height: "447px", borderRadius: "10px" }}
          alt={name}
          className="product"
        />
        <div
          className="container"
          style={{ backgroundColor: "#f2efdd", padding: "0" }}
        >
          <h4>
            <div className="product-name">{name}</div>
            <div className="product-price">
              <span>
                <del>{prevPrice}</del>
              </span>{" "}
              &nbsp; &nbsp;
              {price}
            </div>
          </h4>
          <button className="button">Add to cart</button>
        </div>
      </div>
    </>
  );
};
export default Cards;
