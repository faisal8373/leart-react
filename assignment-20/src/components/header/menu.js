import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [bestSeller, setBestSeller] = React.useState(false);
  const [dealofDay, setDealofDay] = React.useState(false);


  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleBestSeller = () => {
    setBestSeller((prevOpen) => !prevOpen);
  };
  const handleDealofDay = () => {
    setDealofDay((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleCloseBS = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setBestSeller(false);
  };
  const handleCloseDD = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setDealofDay(false);
  };

  
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
    <Grid container spacing={1}>
    <Grid item xs={2}>
           
      <Button
          
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          
        >
          Home
        </Button>
        </Grid>
      
      <Grid item xs={2}>
           
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Shop
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Fruits</MenuItem>
                    <MenuItem onClick={handleClose}>Vegetables</MenuItem>
                    <MenuItem onClick={handleClose}>Meat</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
           )} 
        </Popper>
        
        </Grid>
        
        <Grid item xs={3}>
        <Button
          ref={anchorRef}
          aria-controls={bestSeller ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleBestSeller}
        >
          Best Sellers
        </Button>
        <Popper open={bestSeller} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseBS}>
                  <MenuList autoFocusItem={bestSeller} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleCloseBS}>Seeds</MenuItem>
                    <MenuItem onClick={handleCloseBS}>Cookies</MenuItem>
                    <MenuItem onClick={handleCloseBS}>Dairy</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </Grid>
        <Grid item xs={3}>
        <Button
          ref={anchorRef}
          aria-controls={dealofDay ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleDealofDay}
        >
          Deal of The Day
        </Button>
        <Popper open={dealofDay} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseDD}>
                  <MenuList autoFocusItem={dealofDay} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleCloseDD}>Herbs</MenuItem>
                    <MenuItem onClick={handleCloseDD}>Dhals</MenuItem>
                    <MenuItem onClick={handleCloseDD}>Desserts</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </Grid>
      
      </Grid>
    </div>
  );
}