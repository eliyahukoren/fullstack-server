import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {},
	reducers: {
		increment: (state, action) => {
			console.log("dispatched increment", {state, action});
		},
	},
});

export const { increment } = authSlice.actions;
export default authSlice.reducer;
