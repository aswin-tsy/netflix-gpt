import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormValues } from "../utils/validate";

const Login = () => {
  const [isSign, setSignIn] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [errorMessage, setErrormessage] = useState(null);

  const validateForm = () =>{

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
   

    if(!isSign){
       const  name = nameRef.current.value;
         const message = validateFormValues(email,password,name);
         setErrormessage(message);
    }else{
        const message = validateFormValues(email,password);
        setErrormessage(message);
    }
   
  }

  const toggleSignIn = () => {
    setSignIn(!isSign);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/GB-en-20241202-TRIFECTA-perspective_7343d7e6-ab20-42de-aaed-8119929932f9_large.jpg"
          alt="logo"
        />
      </div>
      <form
        className=" flex flex-col gap-6 h-[500px] rounded-lg absolute my-[150px]
       w-3/12 mx-auto left-0 right-0 bg-black text-white pt-14 pb-16 px-12 opacity-90"
       onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl">{isSign ? "Sign In" : "Sign Up"}</h1>
        {!isSign && (
          <input
            type="text"
            ref={nameRef}
            placeholder="Full Name"
            className=" bg-gray-600 placeholder:font-semibold rounded-lg 600 px-2 py-4 w-full outline-none"
          />
        )}
        <input
          type="text"
          ref={emailRef}
          placeholder="Email or Phone Number"
          className=" bg-gray-600  placeholder:font-semibold rounded-lg 600 px-2 py-4 w-full outline-none"
        />
        <input
          type='password'
          ref={passwordRef}
          placeholder="Password"
          className=" bg-gray-600  placeholder:font-semibold rounded-lg px-2 py-4 w-full outline-none"
        />
        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button onClick={validateForm} className="bg-red-700 p-4 text-[18px] font-bold rounded-lg w-full border-none">
          {isSign ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-semibold cursor-pointer" onClick={toggleSignIn}>
          {isSign ? "New to netflix? Sign Up" : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
