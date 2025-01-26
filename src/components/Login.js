import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";

import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";


const Login = () =>{
    const [isSignInForm, setIsSignInForm]=useState(true);
    const [errorMessage, setErroeMessage]=useState(null);
    
    const dispatch=useDispatch();
    const navigate= useNavigate();

    const email =useRef(null);
    const password =useRef(null);
    const handleButtonClick = ()=>{
        //checkValidateData(email,password);
        console.log(email.current.value);
        console.log(password.current.value);

         const message=checkValidateData(email.current.value,password.current.value);
       setErroeMessage(message);
       if(message) return;

       if(!isSignInForm){
        createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    updateProfile(user, {
      // eslint-disable-next-line no-restricted-globals
      displayName: name.current.value,
       photoURL: USER_AVATAR
    }).then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(
                addUser({
                  uid:uid, 
                  email: email, 
                  displayName:displayName,
                  photoURL:photoURL 
                })
                );
              
      
    }).catch((error) => {
     setErroeMessage(error.message)
    });
    
    console.log(user);
    navigate("/browse")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErroeMessage(errorCode + "_" + errorMessage);

 
  });

       }
       else{
        signInWithEmailAndPassword(auth, 
          email.current.value,
          password.current.value)
  .then((userCredential) => {
  
    // eslint-disable-next-line no-unused-vars
    const user = userCredential.user;
     console.log(user);
     navigate("/browse")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErroeMessage(errorCode+"_"+errorMessage)
  });


       }

    }


    const toggleSignInForm= ()=>{
        setIsSignInForm(!isSignInForm)

    }
    return(
        <div>
            <Header/>
            <div className="absolute">
            <img className="min-h-screen object-cover"
            src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png"
            alt="logo"
            
            />
        </div>
        <form onSubmit={(e)=>e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
                {isSignInForm ? "Sign In": "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input 
            type="text" 
            placeholder="Full Name" 
            className="p-4 my-4 w-full bg-gray-700" 
            />
            )} 
            <input 
            ref={email}
            type="text" 
            placeholder="Email Address" 
            className="p-4 my-4 w-full bg-gray-700 " 
            />
           
            <input 
            ref={password}
            type="password" 
            placeholder="password" 
            className="p-4 my-4 w-full bg-gray-700" 
            />
            <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In": "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now": "Already registered? Sign In Now..."}
                  
                    </p>
        </form>
        </div>
    )
}
export default Login;