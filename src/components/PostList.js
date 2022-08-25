import { useEffect } from "react";
const PostList = ({ dataPost, numPage, data, getPosts }) => {
  useEffect(() => {
    getPosts(numPage);
  }, [numPage]);
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
              {dataPost.userId === 1 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="user-data">Leanne Graham </span>
                  </p>
                </div>
              )}
              {dataPost.userId === 2 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="user-data">Ervin Howell</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 3 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="user-data">Clementine Bauch</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 4 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="user-data">Patricia Lebsack</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 5 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="user-data">Chelsey Dietrich</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 6 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="user-data">Mrs. Dennis Schulist</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 7 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="user-data">Kurtis Weissnat</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 8 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="user-data">Nicholas Runolfsdottir V</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 9 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="user-data">Glenna Reichert</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 10 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="user-data">Clementina DuBuque</span>
                  </p>
                </div>
              )}

              <p className="user-list">
                Post N: <span className="user-data"> {dataPost?.id}</span>
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
