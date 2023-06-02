import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import alert from "alerts";

import { gsap } from "gsap";

import { updateReply } from "../redux/replySlice";

function Pagination(props) {
  const user = useSelector((state) => state.questions.user);
  const count = useSelector((state) => state.questions.count);

  useEffect(() => {
    gsap.fromTo(
      "#item",
      { backgroundColor: "teal", color: "green", x: -500 },
      {
        color: "rebeccapurple",
        backgroundColor: "white",
        stagger: {
          amount: 0.2,
          grid: "auto",
          from: "start",
        },
        scale: 0.9,
        x: 20,
        duration: 5,
      }
    );
  }, [count]);

  const [selection, setSelection] = useState("");

  const dispatch = useDispatch();

  const toggleCheck = (e) => {
    const checkBoxes = document.querySelectorAll(".inline");

    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i] == e.target) {
        setSelection(e.target.id);
        checkBoxes[i].checked = true;
      } else {
        checkBoxes[i].checked = false;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAnswer = {
      page: count,

      selection,
      id: user.id,
    };

    setTimeout(() => {
      dispatch(updateReply(userAnswer));
    }, 2000);

    alert("saved!!click next to continue!!", {
      timeout: 2000,
      className: "alert",
    });
  };

  const data = props.data;

  return (
    <div className=" bg-sky-200 mt-20 " id="item">
      {count < 11 ? (
        <div className="text-left ml-[20%]">
          <form onSubmit={(e) => handleSubmit(e, count)}>
            <p
              id={data.id}
              name="topic"
              className=" text-sm underline text-blue-700 font-bold "
            >
              {" "}
              <span className="text-blue-700 font-semibold pr-5">
                {data.question_id}
              </span>
              {`${data.topic} ?`}
            </p>
            <p className=" text-sm pl-[70px] font-extrabold">
              {" "}
              <input
                type="checkbox"
                id={data.option1}
                onClick={(e) => toggleCheck(e)}
                name="option1"
                className="inline "
              />{" "}
              {`${data.option1} `}
            </p>
            <p className=" text-sm pl-[70px] font-extrabold">
              {" "}
              <input
                type="checkbox"
                id={data.option2}
                onClick={(e) => toggleCheck(e)}
                name="option2"
                className="inline"
              />{" "}
              {`${data.option2} `}
            </p>
            <p className=" text-sm pl-[70px] font-extrabold">
              {" "}
              <input
                type="checkbox"
                id={data.option3}
                onClick={(e) => toggleCheck(e)}
                name="option3"
                className="inline"
              />{" "}
              {`${data.option3} `}
            </p>
            <p className=" text-sm pl-[70px] font-extrabold">
              {" "}
              <input
                type="checkbox"
                id={data.option4}
                onClick={(e) => toggleCheck(e)}
                name="option4"
                className="inline"
              />{" "}
              {`${data.option4} `}
            </p>

            <button
              id={data.question_id}
              className="rounded bg-violet-700  text-zinc-300 px-4 ml-[7%] my-4"
            >
              {" "}
              SUBMIT{" "}
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-[olive] text-black">'The End'</div>
      )}
    </div>
  );
}

Pagination.propTypes = {};

export default Pagination;
