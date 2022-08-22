import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";

import FormLoginComponent from "./FormLoginComponent";
import FriendListComponent from "./FriendListComponent";
import PostList from "./PostList";
import PaginationComponent from "./PaginationComponent";


const Main = () => {

    let i=1;
    const [n, setn]= useState(1);

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
    getAllUsers();
    getPosts();
  }, []);

//      useEffect(() => {
 
//     getPosts();
//   }, [n]);

  const targetN = (n)=> {
    setn(n);
  }

const plusN = (n) => {
    setData(n+1);
}

const minusN = (n) => {
    setData(n-1);
}
    const [user, setUser] = useState({
    email: email,
    password: password
  });
  const [isLoggedin, SetIsLoggedIn] = useState(false);
   const showDataForm = (e) => {
    e.preventDefault();
    checkAllData();
    console.log("submittttttt");
  };

   const checkAllData = () => {
    console.log("email", email);
    console.log("password", password);
    // data.map((data)=>{
    //      if (email!== data[0]?.email) {
    //   alert("The field lastName is requiredddddd.");
    //   console.log("data[0]?.email" , data[0]?.email)
    //   SetIsLoggedIn(false);
    // } 
    // })
    if (email.trim() === "" && email.trim()!== data[0]?.email) {
      alert("The field email is required.");
      SetIsLoggedIn(false);
    } else if (password.trim() === "") {
      alert("The field password is required.");
      SetIsLoggedIn(false);
    } else {
      SetIsLoggedIn(true);
      
    }
    console.log("isLoggedin", isLoggedin)
    console.log("data", data)
    console.log("data[0]?.email" , data[0]?.email)
  };

   const changeUserData = (key, value) => {
    setUser({ ...user, [key]: value });
    
  };

const logOut = (email) => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
}


  const getAllUsers = async () => {
    let toUsers = [];
    try {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const res = await axios.get(url);
      toUsers.push(res.data);
      console.log("res.data", res.data);
      
      setData(toUsers);
      console.log("toUsers",toUsers);
      console.log("data",data);
      
    } catch (e) {
      console.log(e);
    }
  };


  // show/hide friendlist
   function enableFriendList() {
    document.getElementById("dropdown-content").classList.toggle("show");
  }


   const getPosts = async () => {
    let toPosts = [];
  
    try {
      const urlpost = `https://jsonplaceholder.typicode.com/posts/${i}`;
      const resPost = await axios.get(urlpost);
      toPosts.push(resPost.data);
      console.log("res.data POSTS", resPost.data);
      
      setDataPost(toPosts);
      console.log("toPosts",toPosts);
      console.log("dataPost",dataPost);
      
    } catch (e) {
      console.log(e);
    }
 
  };

  // tokens bs
  const config = {
  headers:{
    header1: email,
    header2: password
  }
};

  return (
    <>
    
  <div className="App">
    {!isLoggedin && (
    <FormLoginComponent showDataForm={showDataForm} 
    isLoggedin={isLoggedin} 
    email={email} 
    password={password} 
    setemail={setemail} 
    changeUserData={changeUserData} 
    setpassword={setpassword}/>
    
    )}
   

      {isLoggedin && (
    <div>
    
        <button onClick={() => enableFriendList()}>Show/Hide FriendList</button>

        <div id="dropdown-content" className="show-hide-menu">
                <FriendListComponent data={data}/>
        </div>

         <button onClick={() => logOut()}>Log Out</button>
            <div>
                <h1> Utente Loggato: {user.email} </h1>
                <h1> psw: {user.password}</h1>
            </div>
            lista di post
        <PostList dataPost={dataPost} i={i}/>


    </div>
            
    
    )}
   <br/><br/><br/><br/><br/>
   <PaginationComponent targetN={targetN} n={n} plusN={plusN} minusN={minusN}/>
   
    
    </div>
    </>
    );
};

export default Main;
