import React, { useEffect } from "react";
import clsx from "clsx";

import { Link, useParams, withRouter } from "react-router-dom";

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
import filedata from "../data/data";
import CardTab from "../CardTab/CardTab";
import BreadCrum from "../BreadCrums/BreadCrum";

import Page404 from "../404page/404page";
import Footer from "../Footer/Footer";

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
  const { pathid } = useParams();

  const classes = useStyles();
  const theme = useTheme();

  // const [filldata, setfilldata] = React.useState({});
  const [midcontent, setmidcontent] = React.useState(null);
  useEffect(() => {
    // console.log(window.location.href.split("/"));
    const dataa = filedata.filter(
      (elem) => elem.url === `/wiki/${window.location.href.split("/")[4]}`,
    );
    if (dataa[0] === undefined) {
      setmidcontent(<Page404 />);
    } else {
      setmidcontent(dataa[0].icon);
    }
    // console.log(dataa[0]);
  }, [pathid, window.location.href]);

  const [open, setOpen] = React.useState(true);

  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "20px",
                  paddingBottom: "2px",
                }}
                src={Image}
                alt="logo"
              />
            </IconButton>
            {!open && (
              <div>
                <div>
                  <h2 className="Main-logo">
                    <span>Project</span>
                    <span className="Sakura"> Sakura</span>
                  </h2>
                </div>
                <div className="spring">
                  <h6>
                    <i>feels like spring</i>
                  </h6>
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
      {(!open || width > 720) && (
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <BreadCrum />
          <div className="main_content_cards">
            <CardTab />
            {midcontent}
          </div>
          <Footer />
        </main>
      )}
    </div>
  );
}

export default withRouter(PersistentDrawerLeft);
