import React from 'react'
import styles from "./Payment.module.css"

export const AddressComponent = () => {
    return (
        <div>
            <div className={styles.address}>
                <div>
                    <h1 className={styles.address_heading}>ASHISH</h1>
                    <ul className={styles.details_list}>
                        <li>+91 8923083289</li>
                        <li>ashishsingh@gmail.com</li>
                        <li>Pune</li>
                    </ul>
                </div>
                <div className={styles.addressImage} > <img height="80%" width="90%" src="https://static.uacdn.net/thumbnail/user/default.png?fm=webp" alt="" /></div>
            </div>
        </div>
    )
}
