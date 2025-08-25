const Cards = ({ product, name, price, prevPrice }) => {
  const onClickItem = (index) => {
    console.log("Clicked item:", index);
  };

  return (
    <>
      <div className="col-3 card" onClick={() => onClickItem(name)}>
        <img
          src={product}
          style={{ width: "auto", height: "447px" }}
          alt={name}
          className="Product"
        />
        <div className="container" style={{ padding: "0" }}>
          <h4>
            <div className="ProductName">{name}</div>
            <div className="ProductPrice">
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
