import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./reducer/userInfo";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
