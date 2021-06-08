import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    minHeight: 250,
    boxShadow: '5px 10px 30px rgb(204, 240, 222)'
  }})

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div >
      {/* <Paper elevation={0} />
      <Paper /> */}
      <Grid container >
      <Grid item xs={12}>
      <br />
      <br />
      <br />
      <br /> 
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}> <br />
      <br />
      <br />
      <br /><Button variant="contained" color="secondary">
      <Typography variant="h5" component="h2">
        -
        </Typography>
      </Button>
      </Grid>
      <Grid item xs={4} >
      {/* <Paper elevation={3} /> */}
      <Card className={classes.root}>
      <br />
      <br />
      <br />
      <Typography variant="h2" component="h2">
        0
        </Typography>
        
      </Card>
      </Grid>
      <Grid item xs={2}><br />
      <br />
      <br />
      <br />
      <Button variant="contained" color="primary">
      <Typography variant="h5" component="h2">
        +
        </Typography>
      </Button>
</Grid>
      
      
    </Grid>
    <br />
      <br />
    <Button variant="contained" color="primary">
    <Typography variant="h5" component="h2">
        Reset
        </Typography>
      </Button>
    </div>
  );
}