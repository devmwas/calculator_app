import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { questionsData } from '../data'
import { next, prev } from '../features/question/questionSlice'
import { add } from '../features/user/userSlice'

function Quiz() {
    const quizNo = useSelector(state => state.question.quizNo)
    const [quizText, setQuizText] = useState(questionsData[0].quizText)
    const [options, setOptions] = useState(questionsData[0].options)
    const [userOption, setUserOption] = useState(-1)
    const [disableNext, setDisableNext] = useState(false)
    const [answered, setAnswered] = useState(true)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const score = useSelector(state => state.user.score)

    const noOfQuestions = questionsData.length
    console.log(noOfQuestions)
    console.log(disableNext)
    console.log('Score: ', score)

    // State updates are asynchronous and therefore we only want to set the after quizNo has updated
    useEffect(() => {
        setQuizText(questionsData[quizNo].quizText)
        setOptions(questionsData[quizNo].options)
        quizNo >= noOfQuestions-1 ? setDisableNext(true) : setDisableNext(false)
        setUserOption(-1)
        setAnswered(true)
    }, [quizNo])
    
    // This function will update quizNo, which will in turn make the useEffect hook to run, updating the
    // question text and options
    const nextQuiz = () => {
        userOption !== -1 ? dispatch(next()) : setAnswered(false)
        if (questionsData[quizNo].answer == userOption) {
            // We increment the score if the user got the question right
            dispatch(add())
        }
    }
    
    // This function will update quizNo, which will in turn make the useEffect hook to run, updating the
    // question text and options
    const prevQuiz = () => {
        dispatch(prev())
    }

    // Upon finishing answering all the questions, we'll redirect the user to results page
    const finishQuiz = () => {
        if(userOption !== -1) dispatch(next())
        if (questionsData[quizNo].answer == userOption) {
            // We increment the score if the user got the question right
            dispatch(add())
        }
        userOption !== -1 ? navigate('/results') : setAnswered(false)
    } 


    const optionButtons = options.map((option, index) => {
        return (<Button key={index} 
                variant='contained' 
                size='large' 
                color={ userOption === index ? 'success' : 'warning' }
                onClick={() => {
                    setUserOption(index)
                }}
                >
                    {option}
                </Button>)
    })

  return (
    <div className='bg-white text-3xl flex flex-col my-24'>
        <div className='text-center'>
            {quizNo+1} / {noOfQuestions}
        </div>
        <div className='my-8 px-8'>
            { quizNo+1 + '. ' + quizText }
        </div>
        <div className='flex flex-col space-y-2 px-8 justify-center'>
            {optionButtons}
        </div>

        {/* We don't want to go to the next question if the current one is unanswered */}
        {
            answered ? null : <div className='px-8 text-center text-red-500 mt-8'>
                Please provide an answer to the current question!
            </div>
        }

        {/* Next and Prev Buttons */}
        <div className='flex mt-8 mx-auto space-x-4'>
            {/* We disable the prev button if the question number is 0 */}
            {/* { quizNo <= 0 ?
                <Button
                    variant='contained' disabled>
                        PREV
                </Button> : 
                <Button
                variant='contained'
                onClick={prevQuiz}>
                    PREV
                </Button>
            } */}


            {/* We disable the next button if we're at the last question */}
            {
                disableNext ?
                <Button variant='contained' disabled>
                    NEXT
                </Button> :
                <Button variant='contained'
                onClick={nextQuiz}>
                    NEXT
                </Button>
            }

            
        </div>
            {/* We show the Finish Quiz Button upon reaching the end of Questions */}
            {
                disableNext ? 
                <div className='mx-auto mt-8'>
                    <Button variant='contained' size='large' onClick={finishQuiz}>
                        FINISH QUIZ
                    </Button>
                </div>  :
                null
            }
    </div>
  )
}

export default Quiz