import './LogIn.css';
import { useContext, useState, useEffect } from 'react';
import { context } from '../../App.jsx';

const LogIn = () => {

  const { isFormValid, setIsFormValid } = useContext(context);
  const { HaveAccount, setIsHaveAccount } = useContext(context);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = () => {
    if (email.trim() === '') {
      setErrors(prev => ({ ...prev, email: "Invalide required" }))
      setIsFormValid(false)
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
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

  const validateCheckbox = () => {
    const ischeked = document.getElementById('terms').checked;
    if (!ischeked) {
      setErrors(prev => ({ ...prev, ischeked: "you must accept terms" }))
      setIsFormValid(false)
      return;
    }
    setIsFormValid(true);
    setErrors(prev => ({ ...prev, ischeked: "" }))
  }


  const validateForm = (e) => {
    e.preventDefault();
    validateEmail()
    validatePassword();
    validateCheckbox();
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
              <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" className="form-control" placeholder="Your email" />
              {errors.email && <p className='text-danger'>{errors.email}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password :</label>
              <input id="password" onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Your password" />
              {errors.password && <p className='text-danger'>{errors.password}</p>}
            </div>

            <div className="form-check mb-3">
              <input id="terms" type="checkbox" className="form-check-input" />
              <label htmlFor="terms" className="form-check-label">
                Accept terms and conditions
              </label>
              {errors.ischeked && <p className='text-danger'>{errors.ischeked}</p>}
            </div>

            <p className="text-primary small mb-3" style={{ cursor: "pointer" }}>
              Forgot password?
            </p>
            <p id='create' onClick={() => setIsHaveAccount(false)} className='text-primary small mb-3'>
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