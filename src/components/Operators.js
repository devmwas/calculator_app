import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { chooseOperator, deleteOperand } from '../features/workspace/workspaceSlice'

function Operators() {
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col bg-black mt-4 w-1/5'>
        <div style={{height: '20%'}}>
            <Button color='warning' variant='contained' fullWidth style={{borderRadius: '0%', 
            height: '100%' }}
                onClick={() => dispatch(chooseOperator('+'))}
            >
                <div className='text-lg md:text-4xl'>+</div>
            </Button>
        </div>
        
        <div style={{height: '20%'}}>
            <Button color='warning' variant='contained' fullWidth style={{borderRadius: '0%', 
            height: '100%'}}
                onClick={() => dispatch(chooseOperator('-'))}
            >
                <div className='text-lg md:text-4xl'>-</div>
            </Button>
        </div>

        <div style={{height: '20%'}}>
            <Button color='warning' variant='contained' fullWidth style={{borderRadius: '0%',
            height: '100%'}}
                onClick={() => dispatch(chooseOperator('*'))}
            >
                <div className='text-lg md:text-4xl'>*</div>
            </Button>
        </div>

        <div style={{height: '20%'}}>
            <Button color='warning' variant='contained' fullWidth style={{borderRadius: '0%',
            height: '100%'}}
                onClick={() => dispatch(chooseOperator('/'))}
            >
                <div className='text-lg md:text-4xl'>/</div>
            </Button>
        </div>

        <div style={{height: '20%'}}>
            <Button color='warning' variant='contained' fullWidth style={{borderRadius: '0%',
            height: '100%'}}
                onClick={() => dispatch(deleteOperand())}
            >
                <div className='text-lg md:text-4xl'>DEL</div>
            </Button>
        </div>
    </div>
  )
}

export default Operators