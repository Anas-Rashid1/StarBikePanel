import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SignInRequest = createAsyncThunk("admin/data", async (admin) => {
  try {
    // const { data } = axios.post("/access", { email, pass });

    const { email, pass } = admin;

    console.log(email , pass , "ooooo")

    const { data } = await axios.post(
      "http://localhost:4000/admin/adminlogin",
      { email: email, password: pass }
    );

    console.log(data , "login data....")

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
      const { token ,user } = p;
      state.adminData.token = token;
      state.adminData.username = user.name;

    });
  },
});
export const { updateData } = SignInSlice.actions;
export default SignInSlice;
