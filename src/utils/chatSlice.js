import { createSlice } from "@reduxjs/toolkit";  // Importing createSlice from Redux Toolkit
import { LIVE_CHAT_COUNT } from "./helper";

const chatSlice = createSlice({
    name: "chat",  // Name of the slice
    initialState: {
        text: []  // Initial state of the slice, an empty array for texts
    },
    reducers: {  // Reducer functions to handle actions and update the state
        addText: (state, action) => {  // Reducer function to add new text
            state.text.splice(LIVE_CHAT_COUNT,1);
            state.text.unshift(action.payload);  // Add the new text from action.payload to the text array
        }
    }
});

export const { addText } = chatSlice.actions;  // Exporting the action creator for addText
export default chatSlice.reducer;  // Exporting the reducer function as the default export
