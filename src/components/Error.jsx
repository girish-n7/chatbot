export default function Error() {
  let errorStyle = {
    fontSize: "2rem",
    color: "red",
    boxShadow: "0 0 10px 1px red",
    textAlign: "center",
  };
  return (
    <div className="home--container">
      <p className="home--intro" style={errorStyle}>
        404 Error <hr className="error--hr" />
        PAGE NOT FOUND!
      </p>
    </div>
  );
}

//home container style reused
