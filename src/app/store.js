import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "../features/question/questionSlice";
import userSlice from "../features/user/userSlice";

const store = configureStore({
    reducer: {
        question: questionSlice,
        user: userSlice
    }
})

export default store