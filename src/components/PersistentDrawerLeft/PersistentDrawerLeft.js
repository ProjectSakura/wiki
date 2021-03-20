import React, { useEffect } from "react";
import clsx from "clsx";
import data from "../data/sidenav";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import "./PersistentDrawerLeft.css";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";

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
    padding: theme.spacing(3),
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
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
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
          <div className={classes.title} style={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <img
                style={{ width: "40px", height: "40px", borderRadius: "20px" }}
                src="https://avatars.githubusercontent.com/u/60218698?s=400&u=f45b9471159098e69cb0f2acc3b8c5947ce6dabc&v=4"
                alt="logo"
              />
            </IconButton>
            {!open && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                <div>
                  <h4>Project Sakura</h4>
                </div>
              </div>
            )}
          </div>
          {width > 720 && (
            <div>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Download</Button>
              <Button color="inherit">Stats</Button>
              <Button color="inherit">Blog</Button>
            </div>
          )}
          {width <= 720 && (
            <IconButton>
              <MenuIcon />
            </IconButton>
          )}
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
            backgroundColor: "white",
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
              style={{ width: "40px", height: "40px", borderRadius: "20px" }}
              src="https://avatars.githubusercontent.com/u/60218698?s=400&u=f45b9471159098e69cb0f2acc3b8c5947ce6dabc&v=4"
              alt="logo"
            />
            <div>
              <h4>Project Sakura</h4>
            </div>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        {data.map((elem1) => {
          return (
            <>
              <Divider />
              <ListItem button key={elem1.topname}>
                <ListItemIcon>{elem1.topicon}</ListItemIcon>
                <ListItemText primary={elem1.topname} />
              </ListItem>
              <List>
                {elem1.content.map((insideelem) => (
                  <ListItem button key={insideelem.url}>
                    <ListItemIcon>{insideelem.icon}</ListItemIcon>
                    <ListItemText primary={insideelem.name} />
                  </ListItem>
                ))}
              </List>
            </>
          );
        })}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
