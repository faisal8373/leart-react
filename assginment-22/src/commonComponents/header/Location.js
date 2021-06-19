/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  locationBar: {
    border: "solid 2px rgb(3, 23, 13)",
    borderRadius: "5px",
    color: "rgb(3, 23, 13)",
    marginLeft: "20px",
  },
}));
export default function ComboBox() {
  const classes = useStyles();

  return (
    <Autocomplete
      className={classes.locationBar}
      id="combo-box-demo"
      options={provinces}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
  );
}

const provinces = [
  { title: "Punjab" },
  { title: "Khyber Pukhtunkhwa" },
  { title: "Sindh" },
  { title: "Balochistan" },
  { title: "Gilgit Baltistan" },
];
