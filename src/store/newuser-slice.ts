import { createSlice } from "@reduxjs/toolkit";

const newuserSlice = createSlice({
    name : 'newuser',
    initialState:{isNewUser:true},
    reducers:{
        login(state){
            state.isNewUser=true;
        },
        logout(state){
            state.isNewUser=false;
        }
    }
})

export const newuserActions = newuserSlice.actions;

export default newuserSlice