import React, { useContext } from "react";
import styles from "./Login.module.css";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useSelector } from "react-redux";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
const Otpvarification = ({ setGoToRegister }) => {
  const phone = useSelector(state => state.phone)
  const initState = {
   phone:phone,
   name:"",
   email:"",
   state:""
  }
  const [formData, setFormData] = React.useState( initState )
  const [otp, setOtp] = React.useState("")
  const navigate= useNavigate()
  const { setAuth, createOTP } = useContext(AuthContext)
  const handleChange = (e) => {
    let { name, value } = e.currentTarget
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const checkOtp=()=>{
    if (+otp === createOTP) {
      setAuth(true)
      navigate('/course')
    }
    else {
      alert("Invalid OTP");
      setGoToRegister(false)
      //set back to login
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.phone === "" || formData.name === "" || formData.email === "" || formData.state === "") {
      alert("Please fill all Credentials")
    }
    console.log(formData)
    fetch("https://unacademy-backend.herokuapp.com/users/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => {
        JSON.stringify(res)
        setFormData(initState)

        if (res.token) {
          checkOtp()
          // navigate("/homepage")
        }
      })
      .catch((err) => {
        console.log(err)
        //navigate("/")

      })

  }
  return (
    <div>
      <div className={styles.loginBox}>
        <h1>Verify your mobile number</h1>

        <p>We've sent an OTP to your mobile number</p>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ marginTop: "1em" }} >
            <InputLabel htmlFor="outlined-adornment-mobile"> Mobile </InputLabel>
            <OutlinedInput
              id="outlined-adornment-mobile"
              value={formData.phone}
              name="phone"
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
          <input
            className={styles.emailDrwerInput}
            placeholder="One time password"
            value ={otp}
            onChange={(e)=>setOtp(e.currentTarget.value)}
          />
          <input
            className={styles.emailDrwerInput}
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className={styles.emailDrwerInput}
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br/><br/>
          <select style={{ height: 50, width: 300, borderRadius: 6, paddingRight: 20 }} 
            name="state"
            value={formData.state}
            onChange={handleChange}>
            <option>Select - State of residence</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          <br/><br/>
          <input type="checkbox"/> <label>
              I agree to Unacademy's <span>Terms</span> and <span>Privacy Policy</span>
          </label>
          <div className={styles.loginInfo}>
          
            <input type="submit"
              className={styles.loginBtn}
              style={{ width: 120, height: 30,marginTop:0 }}
              value="Submit"
            />
            <p style={{color:"black"}}>Resend Otp <span style={{color:"gray"}}>or</span> Call</p>
          </div>
        </form>
        <p className={styles.bottomP} style={{ fontSize: 13}}>
          By signing up, you agree to<span>Terms & Conditions</span> and{" "}
          <span>Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default Otpvarification;
