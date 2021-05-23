import logo from './logo.svg';
import './App.css';
import { Typography } from '@material-ui/core';
import SimpleAccordion from './components/header/list'
import NavBar from './components/header/navBar';
import SimpleSlider from './components/slider/slider'


function App() {
  return (
    <div className="App">
     <NavBar />
     <br />
     <br /><br /><br />
      {/* <SimpleAccordion /> */}
      <SimpleSlider />
    </div>
  );
}

export default App;
