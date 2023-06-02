import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { add, sub, reset } from "../redux/replySlice";
import Login from "./Login";
import Pagination from "./Pagination";
import { allReplys, getScore } from "../redux/replySlice";
import { useUsers } from "./api";
const Question = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const count = useSelector((state) => state.questions.count);
  const user = useSelector((state) => state.questions.user);

  const usersList = useUsers(page);

  const clearChecked = () => {
    const checkBoxes = document.querySelectorAll(".inline");

    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].checked = false;
    }
  };
  const nextItem = () => {
    setPage(page + 1);
    clearChecked();

    dispatch(add());
  };
  const prevItem = () => {
    setPage(page - 1);
    clearChecked();

    dispatch(sub());
  };

  const resetCount = () => {
    setPage(1);
    dispatch(reset());
    if (user) {
      dispatch(getScore(user));
    }
  };
  useEffect(() => {
    dispatch(allReplys());
  }, [dispatch]);

  return (
    <>
      {user ? (
        <div className="bg-white">
          <div className="flex absolute right-10 top-10">
            <button
              className="bg-violet-800 rounded-full px-5 mr-2 text-zinc-300"
              disabled={page === 1}
              onClick={() => {
                prevItem();
              }}
            >
              PREV
            </button>
            <h4>{count}</h4>
            {page < 11 ? (
              <button
                className="bg-violet-800 rounded-full px-5 mx-2  text-zinc-300"
                onClick={() => {
                  nextItem();
                }}
              >
                NEXT
              </button>
            ) : (
              <button
                className="bg-violet-800 rounded-full px-5 mx-2  text-zinc-300"
                onClick={() => {
                  resetCount();
                }}
              >
                THE END
              </button>
            )}{" "}
          </div>

          {usersList.data && usersList.isSuccess ? (
            <Pagination data={usersList.data} />
          ) : (
            <p className="text-semi-bold bg-indigo-100  text-zinc-700">
              loading questions
            </p>
          )}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
export default Question;
