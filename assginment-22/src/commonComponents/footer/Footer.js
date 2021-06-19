import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "right",
    color: "white",
    backgroundColor: "rgba(21, 43, 20, .9)",

    borderRadius: "0",
  },
  line: {
    alignItems: "stretch",
  },
}));
function Footer() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.line}>
        <Paper className={classes.paper}>
          Free Classifieds in Pakistan . © 2006-2021 OLX
        </Paper>
      </Grid>
  
    </Grid>
  );
}

export default Footer;
