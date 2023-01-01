import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const workspaceSlice = createSlice({
    name: 'workspace',
    initialState,

    reducers: {
        addDigit: (state, action) => {
            // We dont want to add unnecessary zeros infront of our operands
            if(state.currentOperand === '0' & action.payload === '0') return state 

            // We don't want to add many decimal points
            if(state.currentOperand?.includes('.') & action.payload === '.') return state

            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${action.payload}`
            }
        },
        chooseOperator: (state, action) => {
            if(state.firstOperand == null & state.currentOperand == null) return state
            
            if(state.firstOperand == null) {
                return {
                    firstOperand: state.currentOperand,
                    currentOperand: null,
                    operator: action.payload
                }
            }

            if(state.currentOperand == null) {
                return {
                    ...state,
                    operator: action.payload
                }
            }

            return {
                firstOperand: evaluate(state),
                currentOperand: null,
                operator: action.payload
            }          
        },
        getResult: (state) => {
            if(state.currentOperand == null & state.firstOperand == null & state.operator == null) {
                return state
            }
            return {
                operator: null,
                currentOperand: evaluate(state),
                firstOperand: null
            }
        }
    }
})

const evaluate = (state) => {
    const first = parseFloat(state.firstOperand)
    const current = parseFloat(state.currentOperand)
    let result = ''

    if(isNaN(first) || isNaN(current)) return state

    switch(state.operator){
        case "+":
            result =  first + current
            break
        case "-":
            result =  first - current
            break
        case "*":
            result =  first * current
            break
        case "/":
            result =  first / current
            break
    }
    return result
}

export default workspaceSlice.reducer
export const { addDigit, chooseOperator, getResult } = workspaceSlice.actions