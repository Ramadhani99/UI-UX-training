import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userState = {
  updateState: false,
  loading: false,
  User: null,
  error: "",
  response: "",
};

export const registerUser = createAsyncThunk(
  "User/registerUser",
  async (data) => {
    const response = await axios.post("http://localhost:4000/users", data);
    return response.data.data;
  }
);

const RegisterUserSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.User = action.payload;
        state.response = "add";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default RegisterUserSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  RegisterUserSlice.actions;
