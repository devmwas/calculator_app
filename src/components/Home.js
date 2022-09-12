import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setName } from '../features/user/userSlice'

function Home() {
  const [localName, setLocalName] = useState('')  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nameIsEmpty, setNameIsEmpty] = useState(false)

  const startQuiz = () => {
      if(!localName) {
        // alert('Name cannot be blank!')
        setNameIsEmpty(true)
      } else {
        dispatch(setName(localName))
        navigate('/quiz')
      }
  }

  return (
    <div className='bg-white text-3xl flex flex-col my-24'>
        <div className='mb-4 text-center'>
            Enter Your Name
        </div>

        {
            nameIsEmpty ? <div className='text-center mb-4 text-red-400'>
                Name Cannot Be Empty!
              </div> : null
        }

        <div className='flex mx-auto'>
            <TextField id="outlined-basic"
                label='Name'
                variant="outlined"
                color= {nameIsEmpty ? 'warning' : 'primary' }
                onChange={e => setLocalName(e.target.value)}
                value={localName}
            />
        </div>
        <div className='flex mt-4 mx-auto'>
            <Button variant='contained' color='success' onClick={startQuiz}>
                START QUIZ
            </Button>
        </div>
    </div>
  )
}

export default Home