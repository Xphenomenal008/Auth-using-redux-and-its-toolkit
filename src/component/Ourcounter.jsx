import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/indec'

const Ourcounter = () => {
    const dispatch=useDispatch()

    //useselector is used to get the state out from the store
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showcounter);
    const auth=useSelector(state=>state.auth.isAuth)
    
    //dispatching the action
    const increment=()=>{
        dispatch(counterActions.increment())
        
    }
    const decrement=()=>{
        dispatch(counterActions.decrement())

    }
    
const your=useRef() 
                     
const increseBy=()=>{
  const value=your.current.value
  if(value){
    dispatch(counterActions.incrementL(Number(value)))
  }
}
     
const togglehandler=()=>{

  dispatch(counterActions.showcounter())

}
     
  return (
    <>{auth &&
      <div className="container flex flex-col items-center bg-slate-600 p-8 rounded-lg shadow-lg space-y-6">
      {showCounter && (
        <div className="text-2xl font-bold text-white">
          {counter}
        </div>
      )}
      <div className="flex space-x-4">
        <button 
          onClick={increment} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <button 
          onClick={decrement} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <input 
          type="number" 
          className="w-20 p-2 border rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          ref={your} 
        />
        <button 
          onClick={increseBy} 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increase by Value
        </button>
      </div>
      <button 
        onClick={togglehandler} 
        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
      >
        Toggle
      </button>
    </div>
    
}
    </>
  )
}

export default Ourcounter
