const PostList = ({ dataPost, i }) => {
  return (
    <div className="postList">
      <span className="post">
        {" "}
        <h2>Posts </h2>
      </span>
      {dataPost[i]?.map((data) => {
        return (
          <div className="container" key={dataPost?.id}>
            <div className="container">
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
