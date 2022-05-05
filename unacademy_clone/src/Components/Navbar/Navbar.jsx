import React ,{useContext, useState} from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

import { AuthContext } from "../../Context/AuthContextProvider";
import IconButton from "@mui/material/IconButton";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import styles from "./Navbar.module.css";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/bootstrap.css'
import styledEngine from "@mui/styled-engine";
import { Navigate, useNavigate } from "react-router-dom";
const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { getOTP, createOTP, setAuth } = useContext(AuthContext);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [state,setState] = useState('');
  const handleOnChange = (value, data, event, formattedValue) => {
    setState(value);
  }
  const navigate = useNavigate()

  const [isVisible, setIsVisible] = useState(true);
  const [isLoginOpened, setIsLoginOpened] = useState(false);
  const [isRegisterPresent, setIsRegisterPresent] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const OTPverification = (otp) => {
    navigate("/course");
    setAuth(true);
  };
  const toggle = () => {
    setIsLoginOpened((wasOpened) => !wasOpened);
    setIsVisible((wasOpened) => !wasOpened);
  };
  const pToggle = () => {
    setAuth(true);
    setIsLoginOpened((wasOpened) => !wasOpened);
  }; // if (mobile.length === 10) {
  //   setIsRegisterPresent(wasOpened => !wasOpened);
  //   setIsLoginOpened(wasOpened => !wasOpened);
  //   setTimeout(() => {
  //     getOTP()
  //   }, 5000)
  // }
  // else {
  //   alert("invalid mobile No.")
  // }
  const ragisterCloser = () => {
    setIsRegister((wasOpened) => !wasOpened);
    setIsRegisterPresent((wasOpened) => !wasOpened);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div>
          <img
            src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384"
            alt="unacademy logo"
          />
        </div>
        <div>
          <button className={styles.loginBtn} onClick={handleDrawerOpen}>
            Login
          </button>
        </div>
      </div>

      <Drawer
        sx={{
          width: `45%`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `45%`,
          },
        }}
        anchor="right"
        open={open}
      >
        <div>
          <IconButton
            onClick={handleDrawerClose}
            style={{ background: "none" }}
          >
            {theme.direction === "rtl" ? (
              <CloseTwoToneIcon className={styles.closeBtn} />
            ) : (
              <CloseTwoToneIcon className={styles.closeBtn} />
            )}
          </IconButton>
        </div>

        <div className={styles.loginBox}>
          <h1>Login</h1>
          <p>
            or <span className={styles.createAccount}>create your account</span>
          </p>
          <form>            
              <PhoneInput
                country={"in"}
                value={state}
                onChange={()=>handleOnChange}
                style={{marginTop:30}}
                className={styles.phoneInput}
                placeholder="Enter your mobile number"
              />
         
              <div className={styles.loginInfo}>
                  <button className={styles.loginBtn} style={{width:120,height:50}} onClick={() => {
                pToggle();
                setIsRegisterPresent(true);
              }}>
                      Login
                  </button>
                  <div>
                      <button style={{border:"none",backgroundColor:"white"}}>
                          <h5>Continue with email</h5>
                      </button>
                  </div>
              </div>
          </form>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
