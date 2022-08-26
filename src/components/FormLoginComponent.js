import { useState, useEffect } from "react";

const FormLoginComponent = ({
  showDataForm,
  setpassword,
  email,
  setemail,
  password,
  setNameIsFound,
}) => {
  useEffect(() => {
    // salvo i valori
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
  }, [email, password]);

  return (
    <div className="postList">
      <h1 className="app-title"> Welcome to Distort!</h1>
      <form name="myForm" onSubmit={(e) => showDataForm(e)}>
        <label className="label-login">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Insert your email"
          aria-label="Insert your email"
          name="namemail"
        />
        <br />
        <label className="label-login">Password:</label>

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
          {!setNameIsFound && (
            <button
              className="button-login"
              type="submit"
              disabled={setNameIsFound}
            >
              Log in
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormLoginComponent;
