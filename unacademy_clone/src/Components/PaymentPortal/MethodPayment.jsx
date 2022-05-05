import React from 'react'
import styles from "./Payment.module.css"

export const MethodPayment = () => {
    return (
        <div>
            <h2 style={{ marginLeft: "30px", fontSize: "20px" }}>Choose a Payment Method</h2>
            <div className={styles.payment_mode}>
                <div className={styles.method_button}>
                    <button>Pay in Parts</button>
                    <button>card</button>
                    <button>Net banking</button>
                    <button>EMI</button>
                    <button>Cash</button>
                    <button>No Cost Loan</button>
                </div>
                <div>
                    <h3>Pay your Subscription amount in cash or DD</h3>
                    <p>powered by </p> <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSTu0GzQoJO5z3HxpxD-MrdvLZsEt_BfWJv0BJMS1GdDautLv28BRiWrqsmAzzBpO1oA&usqp=CAU" alt="" /></span>
                    <h4>How it Works?</h4>
                    <ol>
                        <li>
                            <ul>
                                <li>Generate cash receipt</li>
                                <li> Continue to confirm paying in cash and generate a cash receipt</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li> Pay ₹76,584 at ICICI Bank </li>
                                <li>Print the receipt and visit yournearby ICICI Bank branchby Apr 16</li>
                            </ul>

                        </li>
                        <li>
                            <ul>
                                <li> Get instant subscription access</li>
                                <li>Kickstart your learning immediately after payment</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
