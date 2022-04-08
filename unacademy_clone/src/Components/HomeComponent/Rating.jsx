import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import React from "react";
import styles from "./Home.module.css"
import RatingCard from "./RatingCard";
const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 160px;
  margin-bottom:100px;
  display: flex;
`;
const Rating = () => {
  return (
    <div>
      <Container>
        <div className={styles.RatingCont}>
            <h1 style={{fontSize:30,color:"#3C4852"}}>Start learning with Unacademy</h1>
            <p style={{paddingTop:20,fontSize:20}}>Get unlimited access to structured courses & doubt clearing sessions</p>
           
              <Stack direction="row">
                <Button
                  variant="contained"
                  color="success"
                  style={{ marginTop: 70, padding: 15, width: 250 ,backgroundColor:"#08bd80"}}
                >
                  <h3>Start learning</h3>
                </Button>
              </Stack>
        </div>
        <div className={styles.ratingBox}>
            <RatingCard/>
        </div>
      </Container>
    </div>
  );
};

export default Rating;
