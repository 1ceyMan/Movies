import { useState ,createContext, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LogIn from './Formulaires/LogInFolder/logIn.jsx';
import SignIn from './Formulaires/SignInFolder/SignIn.jsx';
import ForgetPassword from './Formulaires/ForgetPasswordFolder/ForgetPassword.jsx';
export const context = createContext(); 
function App() {

  const [dateBirth,setDateBirth] = useState('');
  const [isFormValid,setIsFormValid] = useState(false)
  const [HaveAccount,setIsHaveAccount] = useState(true)
  const [isForgetPassword,setIsForgetPassword] = useState(false);
  useEffect(()=> {
    console.log(dateBirth)
  },[dateBirth])

  return (
    <>
    <context.Provider value={{HaveAccount,setIsHaveAccount,isFormValid,setIsFormValid,setIsForgetPassword,dateBirth,setDateBirth}}>
      {
        
      }
      {!isForgetPassword ? <div className={`auth-wrapper ${HaveAccount ? "slide-in" : "slide-out"}`}>
        {HaveAccount ? <LogIn/> : <SignIn/>}
      </div> : <ForgetPassword />}
      
      </context.Provider> 
    </>
  )
}

export default App