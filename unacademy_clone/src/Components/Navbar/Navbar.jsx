
import React from 'react'
import styled from 'styled-components'
import LoginButton from './LoginButton'
const NavbarWrapper = styled.nav`
    width:80%;
    margin:auto;
    display:flex;
    flex-direction:row;
    column-gap:70%;
    padding:15px;

    & > div{
        padding:10px
    }
        
`

const Navbar = () => {
  return (
    <NavbarWrapper>
        <div>
            <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384" alt='unacademy logo'/>
        </div>
        <div>
           <LoginButton/>
        </div>
    </NavbarWrapper>
  )
}

export default Navbar