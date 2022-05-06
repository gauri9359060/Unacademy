import React from 'react'
import styles from "./Login.module.css"
import PhoneInput from "react-phone-input-2";
const OtpVerification2 = () => {
  return (
    <div>
            <div>
      <div className={styles.loginBox}>
        <h1>Verify your mobile number</h1>

        <p>We've sent an OTP to your mobile number</p>
        <form>
          <PhoneInput
            country={"in"}
            style={{ marginTop: 20 }}
            className={styles.phoneInput}
            placeholder="Enter your mobile number"
          />
          <input
            className={styles.emailDrwerInput}
            placeholder="One time password"
          />
          
          <div className={styles.loginInfo}>
            <button
              className={styles.loginBtn}
              style={{ width: 120, height: 50,marginTop:0 }}
            >
              Submit
            </button>
            <p style={{color:"black"}}>Resend Otp <span style={{color:"gray"}}>or</span> Call</p>
          </div>
        </form>
        <p className={styles.bottomP} style={{ fontSize: 13}}>
          By signing up, you agree to<span>Terms & Conditions</span> and{" "}
          <span>Privacy Policy.</span>
        </p>
      </div>
    </div>
    </div>
  )
}

export default OtpVerification2