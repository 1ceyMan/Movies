import './LogIn.css';

import { useContext,useState,useEffect, useRef } from 'react';
import { context } from '../../App.jsx';
import { useValidatEmail, useValidatPassword } from '../validation.js';

const LogIn = () => {

    const {isFormValid,setIsForgetPassword,setIsFormValid} = useContext(context);
    const {HaveAccount,setIsHaveAccount} = useContext(context);
    const [errors, setErrors] = useState({});
    const email = useRef();
    const password = useRef();

    const validateCheckbox = ()=>{
      const ischeked = document.getElementById('terms').checked;
      if(!ischeked){
        setErrors(prev=>({...prev,ischeked:"you must accept terms"}))
        setIsFormValid(false)
        return false;
      }
      setIsFormValid(true);
      setErrors(prev=>({...prev,ischeked:""}))
      return true;
    }


     const validateForm = (e)=>{
      e.preventDefault();
      let isEmailValide = useValidatEmail(email.current.value);
      if(isEmailValide.trim()!=="")
        setErrors(prev=>({...prev,email:isEmailValide}))
      else
        setErrors(prev=>({...prev,email:""}))
      let isValidePassword = useValidatPassword(password.current.value);
      if(isValidePassword.trim()!=="")
        setErrors(prev=>({...prev,password:isValidePassword}))
      else
        setErrors(prev=>({...prev,password:""}))
      let isCheked = validateCheckbox();
      if(isEmailValid.trim()==="" && isPasswordValide.trim()==="" && isCheked)
        setIsFormValid(true);
    }

  return (
    <div className="container LogIn py-5">
      <div className="row ">
        
        <div className="col-md-6 mb-4">
          <h2 className="mb-3">Welcome Back!</h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam, quod. Connect to continue.
          </p>
        </div>

        <div className="col-md-6 ">
          <form className="p-4 shadow rounded bg-white">

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email :</label>
              <input ref={email} id="email" type="email" className="form-control" placeholder="Your email" />
              {errors.email && <p className='text-danger'>{errors.email}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password :</label>
              <input id="password" ref={password} type="password" className="form-control" placeholder="Your password" />
              {errors.password && <p className='text-danger'>{errors.password}</p>}
            </div>

            <div className="form-check mb-3">
              <input id="terms" type="checkbox" className="form-check-input" />
              <label htmlFor="terms" className="form-check-label">
                Accept terms and conditions
              </label>
              {errors.ischeked && <p className='text-danger'>{errors.ischeked}</p>}
            </div>

            <p onClick={()=>setIsForgetPassword(true)} className="text-primary small mb-3" style={{ cursor: "pointer" }}>
              Forgot password?
            </p>
            <p id='create' onClick={()=>setIsHaveAccount(false)} className='text-primary small mb-3'>
                Don't have an account? Sign Up
            </p>
            <button onClick={validateForm} className="btn btn-outline-primary w-100">Log In</button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default LogIn;