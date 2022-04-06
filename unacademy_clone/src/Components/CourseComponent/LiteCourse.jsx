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
      <div className={styles.lite}>

          <div className={styles.liteHead}>
              Lite Subscription
          </div>
          <div className={styles.liteSubHead}>
              Assess your preparation with tests ( unavailable in iOS )
          </div>
          <div className={styles.litefeatures}>
              <div className={styles.liteOffer}>
                  <div>
                      <img src="https://static.uacdn.net/web-cms/benefittest_d542d8446b.svg?q=75&w=256&fm=webp" alt="" className={styles.imgliteOffer} style={{ marginRight: "4em", marginLeft: "1.5em", marginTop: ".5em" }} />
                  </div>
                  <div className={styles.offerDetails}>
                      <h3 className={styles.liteH3}>Access to curated test series</h3>
                      <p className={styles.liteP}>Curated test series that lets you evaluate your preparation before your examination</p>
                  </div>
              </div>
              <div className={styles.liteOffer}>
                  <img src="https://static.uacdn.net/web-cms/lite4_1d459fbce7.png" alt="" className={styles.imgliteOffer} />
                  <div className={styles.offerDetails}>
                      <h3 className={styles.liteH3}>Daily practice questions</h3>
                      <p className={styles.liteP}>Strengthen your concepts by practising daily questions and quizzes</p>
                  </div>
              </div>
          </div>
          <hr />
          <div className={styles.litePricing}>
              <div className={styles.pricingText}>
                  GATE & ESE - lite Subscription Starts
                  from<span className={styles.fees}>₹104/month</span>
              </div>
              <button className={styles.Pricebtn} onClick={GotoSubscription}><h4>View Pricing</h4></button>
          </div>
      </div>

  )
}

export default LiteCourse
