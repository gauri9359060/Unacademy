import React,{ useState } from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import styles from "./Navbar.module.css";
import "react-phone-input-2/lib/bootstrap.css";
import LoginDrawer from "../Login/LoginDrawer";
import EmailDrwaer from "../Login/EmailDrwaer";
const Navbar = () => {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState("");

  const [page, setPage] = useState(true);

  
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <img
            src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384"
            alt="unacademy logo"
          />
        </div>
        <div>

          <button className={styles.loginBtn} onClick={handleDrawerOpen}>
            Login
          </button>
        </div>
      </div>

      <Drawer
        sx={{
          width: `35%`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `40%`,
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

        {
          (page === true) ? (
            <LoginDrawer setPage={setPage} state={state}/>
        ) : (
          <EmailDrwaer setPage={setPage}/>
        )
        }
      </Drawer>
    </>
  );
};

export default Navbar;

