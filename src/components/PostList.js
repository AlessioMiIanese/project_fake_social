const PostList = ({ dataPost, i, data }) => {
  return (
    <div className="postList">
      <span className="post">
        {" "}
        <h2>Posts </h2>
      </span>
      {dataPost?.map((dataPost) => {
        return (
          <div className="container" key={dataPost?.id}>
            <div className="container">
              <div>
                {(dataPost.userId = 1 && dataPost.userId === data?.id) && (
                  <span>Leanne Graham </span>
                )}
                {(dataPost.userId = 2 && dataPost.userId === data?.id) && (
                  <span>Ervin Howell" </span>
                )}
                {(dataPost.userId = 3 && dataPost.userId === data?.id) && (
                  <span>Clementine Bauch </span>
                )}
                {(dataPost.userId = 4 && dataPost.userId === data?.id) && (
                  <span>Patricia Lebsack</span>
                )}
                {(dataPost.userId = 5 && dataPost.userId === data?.id) && (
                  <span>Chelsey Dietrich </span>
                )}
                {(dataPost.userId = 6 && dataPost.userId === data?.id) && (
                  <span>Mrs. Dennis Schulist</span>
                )}
                {(dataPost.userId = 7 && dataPost.userId === data?.id) && (
                  <span>Kurtis Weissnat </span>
                )}
                {(dataPost.userId = 8 && dataPost.userId === data?.id) && (
                  <span>Nicholas Runolfsdottir V</span>
                )}
                {(dataPost.userId = 9 && dataPost.userId === data?.id) && (
                  <span>Glenna Reichert </span>
                )}
                {(dataPost.userId = 10 && dataPost.userId === data?.id) && (
                  <span>Clementina DuBuque</span>
                )}
              </div>

              <p className="user-list">
                Title: <span className="user-data">Post N: {dataPost?.id}</span>
              </p>
              <p className="user-list">
                Title: <span className="user-data">{dataPost?.title}</span>
              </p>
              <p className="user-list">
                body: <span className="user-data">{dataPost?.body}</span>
              </p>
            </div>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
