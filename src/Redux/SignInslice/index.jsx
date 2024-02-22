import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const SignInRequest = createAsyncThunk("admin/data", async (admin) => {
  try {
    // const { data } = axios.post("/access", { email, pass });

    const { email, pass } = admin;

    console.log(email , pass , "ooooo")

    const res = await axios.post(
      "https://star-bike-backend.vercel.app/admin/adminlogin",
      { email: email, password: pass }
    );

  

    return res;
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

    loginNavigate(state){
      return(state.adminData);
      // localStorage.setItem("admin" , state.adminData) ;
      // state.adminData.token != null ? <Navigate to="/"/>:<></>
    }
  },

  extraReducers: (request) => {
    request.addCase(SignInRequest.fulfilled, (state, action) => {
      const p = action.payload;
      const { token ,user } = p.data;
      state.adminData.token = token;
      state.adminData.username = user.name;


    });
  },
});
export const { updateData ,loginNavigate } = SignInSlice.actions;
export default SignInSlice;
