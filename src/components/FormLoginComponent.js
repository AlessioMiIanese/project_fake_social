import { useState, useEffect } from "react";

const FormLoginComponent = ({
  logOut,
  showDataForm,
  changeUserData,
  setpassword,
  email,
  setemail,
  password,
}) => {
  useEffect(() => {
    // salvo i valori
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
  }, [email, password]);

  return (
    <div>
      <h1> Welcome to Feisbuk!</h1>
      <form onSubmit={(e) => showDataForm(e)}>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Insert your email"
          aria-label="Insert your email"
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
        {!localStorage.getItem("email") && (
          <input type="submit" value="Registrati"></input>
        )}
        {localStorage.getItem("email") && <button type="submit">Accedi</button>}
      </form>
    </div>
  );
};

export default FormLoginComponent;
