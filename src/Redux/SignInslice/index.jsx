import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SignInRequest = createAsyncThunk("admin/data", async (admin) => {
  try {
    // const { data } = axios.post("/access", { email, pass });

    const { email, pass } = admin;

    const { data } = await axios.post(
      "https://dummyjson.com/auth/login",
      { username: email, password: pass }
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
      username: null,
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
      const p = action.payload;
      console.log(p , "checkingg p...")
      const { token ,username } = p;

      state.adminData.token = token;
      state.adminData.username = username;
    });
  },
});
export const { updateData } = SignInSlice.actions;
export default SignInSlice;
