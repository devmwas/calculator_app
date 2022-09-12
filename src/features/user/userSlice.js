import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    score: 0
}

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        resetScore: state => {
            state.score = 0
        },
        add: state => {
            state.score++
        }
    }
})

export default userSlice.reducer
export const { setName, resetScore, add } = userSlice.actions