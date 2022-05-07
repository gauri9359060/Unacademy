import React, { useState } from 'react'
import styles from './Login.module.css'
import PhoneInput from "react-phone-input-2";
import Otpvarification from './Otpvarification';
const RegisterUser = ({setGoToRegister}) => {
  const [register,setRegister] = useState(false)
 
  return (
  
      (register === true) ? (<Otpvarification setGoToRegister={setGoToRegister}/>):
    <div>
         <div className={styles.loginBox}>
            <h1>Join Unacademy</h1>
            <p>
              or{" "}
              <span className={styles.createAccount} onClick={()=>{setGoToRegister(false)}}>login to your account</span>
            </p>
            <form>
            <PhoneInput
        country={"in"}
        
        style={{ marginTop: 30 }}
        className={styles.phoneInput}
        placeholder="Enter your mobile number"
      />

              <div className={styles.loginInfo}>
                <button
                  className={styles.loginBtn}
                  style={{ width: 120, height: 50 }}
                  onClick={()=>setRegister(true)}
                >
                  Continue
                </button>
               
              </div>
            </form>
            <p className={styles.bottomP} style={{fontSize:13}}>By signing up,
you agree to<span>Terms & Conditions</span> and <span>Privacy Policy.</span></p>
          </div> 
    </div>
  )
}

export default RegisterUser