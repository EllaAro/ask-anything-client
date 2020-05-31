import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import PersonIcon from "@material-ui/icons/Person";
import StarsIcon from "@material-ui/icons/Stars";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

const ClippedDrawer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key="1">
              <ListItemIcon>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText primary={"Trending"} />
            </ListItem>
            <ListItem button key="2">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Your Posts"} />
            </ListItem>
            <ListItem button key="3">
              <ListItemIcon>
                <StarsIcon />
              </ListItemIcon>
              <ListItemText primary={"Recommended"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default ClippedDrawer;
