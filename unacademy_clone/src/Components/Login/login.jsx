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
  position:fixed;
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
   rgb(69, 69, 69);
   margin-top:50px;
   margin-left:50px;

`;

const StyledInput=styled.input`
    height:50px;
    width:60%;
    font-size:25px;
    border:1px solid black;
    margin-top:50px;
`;
const Img=styled.img`
height:20px;
width:20px;
margin-top:10px;

`;
const Label=styled.label`
    padding:11px;
    margin-left:50px;
    font-size:25px;
    border:1px solid black;
    
`;
const StyledA=styled.a`
    color:rgb(16, 202, 75);
   
 
`;
const P=styled.p`
    margin-left:50px;
    margin-top:20px;
`;
const StyledInput1=styled.input`
    height:40px;
    width:60%;
    font-size:20px;
    border:1px solid rgb(166, 166, 166);
    margin-top:40px;
    margin-left:50px;
    border-radius:5px;

`;
const StyledInput2=styled.input`
    height:40px;
    width:60%;
    font-size:20px;
    border:1px solid rgb(166, 166, 166);
    margin-top:30px;
    margin-left:50px;
    border-radius:5px;

`;
const StyledInput3=styled.input`
    
    margin-top:20px;
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
              <P>Or <span> <StyledA >create your account</StyledA></span></P>
              < Label ><Img src='https://media.istockphoto.com/vectors/flag-of-india-vector-id519611160?k=20&m=519611160&s=612x612&w=0&h=n8mmywhzMzcrRI4I50uKYEFVeS4wDfpOGQGEaCK6YPw='/> +91</Label>
              <span>
              <StyledInput placeholder="Enter your mobile number" type="number" />
              </span>
                
              
             
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
         <P>We've sent an OTP to your registered mobile number</P>
         
        <StyledInput1 placeholder="Enter OTP" type="number" />
        <StyledInput2 placeholder="Name" type="text" />
        <StyledInput2 placeholder="Email Address" type="email" />
         <br/>
        <StyledInput3 type="checkbox" />
         <label>I agree to Unacademy’s Terms & Privacy policy</label>
         <br/>
        <StyledLogButton> Sign Up</StyledLogButton>
        

        </StyledForm>
      </StyledMainDiv>
      )}

   
    </div>
  )
    }
export {Login};
