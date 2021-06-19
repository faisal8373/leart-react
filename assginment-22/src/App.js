import PrimarySearchAppBar from "./commonComponents/header/NavBar";
import Picture from "./commonComponents/header/HeaderPicture";
import MultipleItems from "./products/RecentSlider";

import Footer from "./commonComponents/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Picture />
      <MultipleItems />
      <Footer />
    </div>
  );
}

export default App;
