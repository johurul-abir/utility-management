import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    message: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase("", (state, actions)=> {
    // })
  },
});

//selectors
export const selectUser = (state) => state.user;

//export default
export default userSlice.reducer;
