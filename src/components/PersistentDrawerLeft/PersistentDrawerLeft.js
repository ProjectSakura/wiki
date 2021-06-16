import React, { useEffect } from "react";
import clsx from "clsx";

import {
  Link, withRouter, Switch, Route,
} from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import "./PersistentDrawerLeft.css";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import Image from "./logo.png";
import data from "../data/sidenav";
import MenuPopup from "../Navbar/MenuPopup";
import CardTab from "../CardTab/CardTab";
import BreadCrum from "../BreadCrums/BreadCrum";
import Page404 from "../404page/404page";
import Footer from "../Footer/Footer";

//routes
// import SlideshowIcon from "@material-ui/icons/Slideshow";
// import GestureTwoToneIcon from "@material-ui/icons/GestureTwoTone";
// import TouchAppIcon from "@material-ui/icons/TouchApp";
// import NavigationIcon from "@material-ui/icons/Navigation";
// import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
// import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
//import EqualizerIcon from "@material-ui/icons/Equalizer";
import SettingEnv from "../Guides/SettingEnv/SettingEnv";
import ReportBug from "../Guides/ReportBug/ReportBug";
import BuildSakura from "../Guides/BuildSakura/BuildSakura";
import InstallSakura from "../Guides/InstallSakura/InstallSakura";
import ApplyMaintainers from "../Guides/ApplyMaintainers/ApplyMaintainers";
import BuildFlags from "../Guides/BuildFlags/BuildFlags";
import Interface from "../Guides/Interface/Interface";
import QuickSetting from "../Guides/QuickSetting/QuickSetting";
import LockScreen from "../Guides/LockScreen/LockScreen";
import Gesture from "../Guides/Gesture/Gesture";
import Notification from "../Guides/Notification/Notification";
import Miscellaneous from "../Guides/Miscellaneous/Miscellaneous";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
    // overflow: "hidden",
    backgroundColor: "#1e1e1e",
  },
  drawerHeader: {

    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },

  toolbar: theme.mixins.toolbar,
}));

function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);

  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  useEffect(() => {
    if (width < 468) handleDrawerClose();
  }, [width]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div
            className={classes.title}
            style={{ display: "flex", alignItems: "center" }}
          >
            {!open && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <img
                  style={{
                    width: "6vh",
                    height: "6vh",
                    borderRadius: "20px",
                    marginRight: "7px",
                  }}
                  src={Image}
                  alt="logo"
                />
                <div>
                  <h1 className="drawer_logoname">
                    <span className="drawer_oroject">Project</span>
                    <span className="drawer_sakura"> Sakura</span>
                    <div className="spring"><em>Feels like spring</em></div>
                  </h1>

                </div>
                <div
                  style={{
                    color: "whitesmoke",
                    marginLeft: "2vh",
                  }}
                >
                  <ChevronRightIcon onClick={handleDrawerOpen} />
                </div>

              </div>

            )}
          </div>
          {width > 720 && (
            <div>
              <Button color="inherit">
                <b>Home</b>
              </Button>
              <Button color="inherit">
                <b>Download</b>
              </Button>
              <Button color="inherit">
                <b>Stats</b>
              </Button>
              <Button color="inherit">
                <b>Blog</b>
              </Button>
            </div>
          )}
          {width <= 720 && <MenuPopup />}
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ overflow: "hidden" }}
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div
          className={classes.drawerHeader}
          style={{
            zIndex: 1,
            backgroundColor: "#1e1e1e",
            position: "fixed",
            width: drawerWidth,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "20px",
                marginRight: "7px",
              }}
              src={Image}
              alt="logo"
            />
            <div>
              <h4 className="drawer_logoname">
                <span className="drawer_project">Project</span>
                <span className="drawer_sakura"> Sakura</span>
              </h4>
            </div>
          </div>
          <IconButton
            style={{
              color: "whitesmoke",
            }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <div
          style={{
            marginTop: "55px",
            backgroundColor: "#1e1e1e",
            color: "whitesmoke",
          }}
        >
          {data.map((elem1) => (
            <>
              <Divider />
              <ListItem className="drawer_elements" key={elem1.topname}>
                <ListItemText
                  primary={elem1.topname}
                  style={{
                    color: "#00ccff",
                  }}
                />
              </ListItem>
              <List style={{ padding: "0px" }}>
                {elem1.content.map((insideelem) => (
                  <Link to={insideelem.url} key={insideelem}>
                    <ListItem
                      className="drawer_elements"
                      button
                      key={insideelem.url}
                      onClick={handleDrawerClose}
                    >
                      <ListItemIcon
                        style={{
                          color: "#00ccff",
                        }}
                      >
                        {insideelem.icon}
                      </ListItemIcon>
                      <ListItemText>
                        <div
                          style={{
                            textDecoration: "none",
                            color: "whitesmoke",
                          }}
                        >
                          {insideelem.name}
                        </div>
                      </ListItemText>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </>
          ))}
        </div>
      </Drawer>
      {(!open || width > 720 || width < 468) && (
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <BreadCrum />
          <div className="main_content_cards">
            <CardTab />
            <Switch>
              <Route path="/" exact component={SettingEnv} />
              <Route path="/build-sakura" exact component={BuildSakura} />
              <Route path="/report-bug" exact component={ReportBug} />
              <Route path="/install-sakura" exact component={InstallSakura} />
              <Route path="/apply" exact component={ApplyMaintainers} />
              <Route path="/build-flags" exact component={BuildFlags} />
              <Route path="/interface" exact component={Interface} />
              <Route path="/quicksetting" exact component={QuickSetting} />
              <Route path="/lockscreen" exact component={LockScreen} />
              <Route path="/gesture" exact component={Gesture} />
              <Route path="/notification" exact component={Notification} />
              <Route path="/miscellaneous" exact component={Miscellaneous} />
              <Route path="" component={Page404} />
            </Switch>
          </div>
          <Footer />
        </main>
      )}
    </div>
  );
}

export default withRouter(PersistentDrawerLeft);
