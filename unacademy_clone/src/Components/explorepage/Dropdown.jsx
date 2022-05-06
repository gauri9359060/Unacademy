import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import styles from "./explore.module.css";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Dropdown = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { setAuth } = React.useContext(AuthContext);
  return (
    <div style={{ position: "static", padding: 0, margin: -10, marginLeft: 5 }}>
      <Toolbar disableGutters>
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt="Profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrVIFoCsrjz86ECQ3s3gmNsmOKqvMfS4xBw&usqp=CAU"
            className={styles.profile}
          />
        </IconButton>

        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography
                textAlign="center"
                onClick={() => {
                  setAuth(false);
                  navigate("/");
                }}
              >
                {setting}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </div>
  );
};
export default Dropdown;
