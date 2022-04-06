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
        <div className={styles.plus}>

            <div className={styles.plusHead}>
                Plus Subscription
            </div>
            <div className={styles.plusSubHead}>
                Your access to the best of Unacademy
            </div>
            <div className={styles.plusfeatures}>
                <div className={styles.plusOffer}>
                    <div>
                        <img src="https://static.uacdn.net/web-cms/benefitchat_1b0a84e281.svg?q=75&w=256&fm=webp" alt="" className={styles.imgplusOffer} style={{ marginRight: "4em", marginLeft: "1.5em", marginTop: ".5em" }} />
                    </div>
                    <div className={styles.offerDetails}>
                        <h3 className={styles.plusH3}>Daily live classes</h3>
                        <p className={styles.plusP}>Chat with your educator, engage in discussions, ask your doubts, and answer polls - all while the class is going on</p>
                    </div>
                </div>
                <div className={styles.plusOffer}>
                    <img src="https://static.uacdn.net/web-cms/benefittest_d542d8446b.svg?q=75&w=256&fm=webp" alt="" className={styles.imgplusOffer} />
                    <div className={styles.offerDetails}>
                        <h3 className={styles.plusH3}>Live tests & quizzes</h3>
                        <p className={styles.plusP}>Evaluate your preparation with our regular mock tests and quizzes and get detailed analysis on your performance</p>
                    </div>
                </div>
                <div className={styles.plusOffer}>
                    <img src="https://static.uacdn.net/web-cms/benefitcourses_cceb8214b5.svg?q=75&w=256&fm=webp" alt="" className={styles.imgplusOffer} />
                    <div className={styles.offerDetails}>
                        <h3 className={styles.plusH3}>Structured courses</h3>
                        <p className={styles.plusP}>All our courses are structured in line with your exam syllabus to help you best prepare for it</p>
                    </div>
                </div>
                <div className={styles.plusOffer}>
                    <img src="https://static.uacdn.net/web-cms/benefitaccess_9a0fb1469f.svg?q=75&w=256&fm=webp" alt="" className={styles.imgplusOffer} />
                    <div className={styles.offerDetails}>
                        <h3 className={styles.plusH3}>Unlimited access</h3>
                        <p className={styles.plusP}>One subscription gets you access to all our live and recorded courses to watch from the comfort of any of your devices
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.plusPricing}>
                <div className={styles.pricingText}>
                    GATE & ESE - Plus Subscription Starts
                    from<span className={styles.fees}>₹1,967/month</span>
                </div>
                <button className={styles.Pricebtn} onClick={GotoSubscription}><h4>View Pricing</h4></button>
            </div>
        </div>
    )
}

export default PlusCourse
