import React, { useContext, useEffect, useRef, useState } from 'react'
import './ForgetPassword.css'
import { useValidatEmail, useValidatPassword } from '../validation';
import { context } from '../../App';

var RandomCode =String(Math.floor(100000 + Math.random() * 900000));

const ForgetPassword = () => { 

    const {setIsHavingAccount,setIsForgetPassword} = useContext(context);
    const [isValideEmail,setIsValidEmail] = useState(false);
    const [iscodeValide,setIsCodeValide] = useState(false);
    const [isTheSamePassword,setIsTheSamePassword] = useState(true);

    const email = useRef();
    const password = useRef();
    const code = useRef();
    const confirmPassword = useRef();

    const Confirm = ()=>{
        let currentCode = code.current.value
        if(currentCode.trim()===""){
            document.getElementById('codeErr').innerHTML="code is required"
            return false;
        }

        if(isNaN(currentCode)){
            document.getElementById('codeErr').innerHTML="The code should be a number of 6 caracters"
            return false;
        }

        if(currentCode===RandomCode){
            setIsCodeValide(true);
            document.getElementById('code').value=""
            document.getElementById('codeErr').innerHTML=""
            document.getElementById('code').setAttribute('disabled',true)
        }else{
            setIsCodeValide(false);
        }
    }


    const validationPassword = (passwordValue)=>{
        let isPasswordCorrect = useValidatPassword(passwordValue)
        if(isPasswordCorrect!==""){
            document.getElementById('passwordErr').innerHTML=isPasswordCorrect
            return false;
        }
        document.getElementById('passwordErr').innerHTML = ""
        return passwordValue;
    }

    const Reset = (e)=>{
        e.preventDefault();
        let accutalPassword = validationPassword(password.current.value);
        let confirmPasswordValue = confirmPassword.current.value;
        if(!accutalPassword){
            return ;
        }
        if(confirmPasswordValue===accutalPassword){
            console.log("walid")
            setIsForgetPassword(false);
            setIsTheSamePassword(true);
        }else{
            setIsTheSamePassword(false);
        }
    }

    const Search = (e) =>{
        e.preventDefault();
        let emailValue = email.current.value;
        let responseEmail = useValidatEmail(emailValue);
        if(responseEmail===""){
            setIsValidEmail(true);
            alert('Le code est :'+RandomCode)
            document.getElementById('err').innerHTML=""
        }else{
            document.getElementById('err').innerHTML=responseEmail
        }
    }

  return (
    <div className='container shadow rounded p-4 bg-white forget' >
        <div className="txt">
            <h1>Forget Password</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores pariatur voluptas culpa ipsam. Consequuntur, assumenda fuga iusto ea eum nulla amet vitae odio voluptatem possimus doloremque harum optio aut.</p>
           <div className="input-group">
                <span className='input-group-text'>@</span>
                <input ref={email} placeholder='your email' type="text" className="form-control txt" />

           </div><br />
            <p className='text-danger' id='err'></p>
        </div>
            {isValideEmail &&
            <><div className="divCode">
                Le code:
                <input type='text' ref={code} placeholder='XXXXXX' className='form-control' id='code'/>
            </div>
                <p className='text-danger' id='codeErr'></p>
            </>
            }
         
            <br />
            {iscodeValide && isValideEmail &&
            <div className='passwords'>

                    <input type="password" ref={password} name="" placeholder='your password' id="" className="form-control" /><br />
                    <p className='text-danger' id='passwordErr'></p>
                    <input type="password"  ref={confirmPassword} name="" placeholder='Confirm your password' id="" className="form-control" />
                </div>
            }
            {!isTheSamePassword && <p className='text-danger'>not the same password !!!</p>}
        <br />
        {!isValideEmail && <button onClick={Search} className='btn btn-outline-primary'>Search</button>}
        {isValideEmail && !iscodeValide && <button onClick={Confirm} className='btn btn-outline-primary'>Confirm</button>}
        {iscodeValide && <button className='btn btn-outline-primary' onClick={Reset}>Reset</button>}
            
    </div>

  )
}

export default ForgetPassword