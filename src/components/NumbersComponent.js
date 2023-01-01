import React from 'react'
import NumberComponent from './NumberComponent'

function NumbersComponent() {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '.', '9', '=']
    const numberComponents = numbers.map((number, index) => {
        return (
            <div key={index} className='w-1/3 my-2 flex justify-around'>
                {NumberComponent(number)}
            </div>
        )
    })

  return (
    <div className='w-3/5 bg-slate-500 flex flex-wrap my-4 p-4 justify-center'>
        {numberComponents}
    </div>
  )
}

export default NumbersComponent