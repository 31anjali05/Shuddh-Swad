const Reviews = ({ video }) => {
  const onClickItem = (video) => {
    console.log("Clicked item:", video);
  };
  return (
    <>
      {/* <video
        onClick={() => onClickItem(video)}
        style={{ width: "250px", height: "500px" }}
      >
        <source src={video} type="video/mp4"></source>
      </video> */}
      <video
        controls
        src={video}
        onClick={() => onClickItem(video)}
        style={{ width: "220px", height: "390px", borderRadius: "30px" }}
        type="video/mp4"
      />
    </>
  );
};
export default Reviews;
