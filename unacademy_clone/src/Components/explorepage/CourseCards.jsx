import React from "react";
import styled from "styled-components";
import styles from "./explore.module.css"
import {useNavigate} from 'react-router-dom'
const Container = styled.div`
 
`;
const CourseCards = ({courses}) => {
  const navigate =  useNavigate()
  return <Container>
            <div >
                {
                    courses.map((item)=>{
                        return( <div className={styles.cont}>
                            <p>{item.title}</p>
                            <div className={styles.contflex} onClick={()=>{navigate('/course')}}>
                                {
                                    item.card.map((detail)=>{
                                        return (
                                           <div className={styles.card}>
                                           <img src={detail.logo} alt="..." style={{width:40,height:40}}/>
                                           <p>{detail.name}</p>
                                           </div>
                                            
                                            )
                                    })
                                }
                            </div>
                        </div>)
                    })
                }
            </div>
  </Container>;
};

export default CourseCards;
