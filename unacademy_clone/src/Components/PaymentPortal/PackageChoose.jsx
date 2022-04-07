import { Button } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
const PackageChoose = () => {
    const lin = "https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Plus_icon_9029cac986.png"
    return (
        <div className={styles.Subscription} >
            <div className={styles.SubscriptionNav}>
                <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384" alt="" />
            </div>
            <div className={styles.subsHead}>
                <h5 className={styles.subsH5}>
                    GATE & ESE
                </h5>
                <p className={styles.subsP}>Select a subscription plan that suits you</p>
            </div>
            <div className={styles.SubsCardContianer}>
                <div className={styles.PlusSubscription}>
                    <div className={styles.subscriptionCardHeader}>
                        <div>
                            <h3 className={styles.SubsH3}>plus</h3>
                            <p className={styles.packP}>Basic plan to get you started</p>
                        </div>
                        <img src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Plus_icon_9029cac986.png" alt="" width="40%" />
                    </div>
                    <div className={styles.CourseBenifits}>
                        <ul className={styles.plusbenifitList}>
                            <li>
                                India's best educators
                            </li>
                            <li>
                                Interactive live classes
                            </li>
                            <li>
                                Structured courses & PDFs
                            </li>
                            <li>
                                Live tests & quizzes
                            </li>
                        </ul>
                    </div>
                    <div className={styles.subsButtonDiv}>
                        <Button variant="contained" sx={{ backgroundColor: '#08bd80', fontSize: '16px', fontWeight: "600" }} className={styles.packSelectBtn}>
                            Select PLUS
                        </Button>
                    </div>
                </div>
                <div className={styles.IconicSubscription}>
                    <div>
                        <div>
                            <h3 className={styles.SubsH3}>iconic</h3>
                            <p>Take your GATE & ESE preparation to next level with Personal Coach</p>
                        </div>
                        <img src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Group_4894_2b74e644b9.png" alt="" width="40%" />
                    </div>
                    <div className={styles.CourseBenifits}>
                        <ul className={styles.plusbenifitList}>
                            <li>
                                India's best educators
                            </li>
                            <li>
                                Interactive live classes
                            </li>
                            <li>
                                Structured courses & PDFs
                            </li>
                            <li>
                                Live tests & quizzes
                            </li>
                        </ul>
                    </div>
                    <button className={styles.selectPackageBtn}>
                        Select ICONIC
                    </button>
                </div>
                <div className={styles.LiteSubscription}>
                    <div>
                        <div>
                            <h3>Lite</h3>
                            <p className={styles.packP}>Assess your preparation with tests</p>
                        </div>
                        <img src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Lite3_8aed32b41f.png" alt="" />
                    </div>
                    <div className={styles.CourseBenifits}>

                    </div>
                    <button className={styles.Subscriptionbtn}>
                        Select LITE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PackageChoose
