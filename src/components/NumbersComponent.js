import React from 'react'
import NumberComponent from './NumberComponent'

function NumbersComponent() {
    const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', '=']
    const numberComponents = numbers.map((number, index) => {
        return (
            // NumberComponent(number)
            <div key={index} className='w-1/3 flex'>
                {NumberComponent(number)}
            </div>
        )
    })

  return (
    <div className='w-4/5 flex flex-wrap mt-4'>
        {numberComponents}
    </div>
  )
}

export default NumbersComponent