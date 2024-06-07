import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../modules/user/redux/index"

const store = configureStore({
    reducer:{
      user:userReducer
    }
})

export default store;