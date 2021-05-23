import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from '@material-ui/core/Grid';
import Slide1 from '../assets/slide1.jpg';
import Slide2 from '../assets/slide2.jpg';
import Slide3 from '../assets/slide3.jpg';
import Slide4 from '../assets/slide4.jpg';


function SimpleSlider () {
 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div >
       
          {/* <Grid container spacing={3}>
          <Grid item={6} > */}
         
        
        <Slider {...settings}>
          <div>
            <img src={Slide1} alt='Logo' width='1450' height='600' />
          </div>
          <div>
          <img src={Slide2} alt='Logo' width='1450' height='600'/>
          </div>
          <div>
          <img src={Slide3} alt='Logo' width='1450' height='600'/>
          </div>
          <div>
          <img src={Slide4} alt='Logo' width='1450' height='600'/>
          </div>
         
        </Slider>
        {/* </Grid>
        </Grid> */}
      </div>
    );
  }
export default SimpleSlider;