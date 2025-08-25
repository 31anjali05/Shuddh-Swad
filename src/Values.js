const Values = ({ vector, name, details }) => {
  const onClickItem = (index) => {
    console.log("Clicked item:", index);
  };

  return (
    <>
      <div className="col-3 value" onClick={() => onClickItem(name)}>
        <img
          src={vector}
          style={{ width: "auto", height: "80px" }}
          alt={name}
          className="vector"
        />
        <div className="container" style={{ padding: "0" }}>
          <h4>
            <div className="ValueName">{name}</div>
            <div className="ValueDetails">
              &nbsp; &nbsp;
              {details}
            </div>
          </h4>
        </div>
      </div>
    </>
  );
};
export default Values;
