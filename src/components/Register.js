import React from "react";

import { useNavigate } from "react-router-dom";
import secrity from "../assets/images/secrity.jpg";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/replySlice";

function Register() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    if (login) {
      navigate("/questions");
    }
  }, [login]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("name");
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState(" ");
  const validate = (email, password, newPassword) => {
    var validEmail = true,
      validPassword = true,
      validNewPassword = true;
    if (!email) {
      alert("Please enter email address");
      validEmail = false;
      return validEmail;
    } else if (!password) {
      alert("Please enter password");
      validPassword = false;
      return validPassword;
    } else if (!newPassword) {
      alert("Please enter confirmation password");
      validNewPassword = false;
      return validNewPassword;
    }

    if (password !== newPassword) {
      alert("Password and confirmation password do not match");
      return false;
    }

    if (validEmail && validPassword && validNewPassword) {
      setPassword("");
      setNewPassword("");
      setEmail("");
      setName("");
      setLogin(true);

      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate(email, password, newPassword);
    if (validate(email, password, newPassword)) {
      const user = { email, password, name };
      dispatch(createUser(user));
    }
  };

  return (
    <>
      <div className=" bg-slate-900 pb-5 pl-8  w-100 h-[100vh] flex">
        <div className="w-[70%] pt-11  ">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            autoComplete="false"
            id="registerForm"
          >
            <h4 className=" text-indigo-200  mx-auto  ">REGISTRATION FORM</h4>

            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onFocus={() => setName("")}
              className="w-full border-spacing-4 bg-zinc-100 rounded-full mt-4 text-center"
              placeholder="name"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={() => setEmail("")}
              className="w-full border-spacing-4 bg-zinc-100 rounded-full mt-4 text-center"
              placeholder="email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={() => setPassword("")}
              className="w-full border-spacing-4 bg-zinc-100 rounded-full mt-4 text-center "
              placeholder="password"
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              onFocus={() => setNewPassword("")}
              className="w-full border-spacing-4 bg-zinc-100 rounded-full mt-4 text-center "
              placeholder=" confirm password"
            />

            <button
              type="submit"
              className=" bg-indigo-500 w-[15%] mx-auto block rounded-full  px-3 mt-4 mb-3"
            >
              {" "}
              SUBMIT
            </button>

            <p className="text-sm text-white  mb-4 ">or</p>

            <Link
              to={"/"}
              id="registerLink"
              className=" bg-indigo-500 w-[20%] mx-auto rounded-full  px-3"
            >
              {" "}
              LOGIN{" "}
            </Link>
          </form>
        </div>
        <div>
          <img
            src={secrity}
            className=" rounded-2xl  h-[100vh] w-[100%]"
            alt="register"
          />
        </div>
      </div>
    </>
  );
}

export default Register;
