import React, { useState } from 'react'
import styles from "./Login.module.css"
import PhoneInput from "react-phone-input-2";
import RegisterUser from './RegisterUser';
import { Navigate, useNavigate } from 'react-router-dom';



const LoginDrawer = ({state,setState,pToggle,setIsRegisterPresent,setPage}) => {
   
    const [otp, setOtp] = useState(false)
    const [goTORegister, setGoToRegister] = useState(false)
    const handleOnChange = (value, data, event, formattedValue) => {
       const val = setState(value);
       console.log(val)
    }
     
  return (

    (goTORegister === true) ?
    (<RegisterUser setGoToRegister={setGoToRegister}/>):
    (<div className={styles.loginBox}>
    {
        (otp === true) ? <h1>Enter OTP</h1> : <h1>Login</h1>
    }
   
    <p>
      or{" "}
      <span className={styles.createAccount} onClick={()=>setGoToRegister(true)}>create your account</span>
    </p>
    <form>
      <PhoneInput
        country={"in"}
        value={state}
        onChange={() => handleOnChange}
        style={{ marginTop: 30 }}
        className={styles.phoneInput}
        placeholder="Enter your mobile number"
      />
      <br/>

      <input placeholder='       One time password' style={{height:50,width:300}}/>

      <div className={styles.loginInfo}>
        <button
          className={styles.loginBtn}
          style={{ width: 120, height: 50 }}
          onClick={() => {
            pToggle();
            setIsRegisterPresent(true);
          }}
        >
          Login
        </button>
        <div>
          <button style={{ border: "none", backgroundColor: "white" }}>
            <h5 onClick={()=>setPage(false)}>Continue with email</h5>
          </button>
        </div>
      </div>
    </form>
    <p className={styles.bottomP} style={{fontSize:13}}>Having trouble? Please contact <span>help@unacademy.com</span> for further support.</p>
  </div>
)
  )
  
}

export default LoginDrawer