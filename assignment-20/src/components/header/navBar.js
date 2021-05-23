import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/logo.png';
import './navBar.css';
import MenuListComposition from './menu';
import Search from './searchBar'

function NavBar(){

    return(
        <div className='navBar'>
<Grid container spacing={3}>
        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={2}>
          <img src={logo} alt='Logo of Store' />
        </Grid>
        <Grid item xs={6}>
           <MenuListComposition />
        </Grid>
        <Grid item xs={3}>
        <Search />
        </Grid>
        {/* <Grid item xs={1}>
          
        </Grid> */}
        </Grid>
        </div>
    )
}
export default NavBar;
