import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHeaderWithProjectIDAndBody } from "../utils/configs";

export const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const signIn = async (userInfo) => {
    const headerConfigs = getHeaderWithProjectIDAndBody();
    try{
        const res = await axios.post(
            "https://academics.newtonschool.co/api/v1/user/login",
            {
              ...userInfo,
              appType: "music",
            },
            headerConfigs
          );
          console.log('response', res);
    }catch(err){
        console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(userInfo);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="username"
          value={userInfo.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Sign in" />
      </form>
      <p>Not a User already ?</p>
      <button onClick={() => navigate("/signup")}>SignUp here !</button>
    </section>
  );
};
