import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
const PlusCourse = () => {
    const navigate = useNavigate()
    const GotoSubscription = () => {
        console.log("goto subscription");
        navigate('/subscription');
    }
    return (
        <div className={styles.compContainer2}>

            <div className={styles.Head}>
                Plus Subscription
            </div>
            <div className={styles.SubHead}>
                Your access to the best of Unacademy
            </div>
            <div className={styles.features}>
                <div className={styles.Offer}>
                    <div>
                        <img src="https://static.uacdn.net/web-cms/benefitchat_1b0a84e281.svg?q=75&w=256&fm=webp" alt="" className={styles.imgOffer} style={{ marginRight: "4em", marginLeft: "1.5em", marginTop: ".5em" }} />
                    </div>
                    <div className={styles.offerDetails}>
                        <h3 className={styles.H3}>Daily live classes</h3>
                        <p className={styles.P}>Chat with your educator, engage in discussions, ask your doubts, and answer polls - all while the class is going on</p>
                    </div>
                </div>
                <div className={styles.Offer}>
                    <img src="https://static.uacdn.net/web-cms/benefittest_d542d8446b.svg?q=75&w=256&fm=webp" alt="" className={styles.imgOffer} />
                    <div className={styles.offerDetails}>
                        <h3 className={styles.H3}>Live tests & quizzes</h3>
                        <p className={styles.P}>Evaluate your preparation with our regular mock tests and quizzes and get detailed analysis on your performance</p>
                    </div>
                </div>
                <div className={styles.Offer}>
                    <img src="https://static.uacdn.net/web-cms/benefitcourses_cceb8214b5.svg?q=75&w=256&fm=webp" alt="" className={styles.imgOffer} />
                    <div className={styles.offerDetails}>
                        <h3 className={styles.H3}>Structured courses</h3>
                        <p className={styles.P}>All our courses are structured in line with your exam syllabus to help you best prepare for it</p>
                    </div>
                </div>
                <div className={styles.Offer}>
                    <img src="https://static.uacdn.net/web-cms/benefitaccess_9a0fb1469f.svg?q=75&w=256&fm=webp" alt="" className={styles.imgOffer} />
                    <div className={styles.offerDetails}>
                        <h3 className={styles.H3}>Unlimited access</h3>
                        <p className={styles.P}>One subscription gets you access to all our live and recorded courses to watch from the comfort of any of your devices
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.Pricing}>
                <div className={styles.pricingText}>
                    UPSC CSE - GS - Plus Subscription Starts
                    from<span className={styles.fees}>₹1,967/month</span>
                </div>
                <button className={styles.Pricebtn} onClick={GotoSubscription}><h4>View Pricing</h4></button>
            </div>
        </div>
    )
}

export default PlusCourse
