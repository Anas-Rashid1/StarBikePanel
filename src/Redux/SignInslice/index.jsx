import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SignInRequest = createAsyncThunk("admin/data", async () => {
  try {
    // const { data } = axios.post("/access", { email, pass });

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    return data;
  } catch (error) {
    console.log("Something went Worng");
  }
});

const SignInSlice = createSlice({
  name: "SignInSlice",
  initialState: {
    adminData: {
      token: null,
      name: null,
      phoneNumber: null,
      check: "AAA",
    },
  },
  reducers: {
    updateData(state) {
      console.log("Hello");
    },
  },

  extraReducers: (request) => {
    request.addCase(SignInRequest.fulfilled, (state, action) => {
      console.log("hehe", action.payload);
    });
  },
});
export const { updateData } = SignInSlice.actions;
export default SignInSlice;
