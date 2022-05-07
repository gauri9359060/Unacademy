import React, {useContext} from 'react'
import styles from './styles.module.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../Context/AuthContextProvider"
const Banner = () => {
    const navigate=useNavigate()
    const { subscribed } = useContext(AuthContext)
    const GotoSubscription = () => {
        console.log("goto subscription");
        navigate('/subscription');
    }

    return (
        <div className={styles.banner}>
            <img src="https://static.uacdn.net/production/_next/static/images/goal/boy.svg?q=75&w=750" alt="" width="100%" />
            <div className={styles.BannerText}>
                <div className={styles.recap}>
                    <img src="https://static.uacdn.net/production/_next/static/images/winter-logo.svg?q=75&w=48" alt="" />
                    Experience Our 2021 Recap  <ChevronRightIcon />
                </div>
                <h1 className={styles.head}>
                    Crack UPSC CSE - GS with India's largest learning platform
                </h1>
                <h2 className={styles.subhead}>Get Plus subscription and access unlimited live and recorded courses from India's best educators</h2>
                <div className={styles.subsButtonDiv}><Button variant="contained" sx={{ backgroundColor: '#08bd80', fontSize: '16px', fontWeight: "600" }} onClick={GotoSubscription} className={styles.Subscriptionbtn}>
                    { subscribed.status===true?`${subscribed.course} Subscription`:"Get Subscription"}
                </Button></div>
            </div>
            <img src="https://static.uacdn.net/production/_next/static/images/goal/girl.svg?q=75&w=750" alt="" width="100%" style={{ float: "right" }} />
        </div>
    )
}

export default Banner
