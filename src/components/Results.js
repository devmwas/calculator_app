import { Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { questionsData } from '../data'
import { resetQuestions } from '../features/question/questionSlice'
import { resetScore } from '../features/user/userSlice'


function Results() {
  const navigate = useNavigate()
  const name = useSelector(state => state.user.name)
  const dispatch = useDispatch()
  const score = useSelector(state => state.user.score)
  console.log('Score: ', score)

  const quizes = questionsData.map((question, index) => {
      return (
        <div key={index}>
          {/* We print all the question texts */}
            <div className='my-8 px-8'>
                { index+1 + '. ' + question.quizText }
            </div>
            <div className='flex flex-col align-start space-y-2 px-8'>
              {/* Here we print all the options for each question */}
              {
                question.options.map((option, index) => {
                    return <Button 
                      key={index}
                      variant='contained'
                      color= { question.answer == index ? 'success' : 'warning' }
                      >
                          { option }
                      </Button>
                })
              }
            </div>
        </div>
      )
  })

  return (
    <div className='bg-white text-3xl flex flex-col my-24'>
        <div className='text-center font-bold'>
            Hello { name }. Your Score is: { score }
        </div>

        {/* Questions with answers */}
        <div className='text-center text-4xl my-6 px-4'>
            These are the questions with answers. The correct answer is colored in green
        </div>

        {
          quizes
        }

        <div className='px-8 text-center pt-8'>
            <Button variant='contained' color='success' onClick={() => {
                dispatch(resetQuestions())
                dispatch(resetScore())
                navigate('/')
            }}>
                RESTART QUIZ
            </Button>
        </div>
    </div>
  )
}

export default Results