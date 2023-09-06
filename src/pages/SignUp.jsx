import axios from "axios";
import React, { useState } from "react";
import { getHeaderWithProjectIDAndBody } from "../utils/configs";

export const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const sendCreateUserReq = async (body) => {
    const config = getHeaderWithProjectIDAndBody(body);

    const res = await axios.post(
      "https://academics.newtonschool.co/api/v1/user/signup",
      config
    );
    console.log("res", res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userInfo", userInfo);
    sendCreateUserReq({ ...userInfo, appType: "music" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={userInfo.name}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        id="email"
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
      <input type="submit" value="Sign Up" />
    </form>
  );
};
