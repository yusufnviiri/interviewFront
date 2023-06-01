import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:3000/questions/";
const userUrl = "http://localhost:3000/users";
const scoreUrl = "http://localhost:3000/myscore";

export const fetchQuestions = createAsyncThunk("questions/fetch", async () => {
  const data = await axios.get(url);
  return data.data;
});
export const createUser = createAsyncThunk(
  "questions/createUser",
  async (user) => {
    const newUser = await axios.post(userUrl, user);
    return newUser.data;
  }
);
export const loginUser = createAsyncThunk("questions/login", async (user) => {
  const response = await axios.get(
    `${userUrl}/${user.email}?password=${user.password}`
  );
  return response.data;
});
export const getScore = createAsyncThunk("questions/getScore", async (user) => {
  const score = await axios.get(`${scoreUrl}?email=${user.email}`);
  return score.data;
});
export const allReplys = createAsyncThunk("questions/replys", async () => {
  const myreplys = await axios.get("http://localhost:3000/all_replies");

  return myreplys.data;
});
export const updateReply = createAsyncThunk("qustions/update", async (data) => {
  const updatedReply = await axios.put(
    `http://localhost:3000/questions/${data.page}/reply/${data.page}`,

    {
      selection: data.selection,
      user_id: data.id,
    }
  );

  return updatedReply.data;
});
export const fetchReplys = createAsyncThunk("questions/replies", async (id) => {
  const response = [];
  const replyArray = await axios.get(
    `http://localhost:3000/questions/${id}/reply`
  );
  response.push(replyArray.data);

  return response;
});

export const questionSlice = createSlice({
  name: "questions",
  initialState: {
    count: 1,
    score: 0,
    questions: [],
    reply: [],
    user: null,

    userResponse: {
      selection: " funny sayings ",
    },
  },
  reducers: {
    add: (state, action) => {
      state.count = state.count + 1;
    },
    sub: (state, action) => {
      state.count = state.count - 1;
    },
    reset: (state, action) => {
      state.count = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });

    builder.addCase(allReplys.fulfilled, (state, action) => {
      state.reply = action.payload;
    });
    builder.addCase(getScore.fulfilled, (state, action) => {
      state.score = action.payload;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.length < 1) {
        alert("User with such email is not registered");
      } else {
        state.user = action.payload[0];
      }
    });
    builder.addCase(fetchReplys.fulfilled, (state, action) => {
      state.reply = action.payload;
    });
  },
});
export const { add, sub, reset } = questionSlice.actions;
export default questionSlice.reducer;
