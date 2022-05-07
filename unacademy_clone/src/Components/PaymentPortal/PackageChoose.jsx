import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { course_plan, plan } from "../../Redux/Action";
import styles from "./styles.module.css";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
const PackageChoose = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const plan_name = useSelector((state) => state.planName);
  const getCourse = (name) => {
    fetch(`http://localhost:3000/Price?type=${name}`)
      .then((res) => res.json())
      .then((res) => dispatch(course_plan(res)))
      .catch((err) => console.log(err));
  };

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  return (
    <>
        <div className={styles.Subscription} >
            <div className={styles.SubscriptionNav}>
                <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384" alt="" />
            </div>
            <div className={styles.subsHead}>
                <h5 className={styles.subsH5}>
                    UPSC CSE - GS
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
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                <span> India's best educators</span>
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Interactive live classes
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Structured courses & PDFs
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Live tests & quizzes
                            </li>
                        </ul>
                    </div>
                    <div className={styles.subsButtonDiv}>
                        <button className={styles.packSelectBtn} onClick={()=>{
                            dispatch(plan("plus"))
                            getCourse(plan_name)
                            navigate("/timePeriod")
                        }}
                            
                        >
                            Select PLUS
                        </button>
                    </div>
                </div>
                {/* ICOONIC subscription */}
                <div className={styles.IconicSubscription}>
                    <div className={styles.iconicHeadings}>
                        <div>
                            <h3 className={styles.SubsH3}>iconic</h3>
                            <p className={styles.subsP}>Take your GATE & ESE preparation to next level with Personal Coach</p>
                        </div>
                        <div style={{ padding: "3%", marginLeft: "5%" }}>
                            <img src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Group_4894_2b74e644b9.png" alt="" width="55%" />
                        </div>
                    </div>
                    <div className={styles.CourseBenifits}>
                        <ul className={styles.plusbenifitList}>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                <span> India's best educators</span>
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Interactive live classes
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Structured courses & PDFs
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48" alt="" width="12%" />
                                Live tests & quizzes
                            </li>
                        </ul>
                        <ul className={styles.plusbenifitList}>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/yellowTick.png?q=75&w=48" alt="" width="12%" />
                                1:1 Live Mentorship
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/yellowTick.png?q=75&w=48" alt="" width="12%" />
                                Mains Q&A practice
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/yellowTick.png?q=75&w=48" alt="" width="12%" />
                                Daily Special Content
                            </li>
                            <li>
                                <img src="https://static.uacdn.net/production/_next/static/images/yellowTick.png?q=75&w=48" alt="" width="12%" />
                                All PLUS Benefits
                            </li>
                        </ul>
                    </div>
                    <div className={styles.buttons}>

                        <button className={styles.packSelectBtn} onClick={() => {
                            dispatch(plan("iconic"))
                            getCourse(plan_name)
                            navigate("/timePeriod");
                        }}
                            
                        >
                        Select ICONIC
                    </button>
                    <button className={styles.learnMoreBtn}  onClick={handleDrawerOpen}>Learn More</button>
                    </div>
                </div>
            </div>
      {/* Lite subscription */}
      <div className={styles.LiteSubscription}>
        <div className={styles.LiteHeadings}>
          <div style={{ width: "100%" }}>
            <h3 className={styles.SubsH3}>Lite</h3>
            <p className={styles.subsP}>Assess your preparation with tests</p>
          </div>
          <div style={{ width: "55%" }}>
            <img
              src="https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Lite3_8aed32b41f.png"
              alt=""
              width="30%"
            />
          </div>
        </div>
        <div className={styles.CourseBenifits}>
          <ul className={styles.plusbenifitList}>
            <li>
              <img
                src="https://static.uacdn.net/production/_next/static/images/blueTick.png?q=75&w=48"
                alt=""
                width="12%"
              />
              Access to curated test series
            </li>
            <li>
              <img
                src="https://static.uacdn.net/production/_next/static/images/blueTick.png?q=75&w=48"
                alt=""
                width="12%"
              />
              Daily practice questions
            </li>
          </ul>
        </div>
        <button
          className={styles.packSelectBtn}
          style={{ margin: "2em" }}
          onClick={() => {
            dispatch(plan("lite"));
            getCourse(plan_name);
            navigate("/timePeriod");
          }}
        >
          Select LITE
        </button>
      </div>

      <Drawer
        sx={{
          width: `40%`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `41%`,
          },
        }}
        anchor="right"
        open={open}
      >
        <div>
          <IconButton
            onClick={handleDrawerClose}
            style={{ background: "none" }}
          >
            {theme.direction === "rtl" ? (
              <CloseTwoToneIcon className={styles.closeBtn} />
            ) : (
              <CloseTwoToneIcon className={styles.closeBtn} />
            )}
          </IconButton>
        </div>

                <div className={styles.sidebar}>
                    <h1>ICONIC subscription</h1>
                    <div className={styles.paraDiv}>
                        <p>Intensify your learning curve with one on one guidance from top exam experts as your personal coach</p>
                    </div>

                    <div className={styles.planFlex}>
                        <div className={styles.innerFlex}>
                            <div>
                                <img src="https://static.uacdn.net/web-cms/LMP_5_ff92ef2e32.png" alt="#"/>
                            </div>
                            <div>
                                <h4> Live Doubt Solving</h4>
                                <p>Get personalized one-on-one doubt solving with subject matter experts</p>
                            </div>
                        </div>
                        <div className={styles.innerFlex}>
                            <div>
                                <img src="https://static.uacdn.net/web-cms/1_1_Live_Mentorship_498cbc7edd.svg?q=75&w=64&fm=webp" alt="#"/>
                            </div>
                            <div>
                                <h4>1:1 Live Mentorship</h4>
                                <p>Get personalized expert guidance on exam-strategy and get help whenever you are stuck</p>
                            </div>
                        </div>
                        <div className={styles.innerFlex}>
                            <div>
                                <img src="https://static.uacdn.net/web-cms/LMP_4_7d7ca3d59b.png" alt="#"/>
                            </div>
                            <div>
                                <h4> Physical Notes</h4>
                                <p>Get physical notes specially curated by experts, delivered to your home</p>
                            </div>
                        </div>
                        <div className={styles.innerFlex}>
                            <div>
                                <img src="https://static.uacdn.net/web-cms/Group_3469_db56823e09.png" alt="#"/>
                            </div>
                            <div>
                                <h4> All benefits of PLUS</h4>
                                <p>Live classes from top educators, mock tests & quizzes, structured batch courses in line with exam syllabus</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
       </Drawer>
    
    
    </div>
    
    </>
  );
};

export default PackageChoose;

