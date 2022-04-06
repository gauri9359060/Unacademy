import React,{useState} from 'react';
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';




const Login = () => {
  
 
   
const StyledNavButton= styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
  
`;

const StyledCloseButton=styled.button`
  margin-left:50px;
  margin-top:25px
  
`;
const StyledLogButton=styled.button`
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

const StyledMainDiv=styled.div`
  width:100%;
  background-color:red;
`;

const StyledForm=styled.form`
   width:50%;
   height:625px;
   background-color:white;
   
   float:right;
`;

const StyledDiv=styled.div`
    width:50%;
    height:625px;
    background-color:black; 
    float:left; 
    // opacity:.5;
`;

const StyledH1=styled.h1`
   font-weight: 600;
   rgb(69, 69, 69)
   margin-top:20px;
   margin-left:50px;

`;

const StyledInput=styled.input`
    height:50px;
    width:80%;
    margin-left:50px;
    border:1px solid black;
    

`;
const StyledA=styled.a`
    color:rgb(16, 202, 75);
    margin-left:50px;
`;



const [isVisible, setIsVisible] = useState(true);
const [isOpened, setIsOpened] = useState(false);
const [isPresent, setIsPresent]=useState(false);
const [isRegister, setIsRegister]=useState(false);

const toggle=() =>{
  setIsOpened(wasOpened => !wasOpened);
  setIsVisible(wasOpened=> !wasOpened)
}

const pToggle = ()=>{
  setIsPresent(wasOpened=>!wasOpened);
  setIsOpened(wasOpened => !wasOpened);
}

const ragisterCloser=()=>{
 setIsRegister(wasOpened=>!wasOpened)
  setIsPresent(wasOpened=>!wasOpened);
}




  return (
    <div>
    {isVisible && (
      <StyledNavButton onClick={()=>toggle()}>Login</StyledNavButton>
    )}
    {isRegister && (
      <StyledNavButton onClick={()=>ragisterCloser()}>Login</StyledNavButton>
    )}
    
    
    {isOpened && (
      <StyledMainDiv>
        <StyledDiv onclick="toggle()">
            
        </StyledDiv>
         <StyledForm>
               <StyledCloseButton styles="width:24px; height:24px" onClick={()=>toggle()} > <ClearIcon /></StyledCloseButton>
              <StyledH1>Login</StyledH1>
              <p><StyledA href='Google.com'>create your account</StyledA></p>

              <StyledInput placeholder="Enter your mobile number" type="number" />
              <StyledLogButton onClick={()=>pToggle()}>Login</StyledLogButton>
              
              
         </StyledForm>
         </StyledMainDiv>
         
    )}

    {
      isPresent &&(
        <StyledMainDiv>
        <StyledDiv onclick="toggle()">
            
        </StyledDiv>
        <StyledForm>
        <StyledCloseButton  onClick={()=> ragisterCloser()} ><ClearIcon /> </StyledCloseButton>

        <StyledH1>Enter OTP</StyledH1>
         <p>We've sent an OTP to your registered mobile number</p>
        <StyledInput placeholder="Enter OTP" type="number" />
        <StyledLogButton> Login</StyledLogButton>
        
         
        </StyledForm>
      </StyledMainDiv>
      )}

   
    </div>
  )
    }
export {Login};
