import React from 'react'
import { useSelector } from 'react-redux'

function WorkSpace() {
  const firstOperand = useSelector(state => state.workspace.firstOperand)
  const currentOperand = useSelector(state => state.workspace.currentOperand)
  const operator = useSelector(state => state.workspace.operator)

  return (
    <div className='border-2 m-2' style={{minHeight: 100}}>
        <div className='text-start text-2xl p-2 break-words' style={{minHeight: 60}}>
            {/* We add commas to separate the digits for improved readability */}
            { firstOperand == null ? null : 
                parseFloat(firstOperand).toLocaleString('en-US')}{' '}{operator}
        </div>
        <div className='text-end text-4xl p-2 break-words' style={{minHeight: 60}}>
            {/* We add commas to separate the digits for improved readability */}
            { currentOperand == null ? 
                currentOperand : parseFloat(currentOperand).toLocaleString('en-US')}
        </div>
    </div>
  )
}

export default WorkSpace