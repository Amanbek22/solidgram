import React from "react";
import Input from "../../components/input/Input";
import classes from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div>
      <form className={classes.form}>
        <Input type="text" placeholder="login" />
        <Input type="password" placeholder="password" />
        <button className="btn">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;
