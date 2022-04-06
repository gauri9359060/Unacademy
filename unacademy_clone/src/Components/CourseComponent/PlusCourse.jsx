import { Button } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
const PlusCourse = () => {
  return (
      <div className={styles.plus}>
          
          <div className={styles.plusHead}>
              plus subscription
          </div>
          <div className={styles.plusSubHead}>
              Take Your GATE & ESE Preparation to Next Level with Your Personal Coach
          </div>
          <div className={styles.plusfeatures}>
              <div className={styles.plusOffer}></div>
              <div className={styles.plusOffer}></div>
              <div className={styles.plusOffer}></div>
              <div className={styles.plusOffer}></div>
          </div>
          <hr />
          <div className={styles.plusPricing}>
              <div>
                  GATE & ESE - plus subscription starts
                  from <span>₹1,967/month</span>
              </div>
              <Button>View Pricing</Button>
          </div>
      </div>
  )
}

export default PlusCourse
