import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { loginUser } from "../redux/replySlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import secrity from "../assets/images/secrity1.jpg";

function Login() {
  const [login, setLogin] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (login) {
      navigate("/questions");
    }
  }, [login]);

  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    if (email && password) {
      dispatch(loginUser(userData));
      setLogin(true);
    } else {
      alert("Please fill both fields");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className=" bg-slate-900 pb-5 pl-8  w-100 h-[100vh] flex">
        <div className="w-[60%] pt-11  ">
          <form onSubmit={(e) => handleSubmit(e)} id="loginForm">
            <h4 className=" text-indigo-200  mx-auto  ">LOGIN FORM</h4>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={() => setEmail("")}
              className=" bg-zinc-100   text-center"
              placeholder="email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={() => setPassword("")}
              className=" bg-zinc-100 block  text-center "
              placeholder="password"
            />

            <button
              type="submit"
              className=" bg-indigo-500 w-[15%] mx-auto rounded-full  px-3 mt-4 mb-3"
            >
              {" "}
              SUBMIT
            </button>
            <p className="text-sm text-white  mb-4 ">or</p>

            <Link
              to={"/register"}
              id="registerLink"
              className=" bg-indigo-500 w-[15%] mx-auto rounded-full font-sans px-3 "
            >
              {" "}
              REGISTER{" "}
            </Link>
          </form>
        </div>
        <div>
          <img
            src={secrity}
            className=" rounded-2xl  h-[100vh] w-[100%]"
            alt="login"
          />
        </div>
      </div>
    </>
  );
}

export default Login;
