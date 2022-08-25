import { elementAcceptingRef } from "@mui/utils";

const FriendListComponent = ({ dataFriend, namemail }) => {
  {
  }

  return (
    <div className="vertical-menu">
      <span className="friendlista">
        <h2>Users Registered</h2>
      </span>
      <br />
      <span className="friendlista">
        <h4>Your data</h4>
      </span>
      {dataFriend[0]
        ?.filter((data) => data.email.includes(namemail))
        .map((data) => {
          if (data?.email === namemail) {
            return (
              <div className="container" key={data.id}>
                <ul className="container">
                  <li className="user-list">
                    Username:{" "}
                    <span className="user-data">{data?.username}</span>
                  </li>
                  <li className="user-list">
                    Full Name: <span className="user-data">{data?.name}</span>
                  </li>
                  <li className="user-list">
                    Email: <span className="user-data">{data?.email}</span>
                  </li>
                  <li className="user-list">
                    Phone Number:{" "}
                    <span className="user-data">{data?.phone}</span>
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
          } else {
            return <></>;
          }
        })}
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
