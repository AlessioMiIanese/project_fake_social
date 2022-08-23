import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";

import FormLoginComponent from "./FormLoginComponent";
import FriendListComponent from "./FriendListComponent";
import PostList from "./PostList";
import PaginationComponent from "./PaginationComponent";

const Main = () => {
  let emails = localStorage.getItem("email").replace(/['"]+/g, ""); // rimuovo apici inutili poco simpatici
  let y = 1;
  let i = 1;
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
    // checkAllData();
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

      setData(toUsers);
      console.log("toUsers", toUsers);
      console.log("data", data);
    } catch (e) {
      console.log(e);
    }
  };

  // show/hide friendlist
  const enableFriendList = () => {
    document.getElementById("dropdown-content").classList.toggle("show");
  };

  const OKOKOKOK = async () => {
    let toPosts = [];
    for (let y = 1; y < 11; y++) {
      try {
        const urlpost = `https://jsonplaceholder.typicode.com/users/${y}`;
        const resPost = await axios.get(urlpost);
        toPosts.push(resPost.data);
        console.log("res.data POSTS call ", resPost.data);
        console.log("email POSTS CALL", email);
        setData(toPosts);
        console.log("data POSTS CALL", data);

        console.log("whats localstorage", localStorage.getItem("email"));

        // data?.map((data) => {
        //   if (localStorage.getItem("email") !== data[y].email) {
        //     // console.log("tentativo di accedere con", data[y].email);
        //     console.log("tentativo di accedere con", email);
        //     //  alert("ACCES DENIED!");
        //     setNameIsFound(false);
        //   } else {
        //     console.log("accesso con", email);
        //     alert("Accesso Consentito");
        //     setNameIsFound(true);
        //   }
        // });
        data.forEach((data) => {
          console.log("email foreach", email);
          console.log(
            "data[9999999999].email foreach DSJNVSDJSDù",
            data[y - 1].email
          );
          console.log("COUNT y", y);
          console.log(
            "localStorage.getItem(email)",
            localStorage.getItem("email")
          );
          // let emails = localStorage.getItem("email").replace(/['"]+/g, ""); // rimuovo apici inutili poco simpatici
          console.log("emails", emails);
          if (emails != data[y - 1].email) {
            // console.log("tentativo di accedere con", data[y].email);
            console.log("tentativo di accedere con", email);
            //  alert("ACCES DENIED!");
            setNameIsFound(false);
          } else {
            console.log("accesso con", email);
            alert("Accesso Consentito");
            setNameIsFound(true);
            console.log("nameIsFound", nameIsFound);
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
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

  // tokens bs
  const config = {
    headers: {
      header1: email,
      header2: password,
    },
  };

  const handleChange = (e) => {
    if (e.target.value.trim() !== "") {
      setData(e.target.value);
    } else {
      getPosts();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSinglePost();
  };
  let namemail;
  const checkMailIsFound = () => {
    namemail = document.forms["myForm"]["namemail"].value;
    console.log("nameemail form", namemail);
    setNameIsFound(true);
    console.log("nameIsFound FORMMMMMMMMMMMMMMM", nameIsFound);
    // if ( nameIsFound=== 'true') {
    //   // setNameIsFound(false);
    //   console.log("NO MAIL FOUND", namemail);
    //   console.log("nameIsFound", nameIsFound);
    // } else {
    //   //  setNameIsFound(true);
    //   console.log("MAIL FOUND ", namemail);
    //   console.log("nameIsFound", nameIsFound);
    // }
  };

  const getSinglePost = async (postPerPage) => {
    let toArray = [];
    let i = 1;
    for (numPage - i; i < numPage; i++) {
      try {
        const url = `https://jsonplaceholder.typicode.com/posts/${i}?limit=(${i}+1)*10&offset=(${i}*10)`;
        const res = await axios.get(url);
        toArray.push(res.data);
        console.log("res.data", res.data);
        setData(toArray);
        console.log("toArray".toArray);
        console.log("data", data);
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
            OKOKOKOK={OKOKOKOK}
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
                data={data}
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
