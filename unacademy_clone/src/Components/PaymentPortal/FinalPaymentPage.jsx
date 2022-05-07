import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import VerticalTabs from "./VerticalTabs";
const FinalPaymentPage = () => {
  const packagePlan=useSelector(state=>state.packagePlan)
  console.log(packagePlan)
  const navigate = useNavigate()
  return (
    <div>
      <div className={styles.logo}>
        <img
          src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384"
          alt="unacademy logo"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div style={{padding:30}}>
            <div >
              <h2>Gauri Patil</h2>
              <span>+918923083289</span> &nbsp;&nbsp; • &nbsp;&nbsp;{" "}
              <span>gaurip388@gmail.com</span> &nbsp;&nbsp;•&nbsp;&nbsp;{" "}
              <span>Maharashtra</span>
            </div>
            <div>
              <img
                src="https://static.uacdn.net/thumbnail/user/default.png?fm=webp"
                alt="$"
              />
            </div>
          </div>
          <div style={{marginTop:30, paddingBottom:60,marginBottom:100}}>
                <VerticalTabs/>
            </div>
        </div>
        <div className={styles.rightBox}>
            <div>
                <h3 style={{textTransform:"uppercase"}}>UPSC CSE - GS - {packagePlan.type}</h3>
                <h3>subscription</h3>
                <p>{packagePlan.months} months</p> 
                <p style={{color:"#7A8B94"}}>Valid till 5 May, 2025 <span style={{color:"#08bd80",paddingLeft:40,cursor:"pointer"}} onClick={()=>navigate("/timePeriod")}>Change duration</span></p>
            </div>
            <div className={styles.referral}>
                <div>
                <span><img src="https://static.uacdn.net/production/_next/static/images/gift.svg?q=75&w=32" alt="%"/></span><span>
                  <input type="text" placeholder="   Have a refferal code?"/>
                </span>
                </div>
                <div>
                  <span>
                    <img src="https://static.uacdn.net/production/_next/static/images/credit.png?q=75&w=32" alt="#"/>
                  </span>
                  <span style={{fontSize:14,paddingTop:20}}>200 credits</span> <span style={{color:"#08bd80",paddingLeft:100,cursor:"pointer"}}>Redeem</span>
                </div>
            </div>
            <div style={{padding:20}}>
              <p style={{marginBottom:10}}><span>Subscription fee</span><span style={{paddingLeft:120}}>₹{packagePlan.total}</span></p>
              <hr/>
              <span>
              <h3 style={{ marginTop: 20 }}>Total<span style={{ fontSize: 15, fontWeight: 100 }}>(Incl. of all taxes)</span><span style={{ paddingLeft: 80 }}>₹{packagePlan.total}</span></h3>
              
              </span>

              
            </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPaymentPage;
