import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
// import NavbarTwo from "../Navbar/NavbarTwo";
import styles from "../Navbar/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PinnedSubheaderList from "./PinnedSubheaderList";
import CourseCards from "./CourseCards";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Context/AuthContextProvider";
import NavBarTwo from "../Navbar/NavbarTwo";
;

const Container = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(252, 252, 252, 0.843),
    rgba(229, 244, 255, 0.44)
  );
`;
const Header = styled.div`
  height: 200px;
  background-repeat: no-repeat;
  background-position: bottom right;
  margin: auto;
  max-width: 80%;
  margin-bottom:50px;
  padding-top: 70px;
  padding-left: 30px;
  background-image: url(https://static.uacdn.net/production/_next/static/images/goal/managegoal-test-prep-light.svg);
  @media (max-width: 768px) {
    max-width:100%;
  }
  @media (max-width: 375px) {
    margin-left:0px;
    background:none;
    position:sticky;
  }

`;

const SearchBox = styled.div`
  max-width: 350px;
  border: 1px solid #e9eef2;
  height: 50px;
  background-color: white;
  display: flex;
  column-gap: 10px;
  margin-top: 10px;
  border-radius: 5px;
  @media (max-width: 768px) {
    max-width:700px;
  }
  @media (min-width: 375px) {
    max-width:800px;
  }
`;

const Search = styled.input`
  font-size: 15px;
  border: none;
`;

const ContentWrapper = styled.div`
  display:flex;
  max-width:80%;
  margin:auto;
`
const Explore = () => {
  const [courses, setCourses] = useState([]);
  const {auth}=useContext(AuthContext)

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(" https://unacademy-backend.herokuapp.com/courses")
      .then((res) => res.json())
      .then((res) => setCourses(res));
  };
  return (
    <Container className={styles.font}>

      {auth ? <NavBarTwo /> : <Navbar />}

      <Header>
        <h1 style={{ fontSize: 38, color: "#3C4852" }}>Choose your goal</h1>
        <SearchBox>
          <SearchIcon
            style={{ paddingLeft: 10, paddingTop: 10, fontSize: 26 }}
          />

          <Search placeholder="Search for your goal" />
        </SearchBox>


      </Header>

      <ContentWrapper>
        <div className={styles.scroller}>
          <PinnedSubheaderList courses={courses} />
        </div>
        <CourseCards courses={courses} />
      </ContentWrapper>
    </Container>

  );
};

export default Explore;