import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        surname: "",
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.surname = action.payload.surname;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
