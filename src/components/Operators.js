import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { chooseOperator, deleteOperand } from '../features/workspace/workspaceSlice'

function Operators() {
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col mt-4 w-1/5'>
        <Button color='warning' variant='contained' style={{borderRadius: '0%'}}
            onClick={() => dispatch(chooseOperator('+'))}
        >
            <div className='text-lg md:text-4xl'>+</div>
        </Button>
        <Button color='warning' variant='contained' style={{borderRadius: '0%'}}
            onClick={() => dispatch(chooseOperator('-'))}
        >
            <div className='text-lg md:text-4xl'>-</div>
        </Button>
        <Button color='warning' variant='contained' style={{borderRadius: '0%'}}
            onClick={() => dispatch(chooseOperator('*'))}
        >
            <div className='text-lg md:text-4xl'>*</div>
        </Button>
        <Button color='warning' variant='contained' style={{borderRadius: '0%'}}
            onClick={() => dispatch(chooseOperator('/'))}
        >
            <div className='text-lg md:text-4xl'>/</div>
        </Button>
        <Button color='warning' variant='contained' style={{borderRadius: '0%'}}
            onClick={() => dispatch(deleteOperand())}
        >
            <div className='text-lg md:text-4xl'>DEL</div>
        </Button>
    </div>
  )
}

export default Operators