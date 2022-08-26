import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";

import FormLoginComponent from "./FormLoginComponent";
import FriendListComponent from "./FriendListComponent";
import PostList from "./PostList";
import PaginationComponent from "./PaginationComponent";

const Main = () => {
  let emails;
  if (emails) {
    emails = localStorage.getItem("email").replace(/['"]+/g, ""); // rimuovo apici inutili poco simpatici
  }
  let datiMom;
  const [n, setn] = useState(1);
  const [nameIsFound, setNameIsFound] = useState(false);
  const [numPage, setNumPage] = useState(11);

  const [data, setData] = useState([]);
  const [dataPost, setDataPost] = useState([]);
  const [dataFriend, setDataFriend] = useState([]);

  const [email, setemail] = useState(() => {
    // mi prendo valori salvati
    const saved = localStorage.getItem("email");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [password, setpassword] = useState(() => {
    // mi prendo valori salvati
    const saved = localStorage.getItem("password");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  //  const [password, setpassword] = useState("");

  useEffect(() => {
    // salvo i valori
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
    setUser({ email: email, password: password });
  }, [email, password]);

  useEffect(() => {
    emails = localStorage.getItem("email").replace(/['"]+/g, ""); // rimuovo apici inutili poco simpatici
    getAllUsers();
    getPosts(11);
    if (emails) {
      setNameIsFound(true);
      setUser({ email: email, password: password });
    }
  }, []);

  useEffect(() => {
    getPosts(numPage);
  }, [numPage]);

  const targetN = (numPage) => {
    setn(numPage);
  };

  const plusN = (numPage) => {
    setData(numPage + 10);
  };

  const minusN = (numPage) => {
    setData(numPage - 10);
  };
  const [user, setUser] = useState({
    email: email,
    password: password,
  });
  const showDataForm = (e) => {
    e.preventDefault();
    checkMailIsFound();
  };

  const logOut = () => {
    window.localStorage.removeItem(email);
    window.localStorage.removeItem("email");
    localStorage.removeItem("password");
    emails = "";
    namemail = localStorage.setItem("email", JSON.stringify(email));
    localStorage.clear();
    setNameIsFound(false);
  };

  const getAllUsers = async () => {
    let toUsers = [];
    try {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const res = await axios.get(url);
      toUsers.push(res.data);
      setDataFriend(toUsers);
    } catch (e) {
      console.log(e);
    }
  };

  // show/hide friendlist
  const enableFriendList = () => {
    document.getElementById("dropdown-content").classList.toggle("show");
  };

  const getPosts = async (numPage) => {
    let toPosts = [];
    for (let k = 1; k < numPage; k++) {
      try {
        const urlpost = `https://jsonplaceholder.typicode.com/posts/${k}?limit=10&offset=100`;
        const resPost = await axios.get(urlpost);
        toPosts.push(resPost.data);
        setDataPost(toPosts);
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    let index = 1;
    for (numPage - index; index < numPage; index++) {
      setData([]);
      getPosts();
    }
  }, [numPage]);

  let namemail;
  const checkMailIsFound = () => {
    namemail = document.forms["myForm"]["namemail"].value;
    checkLogIn();
  };

  const checkLogIn = async () => {
    let toPosts = [];
    for (let y = 1; y < 11; y++) {
      try {
        const urlpost = `https://jsonplaceholder.typicode.com/users/${y}`;
        const resPost = await axios.get(urlpost);
        toPosts.push(resPost.data);
        setData(toPosts);
        datiMom = resPost.data;
        if (namemail === datiMom.email) {
          localStorage.setItem("email", JSON.stringify(email));
          setNameIsFound(true);
          console.log("nameIsFound", nameIsFound);
          alert("Acces Allowed");
        } else {
          console.log("checking permissions...");
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (!nameIsFound) {
      alert(nameIsFound);
    }
  };

  return (
    <>
      <div className="App">
        {!nameIsFound && !emails && (
          <div className="big-container">
            <FormLoginComponent
              showDataForm={showDataForm}
              email={email}
              password={password}
              setemail={setemail}
              setpassword={setpassword}
              nameIsFound={nameIsFound}
            />
          </div>
        )}

        {nameIsFound && (
          <div className="big-container">
            <button className="button-show" onClick={() => enableFriendList()}>
              Show/Hide FriendList
            </button>
            <button className="button-logout" onClick={() => logOut()}>
              Log Out
            </button>
            <div className="flex">
              <div id="dropdown-content" className="show-hide-menu">
                <FriendListComponent
                  dataFriend={dataFriend}
                  email={email}
                  namemail={namemail}
                  user={user}
                />
              </div>

              {/* <div>
                <h1> Utente Loggato: {user.email} </h1>
                <h1> psw: {user.password}</h1>
              </div> */}

              <PostList
                dataPost={dataPost}
                numPage={numPage}
                data={data}
                getPosts={getPosts}
              />
            </div>
            <br />
            <br />
            <br />
            <PaginationComponent
              targetN={targetN}
              n={n}
              plusN={plusN}
              minusN={minusN}
              numPage={numPage}
              setNumPage={setNumPage}
            />
          </div>
        )}

        <br />
        <br />
      </div>
    </>
  );
};

export default Main;
