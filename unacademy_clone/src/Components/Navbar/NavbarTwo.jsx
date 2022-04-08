import React from "react";
import styled from "styled-components";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Navbar.css";
import Dropdown from "../explorepage/Dropdown.jsx";

const NavbarWrapper = styled.nav`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  column-gap: 60%;
  padding: 15px;

  & > div {
    padding: 10px;
  }
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Progress = styled.div`
  max-height: 20px;
  border-radius: 50px;
  width: auto;
  display: flex;
  background-color: #eeeeee;
  font-size: 15px;
  opacity: 0.7;
  font-weight: 600;
  column-gap: 10px;
  cursor: pointer;
  padding: 8px;

  &:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    max-height: 30px;
  }
  @media (max-width: 375px) {
    max-height: 30px;
    display: none;
  }
`;

const Topflex = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 0px;
`;

const NavBarTwo = () => {
  return (
    <NavbarWrapper className={styles.font}>
      <div>
        <img
          src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384"
          alt="unacademy logo"
        />
      </div>

      <Topflex>
        <NotificationsNoneRoundedIcon
          style={{ color: "grey", cursor: "pointer" }}
        />

        <Progress>
          <div style={{ width: 15, height: 15 }}>
            <CircularProgressbar value={20} />
          </div>
          <span>0 min</span>
          <div style={{ width: 15, height: 15 }}>
            <WhatshotSharpIcon />
          </div>
          <span>0 days</span>
        </Progress>

        <div>
          <Dropdown />
        </div>
      </Topflex>
    </NavbarWrapper>
  );
};

export default NavBarTwo;
