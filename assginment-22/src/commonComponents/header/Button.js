import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      color: "rgb()",
      border: "5px solid black",
      fontSize: "16px",
      borderRadius: "20px",
      borderColor:
        "skyblue rgba(14, 59, 237, 02) rgba(14, 59, 237, 02) rgb(255, 200, 3)",
    },
  },
}));

export default function Buttons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">
        <AddIcon />
        Sell
      </Button>
    </div>
  );
}
