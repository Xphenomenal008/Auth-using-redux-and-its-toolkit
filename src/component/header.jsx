import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/indec'
const Header = () => {
    const auth=useSelector(state=>state.auth.isAuth)
    const dispatch=useDispatch()
    const authhandle=()=>{
        dispatch(authActions.logout())
        
    }
  return (
    <>{auth &&
        <div className="bg-slate-600 p-4 w-full h-16 flex justify-between items-center shadow-lg">
        <div className="text-white font-semibold text-xl">
          ReduxStore
        </div>
        <div className="flex gap-6">
          <div 
            onClick={authhandle} 
            className="text-white cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            Logout
          </div>
          <div className="text-white cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition">
            Products
          </div>
        </div>
      </div>
      
    
}
    
    </>
    
  )
}

export default Header
