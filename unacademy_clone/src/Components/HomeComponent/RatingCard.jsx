import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import styles from './Home.module.css'
const Container = styled.div`
    display:flex;
    row-gap:10px;
`
const RatingCard = () => {
    const [ratecard,setRateCard] = useState([])
    const [ratecard2,setRateCard2]=useState([])

    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        fetch(" https://unacademy-backend.herokuapp.com/ratingcard")
          .then((res) => res.json())
          .then((res) => setRateCard(res));
      };
      useEffect(() => {
        getData2();
      }, []);
    
      const getData2 = () => {
        fetch(" https://unacademy-backend.herokuapp.com/ratingcard2")
          .then((res) => res.json())
          .then((res) => setRateCard2(res));
      };
  return (
    <Container>
        <div>
            {
                ratecard.map((item)=>{
                    return(
                        <div style={{ backgroundImage: `url("${item.image}")`}} className={styles.ratingCard}>
                            <p style={{padding:20,paddingLeft:10,fontSize:20}}>{item.title}</p>
                            <h2 style={{paddingLeft:10,fontSize:35,color:"#3C4852"}}>{item.count}</h2>
                        </div>
                    )
                })
            }
        </div>
        <div style={{marginTop:50}}>
            {
                ratecard2.map((item)=>{
                    return(
                        <div style={{ backgroundImage: `url("${item.image}")`,marginLeft:40}} className={styles.ratingCard}>
                            <p style={{padding:20,paddingLeft:10,fontSize:20}}>{item.title}</p>
                            <h2 style={{paddingLeft:10,fontSize:35}}>{item.count}</h2>
                        </div>
                    )
                })
            }
        </div>
    </Container>
  )
}

export default RatingCard
