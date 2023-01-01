import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseOperator, getResult } from '../features/workspace/workspaceSlice'

function Operators() {
  const dispatch = useDispatch()
  const calculation = useSelector(state => state.workspace.ourCalculation)


  return (
    <div className='flex flex-wrap flex-col bg-slate-500 my-4 p-4 space-y-2 w-2/5'>
        <Button color='success' variant='contained' 
            onClick={() => dispatch(chooseOperator('+'))}
        >
            <div className='text-4xl'>+</div>
        </Button>
        <Button color='success' variant='contained' 
            onClick={() => dispatch(chooseOperator('-'))}
        >
            <div className='text-4xl'>-</div>
        </Button>
        <Button color='success' variant='contained' 
            onClick={() => dispatch(chooseOperator('*'))}
        >
            <div className='text-4xl'>*</div>
        </Button>
        <Button color='success' variant='contained' 
            onClick={() => dispatch(chooseOperator('/'))}
        >
            <div className='text-4xl'>/</div>
        </Button>
        <Button color='success' variant='contained' 
            onClick={() => dispatch(getResult())}
        >
            <div className='text-4xl'>DEL</div>
        </Button>
    </div>
  )
}

export default Operators