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
  let y = 1;
  let i = 1;
  let datiMom;
  const [n, setn] = useState(1);
  const [nameIsFound, setNameIsFound] = useState(false);
  const [numPage, setNumPage] = useState(11);
  const changePageUp = () => {
    setNumPage(numPage + 10);
    getPosts(numPage);
  };
  const changePageDown = () => {
    setNumPage(numPage - 10);
    getPosts(numPage);
  };

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
    y = 1;
  }, [email, password]);

  useEffect(() => {
    emails = localStorage.getItem("email").replace(/['"]+/g, ""); // rimuovo apici inutili poco simpatici
    getAllUsers();
    getPosts();
  }, []);

  useEffect(() => {
    getPosts();
  }, [numPage]);

  const targetN = (numPage) => {
    setn(numPage);
  };

  const plusN = (numPage) => {
    setData(numPage + 1);
  };

  const minusN = (numPage) => {
    setData(numPage - 1);
  };
  const [user, setUser] = useState({
    email: email,
    password: password,
  });
  const showDataForm = (e) => {
    e.preventDefault();
    checkMailIsFound();
    console.log("submittttttt");
  };

  const changeUserData = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const logOut = (email) => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  const getAllUsers = async () => {
    let toUsers = [];
    try {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const res = await axios.get(url);
      toUsers.push(res.data);
      console.log("res.data", res.data);

      setDataFriend(toUsers);
      console.log("toUsers", toUsers);
      console.log("dataFriend", dataFriend);
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
    for (numPage - i; i < numPage; i++) {
      try {
        const urlpost = `https://jsonplaceholder.typicode.com/posts/${i}?limit=(${i}+1)*10&offset=(${i}*10)`;
        const resPost = await axios.get(urlpost);
        toPosts.push(resPost.data);
        console.log("res.data POSTS", resPost.data);

        setDataPost(toPosts);
        console.log("toPosts", toPosts);
        console.log("dataPost", dataPost);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    let index = 1;
    for (numPage - index; index < numPage; index++) {
      // const element = array[i];
      setData([]);
      getPosts();
      // checkMailIsFound();
      // controlType(pokemonData);
      // setPokemonData(pokemonData.map((pokemon) => pokemon.id));
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
          alert("Acceso Permesso");
        } else {
          console.log("controllando i permessi");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <div className="App">
        {!nameIsFound && (
          <FormLoginComponent
            showDataForm={showDataForm}
            email={email}
            password={password}
            setemail={setemail}
            changeUserData={changeUserData}
            setpassword={setpassword}
            nameIsFound={nameIsFound}
            data={data}
            setNameIsFound={setNameIsFound}
          />
        )}

        {nameIsFound && (
          <div>
            <button onClick={() => enableFriendList()}>
              Show/Hide FriendList
            </button>
            <div id="dropdown-content" className="show-hide-menu">
              <FriendListComponent
                dataFriend={dataFriend}
                email={email}
                useEffect={useEffect}
                setNameIsFound={setNameIsFound}
                y={y}
              />
            </div>
            <button onClick={() => logOut()}>Log Out</button>
            <div>
              <h1> Utente Loggato: {user.email} </h1>
              <h1> psw: {user.password}</h1>
            </div>
            lista di post
            <PostList dataPost={dataPost} i={i} data={data} />
          </div>
        )}
        <br />
        <br />
        <br />
        <br />
        <br />
        <PaginationComponent
          targetN={targetN}
          n={n}
          plusN={plusN}
          minusN={minusN}
          numPage={numPage}
          changePageDown={changePageDown}
          changePageUp={changePageUp}
        />
      </div>
    </>
  );
};

export default Main;
