import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";
import { width } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const packagePlan = useSelector(state => state.packagePlan)
  console.log(packagePlan)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };       
  const { setSubscribed } = React.useContext(AuthContext)
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: 20,
        padding: 20,
      }}
    >
      <div>
        <h2>Choose a payment method</h2>
      </div>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 400,
        }}
        style={{ paddingTop: 40 }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Pay in Parts" {...a11yProps(0)}  style={{textTransform:"none"}}/>
          <Tab label="Card" {...a11yProps(1)} style={{textTransform:"none"}}/>
          <Tab label="Net Banking" {...a11yProps(2)} style={{textTransform:"none"}} />
          <Tab label="EMI" {...a11yProps(3)}  style={{textTransform:"none"}}/>
          <Tab label="Cash" {...a11yProps(4)}  style={{textTransform:"none"}}/>
          <Tab label="No-cost loan" {...a11yProps(5)} style={{textTransform:"none"}}/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <p>
            Pay your subscription amount in multiple parts, across days or
            payment options
          </p>
          <br />
          <h4>How it works</h4>
          <div className={styles.HowItWorks}>
            <div className={styles.HowItWorksInner}>
              <div>
                <img
                  src="https://static.uacdn.net/web-cms/step1_97d2cd5213.png"
                  alt="#"
                />
              </div>
              <div>
                <p>
                  It’s simple, begin by chosing the number of parts you want to
                  pay in
                </p>
              </div>
            </div>
            <div className={styles.HowItWorksInner}>
              <div>
                <img
                  src="https://static.uacdn.net/web-cms/step2_a50e3c649d.png"
                  alt="#"
                />
              </div>
              <div>
                <p>Get started by paying the first part payment today</p>
              </div>
            </div>
            <div className={styles.HowItWorksInner}>
              <div>
                <img
                  src="https://static.uacdn.net/web-cms/step3_79d03a52b3.png"
                  alt="#"
                />
              </div>
              <div>
                <p>
                  Pay remaining parts by the due date & get access to your
                  subscription
                </p>
              </div>
            </div>
            <div style={{ marginTop: 20, display: "flex" }}>
              <p style={{ fontSize: 13 }}>
                Have questions?{" "}
                <span
                  style={{
                    color: "#08bd80",
                    fontWeight: 600,
                    borderBottomStyle: "dotted",
                    cursor: "pointer",
                  }}
                >
                  Read our FAQ’s
                </span>
              </p>
              <button className={styles.continueBtn}>Continue</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
                  
                      <input type="number" placeholder="   Card number" className={styles.cardInput}/>
                      <br/><br/>
                      <span><input type="number" placeholder="    Valid through                    &nbsp;        &nbsp;     &nbsp; MM / YY " className={styles.cardExpiry}/><input  className={styles.cvv} placeholder="   CVV"/></span>
                      <input placeholder="   Name on card" className={styles.cardInput}/>
                      <br/><br/>
                      <button className={styles.payBtn}>Pay</button>
                 
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className={styles.selectBank}>
                  <div style={{display:"flex"}} className={styles.bank}>
                    <span>
                      <img src="https://static.uacdn.net/app_icons/payments/sbi.png" alt="#"/>
                    </span>
                    <div>
                      <p style={{marginTop:5}}>State Bank of India</p>
                    </div>
                  </div>
                  <div style={{display:"flex"}} className={styles.bank}>
                    <span>
                      <img src="https://static.uacdn.net/app_icons/payments/icici.png" alt="#"/>
                    </span>
                    <div>
                      <p style={{marginTop:5}}>ICICI Netbanking</p>
                    </div>
                  </div>
                  <div style={{display:"flex"}} className={styles.bank}>
                    <span>
                      <img src="https://static.uacdn.net/app_icons/payments/hdfc.png" alt="#"/>
                    </span>
                    <div>
                      <p style={{marginTop:5}}>HDFC Bank</p>
                    </div>
                  </div>
                  <div style={{display:"flex"}} className={styles.bank}>
                    <span>
                      <img src="https://static.uacdn.net/app_icons/payments/axis.png" alt="#"/>
                    </span>
                    <div>
                      <p style={{marginTop:5}}> Axis Bank </p>
                    </div>
                  </div>
          </div>
          <button className={styles.payBtn} style={{marginTop:40}}>Pay</button>
        </TabPanel>
        <TabPanel value={value} index={3}>
         
                  <h5>Debit Card EMI</h5>
                  <div>
                      <div className={styles.EMImain}>
                          <div><p>Federal Bank - Debit card</p></div>
                          <div style={{marginLeft:150}}><button>No cost EMI*</button></div>
                      </div>
                      <div className={styles.EMImain}>
                          <div><p>Axis Bank - Debit card</p></div>
                          <div style={{marginLeft:175}}><button>No cost EMI*</button></div>
                      </div>
                      <div className={styles.EMImain}>
                          <div><p>Bank of baroda - Debit card</p></div>
                          <div style={{marginLeft:140}}><button>No cost EMI*</button></div>
                      </div>
                      <div className={styles.EMImain}>
                          <div><p>HDFC Bank - Debit card</p></div>
                          <div style={{marginLeft:165}}><button>No cost EMI*</button></div>
                      </div>
                      <div className={styles.EMImain}>
                          <div><p>ICICI Bank - Debit card</p></div>
                          <div style={{marginLeft:170}}><button>No cost EMI*</button></div>
                      </div>
                      <h5 style={{paddingTop:20}}>Cardless EMI</h5>
                      <div className={styles.EMImain}>
                          <div><p>Bajaj Finserv - cardless</p></div>
                          <div style={{marginLeft:170}}><button>No cost EMI*</button></div>
                      </div>
                     
                  </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <p>Pay your subscription amount in cash or DD</p>
          <p style={{ fontSize: 10, color: "gray", marginTop: 10 }}>
            POWERED BY{" "}
            <span>
              <img
                src="https://static.uacdn.net/production/_next/static/images/payments/icici-logo.svg?q=75&w=96"
                alt="#"
              />
            </span>
          </p>
          <div className={styles.cashHowItworks}>
            <p>How it Works ?</p>
            <div className={styles.cashHowItworks2}>
              <div className={styles.number}>1</div>
              <div className={styles.dis}>
                <p style={{ fontWeight: 600, color: "#3C4852" }}>
                  Generate cash receipt
                </p>
                <p style={{ fontSize: 13, paddinTop: 20, color: "#3C4852" }}>
                  Continue to confirm paying in cash and generate a cash receipt
                </p>
              </div>
            </div>
            <div className={styles.cashHowItworks2}>
              <div className={styles.number}>2</div>
              <div className={styles.dis}>
                <p style={{ fontWeight: 600, color: "#3C4852" }}>
                  Pay ₹{packagePlan.total} at ICICI Bank
                </p>
                <p style={{ fontSize: 13, paddinTop: 20, color: "#3C4852" }}>
                  Print the receipt and visit your{" "}
                  <span style={{ color: "#08bd80" }}>
                    nearby ICICI Bank branch{" "}
                  </span>
                  by May 13
                </p>
              </div>
            </div>
            <div className={styles.cashHowItworks2}>
              <div className={styles.number}>3</div>
              <div className={styles.dis}>
                <p style={{ fontWeight: 600, color: "#3C4852" }}>
                  Get instant subscription access
                </p>
                <p style={{ fontSize: 13, paddinTop: 20, color: "#3C4852" }}>
                  Kickstart your learning immediately after payment
                </p>
              </div>
            </div>
            <button className={styles.continueBtn2} onClick={()=>{
              let payload = {
                status:true,
                course:  packagePlan.type 
              }
              setSubscribed(payload)
              navigate('/paymentsuccess')}}> Continue</button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
        <p>
            Pay your subscription amount in multiple parts, across days or
            payment options
          </p>
          <br />
          <h4>How it works</h4>
          <div className={styles.HowItWorks}>
            <div className={styles.HowItWorksInner}>
              <div>
                <img
                  src="https://static.uacdn.net/web-cms/step1_97d2cd5213.png"
                  alt="#"
                />
              </div>
              <div>
                <p>
                  It’s simple, begin by chosing the number of parts you want to
                  pay in
                </p>
              </div>
            </div>
            <div className={styles.HowItWorksInner}>
              <div>
                <img
                  src="https://static.uacdn.net/web-cms/step2_a50e3c649d.png"
                  alt="#"
                />
              </div>
              <div>
                <p>Get started by paying the first part payment today</p>
              </div>
            </div>
            <div className={styles.HowItWorksInner}>
              <div>
                <img
                  src="https://static.uacdn.net/web-cms/step3_79d03a52b3.png"
                  alt="#"
                />
              </div>
              <div>
                <p>
                  Pay remaining parts by the due date & get access to your
                  subscription
                </p>
              </div>
            </div>
            <div style={{ marginTop: 20, display: "flex" }}>
              <p style={{ fontSize: 13 }}>
                Have questions?{" "}
                <span
                  style={{
                    color: "#08bd80",
                    fontWeight: 600,
                    borderBottomStyle: "dotted",
                    cursor: "pointer",
                  }}
                >
                  Read our FAQ’s
                </span>
              </p>
              <button className={styles.continueBtn}>Continue</button>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
