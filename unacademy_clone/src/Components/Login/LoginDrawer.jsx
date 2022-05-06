import React, { useState } from 'react'
import styles from "./Login.module.css"
import PhoneInput from "react-phone-input-2";
import RegisterUser from './RegisterUser';
import { Navigate, useNavigate } from 'react-router-dom';



const LoginDrawer = ({state,setState,pToggle,setIsRegisterPresent,setPage}) => {
   
    const [goTORegister, setGoToRegister] = useState(false)
    const handleOnChange = (value, data, event, formattedValue) => {
       const val = setState(value);
       console.log(val)
    }
     
  return (

    (goTORegister === true) ?
    (<RegisterUser setGoToRegister={setGoToRegister}/>):
    (<div className={styles.loginBox}>
    <h1>Login</h1>
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

      <div className={styles.loginInfo}>
        <button
          className={styles.loginBtn}
          style={{ width: 120, height: 50 }}
          onClick={() => {
            pToggle();
            console.log(state)
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