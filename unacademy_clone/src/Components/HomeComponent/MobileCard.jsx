import styled from '@emotion/styled'
import React from 'react'
import styles from './Home.module.css'
const Container = styled.div`
    max-width:80%;
    margin:auto;
    margin-top:180px;
    display:flex;
    column-gap:50px;
    box-shadow:5px 5px 5px 5px rgba(233, 238, 242, 0.4);
`
const MobileCard = () => {
  return (
    <div>
        <Container>
            <div className={styles.leftBox}>
            <h1 style={{fontSize:40,color:"#3C4852"}}>Get the learning app </h1>
            <p style={{fontSize:20,paddingTop:30}}>Download lessons and learn anytime, anywhere with the Unacademy app</p>
           <span ><img src='https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=1920' alt=".." className={styles.appBtn}/></span>
            &nbsp;             &nbsp;

            <span><img src='https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=1920' alt='...' className={styles.appBtn}/></span>
            </div>
            <div className={styles.mobileImage}>
                <img src='https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&w=640' alt=".."/>
            </div>
            
        </Container>
    </div>
  )
}

export default MobileCard