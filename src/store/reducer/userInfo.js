import {createSlice} from '@reduxjs/toolkit';

const initialState = { username:"", age:"", time:"" }

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state, {payload}) => {
            state.username = payload;
        },
        setUserAge: (state, {payload}) => {
            state.age = payload;
        },
        setUserTime: (state, {payload}) => {
            state.time = payload;
        }
    }
});

export const {setUserName, setUserTime, setUserAge} = userSlice.actions;

export default userSlice.reducer;