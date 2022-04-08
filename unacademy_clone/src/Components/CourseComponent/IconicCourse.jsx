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
            <div className={styles.compContainer1}>
            <div className={styles.Intro}>
                INTRODUCING
            </div>
            <div className={styles.Head}>
                ICONIC Subscription
            </div>
            <div className={styles.SubHead}>
                    Take Your UPSC CSE - GS Preparation to Next Level with Your Personal Coach
            </div>
            <div className={styles.features}>
                <div className={styles.Offer}>
                        <div>
                            <img src="https://static.uacdn.net/web-cms/1_1_Live_Mentorship_498cbc7edd.svg?q=75&w=256&fm=webp" alt="" className={styles.imgOffer}  style={{marginRight:"4em",marginLeft:"1.5em",marginTop:".5em"}}/>
                        </div>
                        <div className={styles.offerDetails}>
                            <h3 className={styles.H3}>1:1 Live Mentorship</h3>
                            <p className={styles.P}>Get personalized expert guidance on exam-strategy and get help whenever you are stuck</p>
                        </div>
                </div>
                <div className={styles.Offer}>
                        <img src="https://static.uacdn.net/web-cms/Live_Doubt_solving_80b01abcbd.svg?q=75&w=256&fm=webp" alt="" className={styles.imgOffer}/>
                        <div className={styles.offerDetails}>
                            <h3 className={styles.H3}>Live Doubt Solving</h3>
                            <p className={styles.P}>Get personalized one-on-one doubt solving with subject matter experts</p>
                        </div>
                </div>
                <div className={styles.Offer}>
                        <img src="https://static.uacdn.net/web-cms/Asset1_e281ccca7f.png" alt="" className={styles.imgOffer} />
                        <div className={styles.offerDetails}>
                            <h3 className={styles.H3}>Preparatory Study Material</h3>
                            <p className={styles.P}>Get comprehensive study material, practice sets for every subject, and brush up your core concepts with revision notes and other fun challenges</p>
                        </div>
                </div>
                <div className={styles.Offer}>
                        <img src="https://static.uacdn.net/web-cms/Asset4_7d0b0e4c32.png" alt="" className={styles.imgOffer} />
                        <div className={styles.offerDetails}>
                            <h3 className={styles.H3}>All benefits of PLUS</h3>
                            <p className={styles.P}>Live classes from top educators, mock tests & quizzes, structured batch courses in line with exam syllabus</p>
                        </div>
                </div>
            </div>
            <hr />
            <div className={styles.Pricing}>
                <div className={styles.pricingText}>
                        UPSC CSE - GS - ICONIC Subscription Starts
                    from<span className={styles.fees}>₹3,467/month</span>
                </div>
                    <button className={styles.Pricebtn} onClick={GotoSubscription}><h4>View Pricing</h4></button>
            </div>
        </div>
        </>
    )
}

export default IconicCourse
