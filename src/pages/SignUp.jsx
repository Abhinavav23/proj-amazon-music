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

  const signUp = async (userInfo) => {
    userInfo.appType = "music";

    const headerConfig = getHeaderWithProjectIDAndBody();
    try {
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        userInfo,
        headerConfig
      );
      console.log("res", res);
      if(res.data.token){
        sessionStorage.setItem("authToken", res.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
      }
      
    } catch (err) {
        if(err){
            console.log(err.response.data.message);
        }
    }

    // using fetch
    // const config = {
    //     method: 'POST',
    //     headers: {
    //         projectId: "ihgyfmp0d322",
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(userInfo)
    // }

    // const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup', config);
    // const data = await res.json()
    // console.log('data', data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(userInfo);
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
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        id="email"
        value={userInfo.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        value={userInfo.password}
        onChange={handleChange}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
};
