import { configureStore } from "@reduxjs/toolkit";
import RegisterUserSlice from "./feature/RegisterUserSlice";

const Store = configureStore({
  reducer: {
    userKey: RegisterUserSlice,
  },
});

export default Store;
