import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import newuserSlice from "./newuser-slice";
const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        newuser:newuserSlice.reducer,
    }
})

export default store;