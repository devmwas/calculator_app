import { Button } from "@mui/material";
import React from 'react'
import { useDispatch } from "react-redux";
import { addDigit, getResult } from "../features/workspace/workspaceSlice";

function NumberComponent(number) {
  const dispatch = useDispatch()
  
  return (
    number === '=' ?
    <Button color="success" variant="contained" size='large'
        onClick={() => dispatch(getResult())}
    >
      <div className='text-4xl'>
        {number}
      </div>
    </Button>
    :
    <Button color="success" variant="contained" size='large'
        onClick={() => dispatch(addDigit(number))}
    >
      <div className='text-4xl'>
        {number}
      </div>
    </Button>
  )
}

export default NumberComponent