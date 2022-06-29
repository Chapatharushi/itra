import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 200;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className="navbar navbar-dark bg-dark navbar-expand-md" style={{ fontWeight: "bolder", paddingLeft: "20px" }}>
          <Link to="/dashboard" className="navbar-brand">
            ITRA
          </Link>
        </div>
        <Divider />
        <List>
          {["Dashboard", "Analytics"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <DashboardIcon /> : <EqualizerIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {["Profile", "Support"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <AccountBoxIcon /> : <HelpCenterIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Feedback", "Logout"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <ThumbUpAltIcon /> : <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
