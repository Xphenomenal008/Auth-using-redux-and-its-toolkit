 
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/indec';

const Auth = () => {
    const dispatch=useDispatch()
    const auth=useSelector((state)=>state.auth.isAuth)
    const inputref=useRef()
    const emailref=useRef()
    const handleform=(e)=>{
        e.preventDefault()
        const validname=inputref.current.value
        const validemail=inputref.current.value
        if(validname.trim().length !==0 && validemail.trim().length !==0){
            dispatch(authActions.login())

        }else{
            return
        }

    }
    return (
        <>{
            !auth && <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleform} className="bg-white p-8 rounded-lg shadow-md w-96 space-y-6">
                <h1 className="text-2xl font-bold text-gray-700 text-center">
                    Auth Form
                </h1>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        ref={inputref}
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        ref={emailref}
                        id="email"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Enter your email"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                login
                </button>
            </form>
        </div>

        }
       
        
        </>
        
    );
};

export default Auth;

