import React, { useContext, useEffect, useState } from 'react'
import './SignIn.css'
import { context } from '../../App'

const SignIn = () => {

    const { HaveAccount, setIsHaveAccount, setDateBirth, dateBirth } = useContext(context);
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const validateEmail = () => {
        if (email.trim() === '') {
            setErrors(prev => ({ ...prev, email: "email required" }))
            setIsFormValid(false)
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors(prev => ({ ...prev, email: "Invalide email Format" }))
            setIsFormValid(false)
            return;
        }
        setIsFormValid(true);
        setErrors(prev => ({ ...prev, email: "" }))
    }

    const validatePassword = () => {
        if (password.trim() === "") {
            setErrors(prev => ({ ...prev, password: "password required" }))
            setIsFormValid(false)
            return;
        }
        if (password.length < 6) {
            setErrors(prev => ({ ...prev, password: "password should be more than 6 caracters" }))
            setIsFormValid(false)
            return;
        }
        setIsFormValid(true);
        setErrors(prev => ({ ...prev, password: "" }))
    }

    const validateNumberPhone = () => {
        if (phoneNumber.trim() === "") {
            setErrors(prev => ({ ...prev, phoneNumber: "number phone required" }))
            setIsFormValid(false)
            return;
        }

        const regex = /^0[67]\d{8}$/;
        if (!regex.test(phoneNumber)) {
            setErrors(prev => ({ ...prev, phoneNumber: "number phone invalide" }));
            setIsFormValid(false);
            return;
        }
        setIsFormValid(true);
        setErrors(prev => ({ ...prev, phone: "" }))
    }

    const validateForm = (e) => {
        e.preventDefault();
        validateEmail();
        validatePassword();
        validateNumberPhone();
    }



    return (
        <div className='container row'>
            <div className="col-md-6">
                <form action="">
                    <div className="mb-3">

                        <label className="form-label">Email address</label>
                        <input type="email" onChange={e => setEmail(e.target.value)} placeholder='your email' className="form-control" />
                        {errors.email && <p className='text-danger'>{errors.email}</p>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} placeholder='your password' className="form-control" />
                        {errors.password && <p className='text-danger'>{errors.password}</p>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mobile Phone</label>
                        <input type="text" onChange={e => setPhoneNumber(e.target.value)} placeholder='mobile phone' className="form-control" />
                        {errors.phoneNumber && <p className='text-danger'>{errors.phoneNumber}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date of your birthday</label>
                        <input type='date' onChange={e => setDateBirth(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <p className='text-primary remembre' onClick={() => setIsHaveAccount(true)}>remembered ?</p>
                    </div>
                    <button onClick={validateForm} type="submit" className="btn btn-outline-primary w-100">Sign In</button>
                </form>
            </div>

            <div className="col-md-6">
                <h2 className="mb-3">Welcome Back!</h2>
                <p className="text-muted">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio doloremque at aut recusandae molestias nulla sequi sint optio excepturi dolores laudantium laborum alias iusto, repellat cumque quia neque dolore impedit!
                </p>
            </div>
        </div>
    )
}

export default SignIn