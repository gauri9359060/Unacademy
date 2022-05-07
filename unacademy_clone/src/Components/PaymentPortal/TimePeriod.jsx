import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { course_plan, plan } from '../../Redux/Action'
import Slider from './slider'
import styles from './styles.module.css'
const TimePeriod = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const coursePlan = useSelector(state => state.coursePlan);
  const plan_name = useSelector(state => state.planName);
  const getCourse = (name) => {
    fetch(`http://localhost:8005/Price?type=${name}`)
      .then(res => res.json())
      .then(res => dispatch(course_plan(res)))
      .catch(err => console.log(err))
  }
  return (
    <div className={styles.PlanMainContainer}>
      <div className={styles.slider}>
        <Slider />
      </div>
      <div className={styles.planContainer}>
        <h1 className={styles.planHeading}>UPSC CSE - GS subscription</h1>
        <div className={styles.planBtnContianer}>
          <button className={styles.PlanBtn} onClick={() => {
            dispatch(plan("plus"))
            getCourse(plan_name)
          }
          }>Plus</button>
          <button className={styles.PlanBtn} onClick={() => {
            dispatch(plan("iconic"))
            getCourse(plan_name);
          }}>Iconic</button>
          <button className={styles.PlanBtn} onClick={() => {
            dispatch(plan("lite"))
            getCourse(plan_name);
          }}>Lite</button>
        </div>
        <div className={styles.planAlert}>
          <span style={{margin:'auto'}}>
            <img src="https://static.uacdn.net/production/_next/static/images/sale_discount.png?q=75&w=48" width="5%" alt="" /> No cost EMI available on 6 months & above subscription plans
          </span>
                  </div>
        <div className={styles.PlanPeriodContainer}>
          {
            coursePlan.map((ele) => {
              return (
                <div className={styles.planTile}>
                  <input type="checkbox" className={styles.planCheckBox} />
                  <span className={styles.planSpan1}>
                  <h4 className={styles.months}>{ele.months} months</h4>
                    <p className={styles.save}>{ele.save ? `save ${ele.save}`:""}</p></span>
                  <span className={styles.planSpan2}>
                  <h4 className={styles.price}>{ele.price}/mo</h4>
                  <p className={styles.total}>Total
                    ₹{ele.total}</p>
                  </span>
                </div>

              )
            })
          }
          <p className={styles.paymentTime}>To be paid as one time</p>
        </div>
        <div className={styles.paymentBtn}>

          <span><img src="https://static.uacdn.net/production/_next/static/images/gift.svg?q=75&w=48" alt="" height="24px" width="24px" style={{marginTop:"12px"}}
          /> <TextField id="outlined-basic" placeholder='Have a referral Code?' height="48px"
            width= "280px" variant="outlined" sx={{marginRight:"24px"}} /></span>
          <button className={styles.paymentButton} onClick={()=>{

            navigate('/proceedToPay')

          }}>
            Proceed to pay
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimePeriod
