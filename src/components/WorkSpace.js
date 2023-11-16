import React from 'react'
import { useSelector } from 'react-redux'

function WorkSpace() {
  const firstOperand = useSelector(state => state.workspace.firstOperand)
  const currentOperand = useSelector(state => state.workspace.currentOperand)
  const operator = useSelector(state => state.workspace.operator)

  return (
    <div className='border-2 m-2' style={{minHeight: 100}}>
        <div className='text-start text-2xl p-2 break-words' style={{minHeight: 60}}>
            { firstOperand == null ? null : 
                /* We add commas to separate the digits for improved readability */
                parseFloat(firstOperand).toLocaleString('en-US')}{' '}{operator}
        </div>
        <div className='text-end text-4xl p-2 break-words' style={{minHeight: 60}}>
            { currentOperand == null ? 
                // We don't show the NaN when a user starts with a plus or minus
                currentOperand : isNaN(parseFloat(currentOperand)) ? currentOperand :
                /* We add commas to separate the digits for improved readability */
                parseFloat(currentOperand).toLocaleString('en-US')}
        </div>
    </div>
  )
}

export default WorkSpace