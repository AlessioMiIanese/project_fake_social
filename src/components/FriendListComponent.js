const FriendListComponent = ({ data }) => {
  {
    // useEffect(() => {
    //   data[0]?.map((data) => {
    //     if (email !== data[y].email) {
    //       setNameIsFound(false);
    //       console.log("email1", email);
    //       console.log("data.email", data.email);
    //     } else {
    //       console.log("mail FOUND POGGGGGERS");
    //       setNameIsFound(true);
    //     }
    //   });
    // }, [email]);
    // useEffect(() => {
    //   data[0]?.map((data) => {
    //     if (email !== data[y].email) {
    //       setNameIsFound(false);
    //       console.log("email2", email);
    //       console.log("data.email", data.email);
    //     } else {
    //       console.log("mail FOUND POGGGGGERS");
    //       setNameIsFound(true);
    //     }
    //   });
    // }, []);
  }

  return (
    <div className="vertical-menu">
      <span className="friendlista">
        <h2>Friend List </h2>
      </span>
      {data[0]?.map((data) => {
        return (
          <div className="container" key={data.id}>
            <ul className="container">
              <li className="user-list">
                Username: <span className="user-data">{data?.username}</span>
              </li>
              <li className="user-list">
                Full Name: <span className="user-data">{data?.name}</span>
              </li>
              <li className="user-list">
                Email: <span className="user-data">{data?.email}</span>
              </li>
              <li className="user-list">
                Phone Number: <span className="user-data">{data?.phone}</span>
              </li>
              <li className="user-list">
                Company:{" "}
                <span className="user-data">{data?.company?.name}</span>
              </li>
            </ul>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default FriendListComponent;
