import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
const IconicCourse = () => {
    const navigate = useNavigate ()
    const GotoSubscription = () => {
        console.log("goto subscription");
        navigate('/subscription');
    }
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
                        <div>
                            <img src="https://static.uacdn.net/web-cms/1_1_Live_Mentorship_498cbc7edd.svg?q=75&w=256&fm=webp" alt="" className={styles.imgIconicOffer}  style={{marginRight:"4em",marginLeft:"1.5em",marginTop:".5em"}}/>
                        </div>
                        <div className={styles.offerDetails}>
                            <h3 className={styles.iconicH3}>1:1 Live Mentorship</h3>
                            <p className={styles.iconicP}>Get personalized expert guidance on exam-strategy and get help whenever you are stuck</p>
                        </div>
                </div>
                <div className={styles.iconicOffer}>
                        <img src="https://static.uacdn.net/web-cms/Live_Doubt_solving_80b01abcbd.svg?q=75&w=256&fm=webp" alt="" className={styles.imgIconicOffer}/>
                        <div className={styles.offerDetails}>
                            <h3 className={styles.iconicH3}>Live Doubt Solving</h3>
                            <p className={styles.iconicP}>Get personalized one-on-one doubt solving with subject matter experts</p>
                        </div>
                </div>
                <div className={styles.iconicOffer}>
                        <img src="https://static.uacdn.net/web-cms/Asset1_e281ccca7f.png" alt="" className={styles.imgIconicOffer} />
                        <div className={styles.offerDetails}>
                            <h3 className={styles.iconicH3}>Preparatory Study Material</h3>
                            <p className={styles.iconicP}>Get comprehensive study material, practice sets for every subject, and brush up your core concepts with revision notes and other fun challenges</p>
                        </div>
                </div>
                <div className={styles.iconicOffer}>
                        <img src="https://static.uacdn.net/web-cms/Asset4_7d0b0e4c32.png" alt="" className={styles.imgIconicOffer} />
                        <div className={styles.offerDetails}>
                            <h3 className={styles.iconicH3}>All benefits of PLUS</h3>
                            <p className={styles.iconicP}>Live classes from top educators, mock tests & quizzes, structured batch courses in line with exam syllabus</p>
                        </div>
                </div>
            </div>
            <hr />
            <div className={styles.iconicPricing}>
                <div className={styles.pricingText}>
                    GATE & ESE - ICONIC Subscription Starts
                    from<span className={styles.fees}>₹3,467/month</span>
                </div>
                    <button className={styles.Pricebtn} onClick={GotoSubscription}><h4>View Pricing</h4></button>
            </div>
        </div>
        </>
    )
}

export default IconicCourse
