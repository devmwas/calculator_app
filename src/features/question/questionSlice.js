import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizNo: 0
}

const questionSlice = createSlice({
    name: 'question',
    initialState,

    reducers: {
        next: state => {
            state.quizNo++
        },
        prev: state => {
            state.quizNo--
        },
        resetQuestions: state => {
            state.quizNo =  0
        }
    }
})

export default questionSlice.reducer
export const {next, prev, resetQuestions} = questionSlice.actions