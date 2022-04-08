import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
const LiteCourse = () => {
    const navigate = useNavigate()
    const GotoSubscription = () => {
        console.log("goto subscription");
        navigate('/subscription');
    }
  return (
      <div className={styles.compContainer2}>

          <div className={styles.Head}>
              Lite Subscription
          </div>
          <div className={styles.SubHead}>
              Assess your preparation with tests ( unavailable in iOS )
          </div>
          <div className={styles.features}>
              <div className={styles.Offer}>
                  <div>
                      <img src="https://static.uacdn.net/web-cms/benefittest_d542d8446b.svg?q=75&w=256&fm=webp" alt="" className={styles.imgOffer} style={{ marginRight: "4em", marginLeft: "1.5em", marginTop: ".5em" }} />
                  </div>
                  <div className={styles.offerDetails}>
                      <h3 className={styles.H3}>Access to curated test series</h3>
                      <p className={styles.P}>Curated test series that lets you evaluate your preparation before your examination</p>
                  </div>
              </div>
              <div className={styles.Offer}>
                  <img src="https://static.uacdn.net/web-cms/lite4_1d459fbce7.png" alt="" className={styles.imgOffer} />
                  <div className={styles.offerDetails}>
                      <h3 className={styles.H3}>Daily practice questions</h3>
                      <p className={styles.P}>Strengthen your concepts by practising daily questions and quizzes</p>
                  </div>
              </div>
          </div>
          <hr />
          <div className={styles.Pricing}>
              <div className={styles.pricingText}>
                  UPSC CSE - GS - lite Subscription Starts
                  from<span className={styles.fees}>₹104/month</span>
              </div>
              <button className={styles.Pricebtn} onClick={GotoSubscription}><h4>View Pricing</h4></button>
          </div>
      </div>

  )
}

export default LiteCourse
