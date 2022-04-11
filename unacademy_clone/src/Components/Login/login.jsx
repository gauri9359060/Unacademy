import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import { AuthContext } from '../../Context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
const Login = () => {
  const { getOTP, createOTP, setAuth } = useContext(AuthContext)
  const [mobile, setMobile] = useState("");
  const [text, setText] = useState("")
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const StyledNavButton = styled.button`
  background-color: #08bd80;
  font-size: 26px;
  color: white;
  border:none;
  border-radius:6px;
  padding:2px
`;
  const StyledCloseButton = styled.button`
  margin-left:50px;
  margin-top:25px
`;
  const Label1 = styled.label`
    padding:12px;
    margin-left:50px;
    font-size:14px;
    border:1px solid rgb(166, 166, 166);
    border-right:none;
    border-top-left-radius:5px;
      border-bottom-left-radius:5px;
`;
  const Img1 = styled.img`
height:20px;
width:20px;
`;
  const StyledInputRagister = styled.input`
    height:40px;
    width:48%;
    font-size:14px;
    border:1px solid rgb(166, 166, 166);
    margin-top:50px;
    border-left:none;
      outline: none;
      border-top-right-radius:5px;
      border-bottom-right-radius:5px;
      @media (min-width: 769px) {
        width:48%;
      }
      @media (min-width: 500px) {
        width:42%;
        font-size:14px;
      }
      @media (min-width: 1024px) {
        width:50%;
        font-size:14px;
      }
`;
  const StyledLogButton = styled.button`
width:100px;
height:45px;
border-radius:5px;
border:rgb(232, 232, 232);
background-color:rgb(232, 232, 232);
font-size: 32px;
color: white;
margin-top:50px;
margin-left:50px;
font-size:15px;
color:black;
`;
  const StyledMainDiv = styled.div`
  width:100%;
  position:fixed;
`;
  const StyledForm = styled.form`
   width:42%;
   margin-left:-20%;
   height:625px;
   background-color:white;
   ${'' /* float:right; */}
`;
  const StyledDiv = styled.div`
    width:0%;
    height:625px;
    background-color:black;
    float:left;
    // opacity:.5;
`;
  const StyledH1 = styled.h1`
   font-weight: 600;
   margin-top:50px;
   margin-left:50px;
`;
  const StyledInput = styled.input`
    height:50px;
    width:60%;
    font-size:25px;
    border:1px solid rgb(166, 166, 166);
    margin-top:50px;
    border-left:none;
      outline: none;
      border-top-right-radius:5px;
      border-bottom-right-radius:5px;
`;
  const Img = styled.img`
height:20px;
width:20px;
margin-top:10px;
`;
  const Label = styled.label`
    padding:11px;
    margin-left:50px;
    font-size:25px;
    border:1px solid rgb(166, 166, 166);
    border-right:none;
    border-top-left-radius:5px;
      border-bottom-left-radius:5px;
`;
  const StyledA = styled.a`
    color:rgb(16, 202, 75);
`;
  const P = styled.p`
    margin-left:50px;
    margin-top:20px;
`;
  const StyledInput1 = styled.input`
    height:40px;
    width:60%;
    font-size:20px;
    border:1px solid rgb(166, 166, 166);
    margin-top:40px;
    margin-left:50px;
    border-radius:5px;
`;
  const StyledInput2 = styled.input`
    height:40px;
    width:60%;
    font-size:20px;
    border:1px solid rgb(166, 166, 166);
    margin-top:30px;
    margin-left:50px;
    border-radius:5px;
`;
  const StyledInput3 = styled.input`
    margin-top:20px;
    margin-left:50px;
`;
  const [isVisible, setIsVisible] = useState(true);
  const [isLoginOpened, setIsLoginOpened] = useState(false);
  const [isRegisterPresent, setIsRegisterPresent] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const OTPverification = (otp) => {
    navigate("/course")
    setAuth(true);
  }
  const getOTPFromServer =()=>{
    setTimeout(() => {
        getOTP()
      }, 3000)
  }
  const toggle = () => {
    setIsLoginOpened(wasOpened => !wasOpened);
    setIsVisible(wasOpened => !wasOpened)
  }
  const pToggle = () => {
    setAuth(true);
   setIsLoginOpened(wasOpened => !wasOpened);
  }// if (mobile.length === 10) {
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
    setIsRegister(wasOpened => !wasOpened)
    setIsRegisterPresent(wasOpened => !wasOpened);
  }
  return (
    <div>
      {isVisible && (
        <StyledNavButton onClick={() => toggle()}>Login</StyledNavButton>
      )}
      {isRegister && (
        <StyledNavButton onClick={() => ragisterCloser()}>Login</StyledNavButton>
      )}
      {isLoginOpened && (
        <StyledMainDiv>
          <StyledDiv>
          </StyledDiv>
          <StyledForm>
            <StyledCloseButton styles="width:24px; height:24px" onClick={() => toggle()} > <ClearIcon /></StyledCloseButton>
            <StyledH1>Login</StyledH1>
            <P>Or <span> <StyledA >create your account</StyledA></span></P>
            < Label ><Img src='https://media.istockphoto.com/vectors/flag-of-india-vector-id519611160?k=20&m=519611160&s=612x612&w=0&h=n8mmywhzMzcrRI4I50uKYEFVeS4wDfpOGQGEaCK6YPw=' /> +91</Label>
            <StyledInput placeholder="Enter your mobile number" type="text" value={text} onChange={(e)=>setText(e.currentTarget.value)} /> <Link onClick={getOTPFromServer}>Get OTP</Link>
            <StyledInput1 placeholder="Enter OTP" type="text" />
            <StyledLogButton onClick={() => {
              pToggle();
              setIsRegisterPresent(true);
            }}>Log In</StyledLogButton>
          </StyledForm>
        </StyledMainDiv>
      )}
      {
        isRegisterPresent && (
          <StyledMainDiv>
            <StyledDiv onclick="toggle()">
            </StyledDiv>
            <StyledForm>
              <StyledCloseButton onClick={() => ragisterCloser()} ><ClearIcon /> </StyledCloseButton>
              <StyledH1>Enter OTP</StyledH1>
              <P>We've sent an OTP to your registered mobile number</P>
              < Label1 ><Img1 src='https://media.istockphoto.com/vectors/flag-of-india-vector-id519611160?k=20&m=519611160&s=612x612&w=0&h=n8mmywhzMzcrRI4I50uKYEFVeS4wDfpOGQGEaCK6YPw=' /> +91</Label1>
              <span>
                <StyledInputRagister placeholder="Enter your mobile number" type="number" value="8923083289" />
              </span>
              <StyledInput1 placeholder="Enter OTP" type="text" />
              <StyledInput2 placeholder="Name" type="text" />
              <StyledInput2 placeholder="Email Address" type="email" />
              <br />
              <StyledInput3 type="checkbox" />
              <label>I agree to Unacademy’s Terms & Privacy policy</label>
              <br />
              <StyledLogButton onClick={() => OTPverification(otp)}>Verify OTP</StyledLogButton>
            </StyledForm>
          </StyledMainDiv>
        )}
    </div>
  )
}
export { Login };