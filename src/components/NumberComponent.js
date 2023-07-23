import { Button } from "@mui/material";
import React from 'react'
import { useDispatch } from "react-redux";
import { addDigit, getResult } from "../features/workspace/workspaceSlice";

function NumberComponent(number) {
  const dispatch = useDispatch()
  
  return (
    number === '=' ?
    <Button color="success" variant="contained" fullWidth style={{borderRadius: '0%'}}
        onClick={() => dispatch(getResult())}
    >
      <div className='text-lg md:text-4xl'>
        {number}
      </div>
    </Button>
    :
    <Button color="success" variant="contained" fullWidth style={{borderRadius: '0%'}} 
        onClick={() => dispatch(addDigit(number))}
    >
      <div className='text-lg md:text-4xl'>
        {number}
      </div>
    </Button>
  )
}

export default NumberComponent