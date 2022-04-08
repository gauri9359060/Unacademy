import React from 'react'
import styles from './styles.module.css'
const PaymentPage = () => {
    return (
        <div className={styles.paymentMainContainer}>
            <div className={styles.paymentLeftComp}>
                <div className={styles.paymentProfile}>
                    <div className={styles.profileDetail}>
                        <h1>Name</h1>
                        <span>
                            <h3>mobile No.</h3>
                            <h3>email</h3>
                            <h3>State</h3>
                        </span>
                    </div>
                    <div className={styles.profilePhoto}>
                        <img src="" alt="profile photo" />
                    </div>
                </div>
                <div className={styles.paymentType}>
                    <div className={styles.paymentNav}>
                            <ul>
                                <li>Card</li>
                                <li>NetBanking</li>
                                <li>UPI</li>
                                <li>EMI</li>
                            </ul>
                    </div>
                    <div className={styles.paymentDetails}>
                            
                    </div>
                </div>
            </div>
            <div className={styles.paymentRightComp}>
                <div className={styles.paymentCourseSelected}>

                </div>
                <div className={styles.paymentRefferral}>

                </div>
                <div className={styles.paymentBill}>

                </div>
            </div>
        </div>
    )
}

export default PaymentPage
