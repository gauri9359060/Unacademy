import React, { useState ,useEffect} from 'react'
import styled from 'styled-components';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './explore.module.css'
import { Link } from '@mui/material';

const FooterWrapper = styled.div`
    max-width:80%;
    margin:auto;
    display:flex;
    flex-direction:row;
    margin-bottom:50px;
    @media (max-width: 768px) {
    max-width:100%;
    flex-direction:column;
  }
  @media (max-width: 375px) {
    flex-direction:column;
    width:30%
  }

`
const Li= styled.li`
    list-style-type:none;
`

const AboutWrapper =styled.div`
  padding:30px;
  padding-bottom:0px;
  margin-left:20px;
  @media (max-width: 768px) {
    margin-left:0px;
  }

`
const Footer = () => {
  const [items,setItems] = useState([]);


  useEffect(() => {
    fetch("  https://unacademy-backend.herokuapp.com/footer")
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  return (
    <FooterWrapper>
        <div className={styles.logodiv}>
            <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384" alt='Unacademy logo' style={{padding:20}}/>
            <div className={styles.logo}>
            <Link style={{color:"gray"}}><FacebookRoundedIcon style={{width:18,height:18}}/></Link>
            <Link style={{color:"gray"}}><PlayCircleFilledIcon style={{width:18,height:18}}/></Link>
            <Link style={{color:"gray"}}><TwitterIcon style={{width:18,height:18}}/></Link>
            <Link style={{color:"gray"}}><InstagramIcon style={{width:18,height:18}}/></Link>
            <Link style={{color:"gray"}}><LinkedInIcon style={{width:18,height:18}}/></Link>
            </div>
            <p>© 2022 Sorting Hat Technologies Pvt Ltd</p>
        </div>
        <div className={styles.aboutFlex}>
            {
              items.map((data)=>{
                return(
                  <AboutWrapper key={data.id}>
                  <div>
                  <h6>{data.heading}</h6>
                  </div>
                    
                      {
                        data.content.map((item)=>{
                          return(
                            <div className={styles.about} key={item.id}>
                            
                                <Li>
                                   <Link style={{textDecoration:"none", color:"gray"}}>{item.title}</Link>
                                </Li>
                         
                               
                            </div>
                           
                          )
                        })
                      }
                      
                  </AboutWrapper>
                )
              })
            }
              <div style={{paddingTop:20,marginLeft:0}}>
                  <h6 style={{fontSize:15, color:"gray",marginBottom:10}}>LEARNER APP</h6>
                  <span>
                  <Link><img src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=128" alt="play" style={{width:120,height:40,cursor:"pointer"}}/></Link>
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                  <Link><img src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=128" alt="play"style={{width:120,height:40,cursor:"pointer"}}/></Link>
                  </span>
                  <h6 style={{fontSize:15, color:"gray",marginBottom:10}}>EDUCATOR APP</h6>
                  <span>
                  <Link><img src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=128" alt="play" style={{width:120,height:40,cursor:"pointer"}}/></Link>
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                  <Link><img src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=128" alt="play"style={{width:120,height:40,cursor:"pointer"}}/></Link>
                  </span>
              </div>
        </div>
    </FooterWrapper>
  )
}

export default Footer