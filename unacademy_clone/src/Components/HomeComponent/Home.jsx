import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"
import styles from "./Home.module.css"

const Container=styled.div`
  width:100%
`
const Header = styled.div`
  height: 500px;
  background-repeat: no-repeat;
  background-position: bottom right;
  margin: auto;
  max-width: 80%;
  margin-bottom:50px;
  padding-top: 0px;
  padding-left: 30px;
  width:100%;
  background-image: url(https://static.uacdn.net/production/_next/static/images/home/hero_banner_landing_new.svg?q=75&w=3840);
  @media (max-width: 768px) {
    max-width:100%;
  }
  @media (max-width: 375px) {
    margin-left:0px;
    background:none;
    position:sticky;
  }

`;
const Home = () => {
  return (
    <Container>
         <Header>
              <div className={styles.headerh1}>
                    <h1>India's largest <br/>learning platform</h1>
                    <div>
                    <Link to="/Explore">
                      <button>ss</button>
                    </Link>
                     <h1>jnj</h1>
                    </div>
              </div>

         </Header>
    </Container>
  )
}

export default Home
