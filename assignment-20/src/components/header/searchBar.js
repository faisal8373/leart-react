import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





const styles = {
  button: {
    background: '#4bbe4b',
    borderRadius: 25,
    border: 0,
    color: 'white',
    height: 40,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
}
 
export default function Search() {
  

  return (
    <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="Search" />
      <Button
        style={{...styles.button}}
      >
        Search
      </Button>
    </form>
  );
}
