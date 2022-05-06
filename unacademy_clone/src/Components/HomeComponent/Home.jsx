import styled from "styled-components";
import styles from "./Home.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";

import Cards from "./Cards";
import MobileCard from "./MobileCard";
import Rating from "./Rating";
import Footer from "../explorepage/Footer";
import NavBarTwo from "../Navbar/NavbarTwo";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

const Container = styled.div`
  width: 100%;
`;
const Header = styled.div`
  height: 500px;
  background-repeat: no-repeat;
  background-position: bottom right;
  margin: auto;
  max-width: 80%;
  margin-bottom: 50px;
  padding-top: 0px;
  padding-left: 30px;
  width: 100%;
  background-image: url(https://static.uacdn.net/production/_next/static/images/home/hero_banner_landing_new.svg?q=75&w=3840);
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 375px) {
    margin-left: 0px;
    background: none;
    position: sticky;
  }
`;
const Home = () => {
  const { auth, setAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const redirectToExplore = () =>{
    navigate('/Explore')
  }
  return (
    <Container>
      {auth ? <NavBarTwo/> : <Navbar />}
      <Header>
        <div className={styles.headerh1}>
          <h1>
            India's largest <br />
            learning platform
          </h1>
          <div>
            
              <Stack direction="row">
                <Button
                  variant="contained"
                  color="success"
                  style={{ marginTop: 70, padding: 15, width: 250,backgroundColor:"#08bd80" }}
                  onClick={redirectToExplore}
                >
                  <h3>Start learning</h3>
                </Button>
              </Stack>
            
            <div className={styles.headercourse}>
              <p style={{ color: "gray" }}>Popular Goals</p>
              <h4>UPSC CSE - GS</h4>
              <h4>IIT JEE</h4>
              <h4>NEET UG</h4>
              <h4>CAT & Other MBA Entra...</h4>
              <h4>Bank Exams</h4>
              <h4>GATE & ESE</h4>
            </div>
          </div>
        </div>
      </Header>
        <Cards style={{marginTop:100}}/>
        <MobileCard/>
        <Rating/>

    <Footer/>
    </Container>

  );
};

export default Home;
