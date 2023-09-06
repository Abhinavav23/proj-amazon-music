import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const navigate =  useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userInfo", userInfo);
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
      <button onClick={() => navigate('/signup')}>SignUp here !</button>
    </section>
  );
};
