import React, { useContext, useState } from 'react'
import styles from "./Login.module.css"
import RegisterUser from './RegisterUser';
import {  useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import { get_phoneNo } from '../../Redux/Action';
import OtpVerification2 from './OtpVerification2';
import { AuthContext } from '../../Context/AuthContextProvider';
import Otpvarification from './Otpvarification';


const LoginDrawer = ({state,setstate,pToggle,setIsRegisterPresent,setPage}) => { 
  const navigate = useNavigate();
  const dispatch = useDispatch()
    const [otp, setOtp] = useState(false)
    const [goTORegister, setGoToRegister] = useState(false)
  const [gotoOtp, setGoToOtp] = useState(false)
  const initState = {
    phone: ""
  }
  const [formData, setFormData] = React.useState({ initState })
  const handleChange = (e) => {
    let { name, value } = e.currentTarget
    setFormData({
      ...formData,
      [name]: value
    })

  }
  const { auth, setAuth, getOTP } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.phone === "") {
      alert("Enter The Mobile Number")
    }

    fetch(" https://unacademy-backend.herokuapp.com/users/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => {
        JSON.stringify(res)
        setFormData(initState)

        if (res.token) {
          dispatch(get_phoneNo(formData.phone))
          getOTP();
          setGoToOtp(true)
          // navigate("/homepage")
        }
        else
        {
          dispatch(get_phoneNo(formData.phone))
          getOTP()
        setGoToRegister(true) 
        } 
      })
      .catch((err) => {
        console.log(err)
        //navigate("/")

      })

  }
  return (

    (goTORegister === true) ?
    (<Otpvarification setGoToRegister={setGoToRegister}/>):
    (gotoOtp===true)?<OtpVerification2/>:
    (<div className={styles.loginBox}>
    {
        (otp === true) ? <h1>Enter OTP</h1> : <h1>Login</h1>
    }
   
    <p>
      or{" "}
      <span className={styles.createAccount} onClick={()=>setGoToRegister(true)}>create your account</span>
    </p>
    <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{marginTop:"1em"}} >
            <InputLabel htmlFor="outlined-adornment-mobile"> Mobile </InputLabel>
            <OutlinedInput
              id="outlined-adornment-mobile"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              startAdornment={<InputAdornment position="start">
                <span>
                  <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" width="20px" style={{ marginRight: "4px" }} alt="" />
                  +91
                </span>
              </InputAdornment>}
              label="mobile"
            />
          </FormControl>
      <br/>

      <div className={styles.loginInfo}>
        <input type='submit' 
        value = "Login"
          className={styles.loginBtn}
          style={{ width: 120, height: 50 }}
       / >
       
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