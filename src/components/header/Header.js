import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background: "white",
    color: "black",
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const classes = useStyles();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Nay Yaung
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Button color="inherit">Works</Button>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </div>
        <div className={classes.sectionMobile} id="motionBtn">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom="230"
            ref={containerRef}
          >
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
            <motion.div className="background" variants={sidebar} />
          </motion.nav>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
