import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import forgotReducer from "./slices/forgotSlice";
import profileReducer from "./slices/profileManagementSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    forgot: forgotReducer,
    profile: profileReducer,
  },
});

export default store;
