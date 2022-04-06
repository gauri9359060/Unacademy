import { Button, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
const IconicCourse = () => {
    return (
        <>
            <div className={styles.Triangle}></div>
        <div className={styles.iconic}>
            <div className={styles.iconicIntro}>
                INTRODUCING
            </div>
            <div className={styles.iconicHead}>
                ICONIC Subscription
            </div>
            <div className={styles.iconicSubHead}>
                Take Your GATE & ESE Preparation to Next Level with Your Personal Coach
            </div>
            <div className={styles.iconicfeatures}>
                <div className={styles.iconicOffer}>
                        <img src="https://static.uacdn.net/web-cms/1_1_Live_Mentorship_498cbc7edd.svg?q=75&w=256&fm=webp" alt="" />
                        <div>
                            <Typography>1:1 Live Mentorship</Typography>
                            <Typography>Get personalized expert guidance on exam-strategy and get help whenever you are stuck</Typography>
                        </div>
                </div>
                <div className={styles.iconicOffer}>
                        <img src="https://static.uacdn.net/web-cms/1_1_Live_Mentorship_498cbc7edd.svg?q=75&w=256&fm=webp" alt="" />
                        <div>
                            <Typography>1:1 Live Mentorship</Typography>
                            <Typography>Get personalized expert guidance on exam-strategy and get help whenever you are stuck</Typography>
                        </div>
                </div>
                <div className={styles.iconicOffer}>
                        <img src="https://static.uacdn.net/web-cms/1_1_Live_Mentorship_498cbc7edd.svg?q=75&w=256&fm=webp" alt="" />
                        <div>
                            <Typography>1:1 Live Mentorship</Typography>
                            <Typography>Get personalized expert guidance on exam-strategy and get help whenever you are stuck</Typography>
                        </div>
                </div>
                <div className={styles.iconicOffer}>
                        <img src="https://static.uacdn.net/web-cms/1_1_Live_Mentorship_498cbc7edd.svg?q=75&w=256&fm=webp" alt="" />
                        <div>
                            <Typography>1:1 Live Mentorship</Typography>
                            <Typography>Get personalized expert guidance on exam-strategy and get help whenever you are stuck</Typography>
                        </div>
                </div>
            </div>
            <hr />
            <div className={styles.iconicPricing}>
                <div>
                    GATE & ESE - ICONIC subscription starts
                    from <span>₹3,467/month</span>
                </div>
                <Button>View Pricing</Button>
            </div>
        </div>
        </>
    )
}

export default IconicCourse
