import { useEffect } from "react";
const PostList = ({ dataPost, numPage, getPosts }) => {
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
          <div className="card" key={dataPost?.id}>
            <div className="container">
              {dataPost.userId === 1 && (
                <div>
                  <div className="user-list">
                    <h3 className="post-title">{dataPost?.title}</h3>
                  </div>
                  <p className="user-list">
                    Author:
                    <span className="post-author">Leanne Graham </span>
                  </p>
                </div>
              )}
              {dataPost.userId === 2 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="post-author">Ervin Howell</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 3 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="post-author">Clementine Bauch</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 4 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="post-author">Patricia Lebsack</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 5 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="post-author">Chelsey Dietrich</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 6 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="post-author">Mrs. Dennis Schulist</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 7 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="post-author">Kurtis Weissnat</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 8 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="post-author">
                      Nicholas Runolfsdottir V
                    </span>
                  </p>
                </div>
              )}
              {dataPost.userId === 9 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="post-author">Glenna Reichert</span>
                  </p>
                </div>
              )}
              {dataPost.userId === 10 && (
                <div>
                  <p className="user-list">
                    Author:
                    <span className="post-author">Clementina DuBuque</span>
                  </p>
                </div>
              )}

              <p className="user-list">
                Post n°: <span className="user-data"> {dataPost?.id}</span>
              </p>

              <p className="user-list body">
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
