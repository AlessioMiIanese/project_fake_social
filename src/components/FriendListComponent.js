const FriendListComponent = ({ dataFriend }) => {
  {
  }

  return (
    <div className="vertical-menu">
      <span className="friendlista">
        <h2>Friend List </h2>
      </span>
      {dataFriend[0]?.map((data) => {
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
