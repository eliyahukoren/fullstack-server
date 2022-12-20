import { createSlice } from "@reduxjs/toolkit";

export const anySlice = createSlice({
	name: "anyReducer",
	initialState: {},
	reducers: {
		simplement: (state, action) => {
			console.log("dispatched simplement", {state, action});
		},
	},
});

export const { simplement } = anySlice.actions;
export default anySlice.reducer;
