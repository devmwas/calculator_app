import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const workspaceSlice = createSlice({
    name: 'workspace',
    initialState,

    reducers: {
        // Updating our operands
        addDigit: (state, action) => {
            // We dont want to add unnecessary zeros infront of our operands
            if(state.currentOperand === '0' & action.payload === '0') return state 

            // We don't want to add more than one decimal points
            if(state.currentOperand?.includes('.') & action.payload === '.') return state

            // If currentOperand is null, then we add the digit to an empty string
            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${action.payload}`
            }
        },
        // Choosing the kind of operation to perform
        chooseOperator: (state, action) => {
            if(state.firstOperand == null & state.currentOperand == null) {
                // We barr users from starting an operation with multiplication or division
                if(action.payload === '*' || action.payload === '/') {
                    return state          
                }

                // Here we allow users to start an operation with a plus or minus
                return {
                    ...state,
                    currentOperand: action.payload
                }
            }

            // Here we prevent users from adding two consecutive operators
            if(state.currentOperand === '+' || state.currentOperand === '-' || 
            state.currentOperand === '*'
            || state.currentOperand === '/') {
                // We barr users from updating the first operator with multiplication or division
                if(action.payload === '*' || action.payload === '/') {
                    return state          
                }
                return {
                    ...state,
                    currentOperand: action.payload
                }
            }

            // Updating the first operand of our operation
            if(state.firstOperand == null) {
                return {
                    firstOperand: state.currentOperand,
                    currentOperand: null,
                    operator: action.payload
                }
            }

            // Updating the operator of our operation
            if(state.currentOperand == null) {
                return {
                    ...state,
                    operator: action.payload
                }
            }

            // If they choose an operator while having input first and current operand, we 
            // perform the calculation and store the answer in the first operand 
            return {
                firstOperand: evaluate(state),
                currentOperand: null,
                operator: action.payload
            }          
        },
        getResult: (state) => {
            if(state.currentOperand == null || state.firstOperand == null || state.operator == null) {
                return state
            }
            return {
                operator: null,
                currentOperand: evaluate(state),
                firstOperand: null
            }
        },
        // Deleting the current operand of our operation
        deleteOperand: state => {
            return {
                ...state,
                currentOperand: null
            }
        }
    }
})

// Performing our operation depending on the values in state
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
        default:
            return state
    }
    return result.toString()
}

export default workspaceSlice.reducer
export const { addDigit, chooseOperator, getResult, deleteOperand } = workspaceSlice.actions