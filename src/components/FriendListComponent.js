import { elementAcceptingRef } from "@mui/utils";

const FriendListComponent = ({ dataFriend, namemail, user }) => {
  {
  }

  return (
    <div className="vertical-menu">
      <span className="friendlista">
        <div className="box">
          <h2 className="your-data">Your data</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF04iSafgO9EQ9Cp6SYOr0IYuCVVoaBVQ1Ow&usqp=CAU"
            alt="user"
            className="user-propic"
          ></img>
          <ul className="container">
            <li className="user-list">
              Utente Loggato:
              <span className="user-loggedin">{user.email}</span>
            </li>
            <li className="user-list">
              password: <span className="user-psw">{user.password} </span>
            </li>
          </ul>
        </div>
      </span>
      <div className="friendlist-container">
        <h2 className="all-users">Users Registered</h2>
        <br />
        {dataFriend[0]
          ?.filter((data) => data.email.includes(namemail))
          .map((data) => {
            if (data?.email === namemail) {
              return (
                <div className="friendlist-container" key={data.id}>
                  <ul className="containers">
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
                </div>
              );
            } else {
              return <></>;
            }
          })}
        {dataFriend[0]?.map((data) => {
          return (
            <div className="friendlist-container" key={data.id}>
              <ul className="container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF04iSafgO9EQ9Cp6SYOr0IYuCVVoaBVQ1Ow&usqp=CAU"
                  alt="user"
                  className="user-propic"
                ></img>
                <br />
                <br />

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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendListComponent;
