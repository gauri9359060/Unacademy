import React, { useContext } from 'react'
import styles from "./Login.module.css"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../Context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
const OtpVerification2 = () => {
  const phone = useSelector(state => state.phone)
  console.log(phone)
  const [otp,setOtp]=React.useState("")
  const { setAuth, createOTP } = useContext(AuthContext)
  const navigate =useNavigate();
  const handleSubmit=()=>{
      if(+otp===createOTP)
      {
        setAuth(true)
        navigate('/course')
      }
      else
      {
        alert("Invalid OTP");  
        //set back to login
      }
  }
  return (
    <div>
      <div>
        <div className={styles.loginBox}>
          <h1>Verify your mobile number</h1>

          <p>We've sent an OTP to your mobile number</p>
          <form
          onSubmit={handleSubmit}
          >
            <FormControl fullWidth >
              <InputLabel htmlFor="outlined-adornment-mobile"> Mobile </InputLabel>
              <OutlinedInput
                id="outlined-adornment-mobile"
                value={phone}
                //name="phone"
                //onChange={handleChange}
                startAdornment={<InputAdornment position="start">
                  <span>
                    <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" width="20px" style={{ marginRight: "4px" }} alt="" />
                    +91
                  </span>
                </InputAdornment>}
                label="mobile"
              />
            </FormControl>
            <input
              className={styles.emailDrwerInput}
              placeholder="One time password"
              value={otp}
              onChange ={ (e)=>setOtp(e.currentTarget.value)}
            />

            <div className={styles.loginInfo}>
              <input
                type="submit"
                value="Verify OTP"
                className={styles.loginBtn}
                style={{ width: 120, height: 50, marginTop: 0 }} />
              <p style={{ color: "black" }}>Resend Otp <span style={{ color: "gray" }}>or</span> Call</p>
            </div>
          </form>
          <p className={styles.bottomP} style={{ fontSize: 13 }}>
            By signing up, you agree to<span>Terms & Conditions</span> and{" "}
            <span>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default OtpVerification2