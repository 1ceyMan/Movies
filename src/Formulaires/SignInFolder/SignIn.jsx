import React, { useContext, useRef, useState } from 'react'
import './SignIn.css'
import { context } from '../../App'
import { useValidatEmail, useValidatNumberPhone, useValidatPassword } from '../validation';

const SignIn = () => {

    const {HaveAccount,setIsHaveAccount,setDateBirth,dateBirth,setIsFormValid} = useContext(context);
    const [errors,setErrors] = useState({});
    const email = useRef();
    const password = useRef();
    const phoneNumber = useRef();

    const validateForm = (e) => {
        e.preventDefault();
        let isEmailValid = useValidatEmail(email.current.value)
        if(isEmailValid.trim()!=="")
            setErrors(prev=>({...prev,email:isEmailValid}))
        else
            setErrors(prev=>({...prev,email:""}))
        let isPasswordValide = useValidatPassword(password.current.value)
        if(isPasswordValide.trim()!=="")
            setErrors(prev=>({...prev,password:isPasswordValide}))
        else
            setErrors(prev=>({...prev,password:""}))
        let isPhoneNumberValide = useValidatNumberPhone(phoneNumber.current.value)
        if(isPhoneNumberValide.trim()!=="")
            setErrors(prev=>({...prev,phoneNumber:isPhoneNumberValide}))
        else
            setErrors(prev=>({...prev,phoneNumber:""}))
        if(isEmailValid.trim()==="" && isPasswordValide.trim()==="" && isPasswordValide.trim()==="")
            setIsFormValid(true);
    }



  return (
    <div className='container row'>
        <div className="col-md-6">
            <form action="">
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" ref={email} placeholder='your email' className="form-control"/> 
                    {errors.email && <p className='text-danger'>{errors.email}</p>}
                </div>

                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" ref={password} placeholder='your password' className="form-control" />
                    {errors.password && <p className='text-danger'>{errors.password}</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Mobile Phone</label>
                    <input type="text" ref={phoneNumber} placeholder='mobile phone' className="form-control"/>
                    {errors.phoneNumber && <p className='text-danger'>{errors.phoneNumber}</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of your birthday</label>
                    <input value={'2025-10-5'} type='date' onChange={e=>setDateBirth(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-3">
                    <p className='text-primary remembre' onClick={()=>setIsHaveAccount(true)}>remembered ?</p>
                </div>
                <button onClick={validateForm} type="submit" className="btn btn-outline-primary w-100">Sign In</button>
            </form>
        </div>

        <div className="col-md-6 txtSign">
            <h2 className="mb-3">Welcome Back!</h2>
            <p className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio doloremque at aut recusandae molestias nulla sequi sint optio excepturi dolores laudantium laborum alias iusto, repellat cumque quia neque dolore impedit!
            </p>
        </div>
    )
}

export default SignIn