import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { useNavigate } from 'react-router-dom'
const PackageContainer = () => {
    const navigate = useNavigate()
    const [pack, setPack] = useState([])
    useEffect(() => {
        fetch(" https://unacademy-backend.herokuapp.com/Price?type=plus")
            .then(res => res.json())
            .then(res => {
                console.log("iconic:-", res)
                setPack(res)
            })
            .catch(err => console.log(err))
    }, [])
    const GotoSubscription = () => {
        console.log("goto subscription");
        navigate('/subscription');
    }
    return (
        <div className={styles.packageMainContainer}>
            <h1 className={styles.pkgHeading}>UPSC CSE - GS Subscription</h1>
            <div className={styles.packageContainer}>
                {
                    pack.map((ele) =>{
                        console.log(ele)

                        return <div className={styles.package}>
                            <div>{+ele.save === 0 ? "." : `${ele.save} OFF`}</div>
                            <div><h2>{ele.months} Months</h2></div>
                            <div><h1>₹ {ele.total}</h1></div>
                            <div>Total (Incl. of all taxes)</div>
                            <div className={styles.subsButtonDiv}><Button variant="contained" sx={{ backgroundColor: '#08bd80', fontSize: '16px', fontWeight: "600" }} onClick={GotoSubscription} className={styles.Subscriptionbtn}>
                                Get Subscription
                            </Button></div>
                        </div>
                    }
                    )
                }
            </div>
        </div>
    )
}

export default PackageContainer
