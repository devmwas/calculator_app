import React from 'react'
import { useSelector } from 'react-redux'

function WorkSpace() {
  const firstOperand = useSelector(state => state.workspace.firstOperand)
  const currentOperand = useSelector(state => state.workspace.currentOperand)
  const operator = useSelector(state => state.workspace.operator)

  return (
    <div className='border-2 m-2' style={{minHeight: 100}}>
        <div className='text-start text-2xl p-2 break-words' style={{minHeight: 50}}>
            { firstOperand }{' '}{ operator }
        </div>
        <div className='text-end text-4xl p-2 break-words' style={{minHeight: 50}}>
            { currentOperand }
        </div>
    </div>
  )
}

export default WorkSpace