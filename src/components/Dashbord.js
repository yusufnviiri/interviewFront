import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Dashbord() {
  const user = useSelector((state) => state.questions.user);
  const score = useSelector((state) => state.questions.score);

  return (
    <>
      <div className="bg-black text-white pl-10">
        <ul className="flex flex-row justify-between ">
          <li> Candidate: {user ? user.name : "none"} </li>
          <li>
            {" "}
            {user ? <Link to={"/"}>LOGOUT</Link> : <Link to={"/"}>LOGIN</Link>}
          </li>
          <li> Score:{score}</li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Dashbord;
