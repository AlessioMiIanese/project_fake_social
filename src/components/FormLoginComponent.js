import { useState, useEffect } from "react";

const FormLoginComponent = ({
  logOut,
  showDataForm,
  setpassword,
  email,
  setemail,
  password,
  nameIsFound,
  OKOKOKOK,
}) => {
  useEffect(() => {
    // salvo i valori
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
  }, [email, password]);

  // const onChangemail = (e) => {
  //   setemail(e.target.value);
  //   if (e.target.value !== data.email) {
  //     alert("fuck you");
  //   } else {
  //     console.log("email is found yayaya");
  //   }
  // };
  return (
    <div>
      <h1> Welcome to Feisbuk!</h1>
      <form name="myForm" onSubmit={(e) => showDataForm(e)}>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Insert your email"
          aria-label="Insert your email"
          name="namemail"
        />
        <br />
        <label>Password:</label>

        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          id="password"
          value={password}
          size="30"
          placeholder="Insert your password"
          aria-label="Insert your password"
        />
        <br />
        <div className="flex">
          {!localStorage.getItem("email") && <input value="Registrati"></input>}

          {!nameIsFound && (
            <button type="submit" disabled={nameIsFound}>
              Accedi
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormLoginComponent;
