import Grid from '@material-ui/core/Grid';
import Pic2 from '../src/assets/pic2.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import themeColor from './constants/Constants';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  text: {
    fontWeight: 'bold',
    color: 'rgb(1, 36, 8)',
    textAlign: 'left'
  },
 
});

export default function PictureFooter() {
    
  const classes = useStyles();

    return (
        
        <Grid container >
          <Grid item xs={4}>
          <img src={Pic2} alt='Add Pic' width='100%' /> 
        </Grid>
        <Grid item xs={4} >
        <Typography className={classes.text} gutterBottom variant="h3" component="h2" >
        TRY THE OLX APP
          </Typography>
          <Typography className={classes.text} gutterBottom variant="h5" component="h2" >

          Buy, sell and find just about anything using the app on your mobile.
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={4} >
        
          <Typography className={classes.text} gutterBottom variant="h5" component="h2" >

          GET YOUR APP TODAY
          </Typography>
        </Grid>
        </Grid>
      
    )
}





