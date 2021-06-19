import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core";
import Slider from "react-slick";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./ProductCard";
import Paper from "@material-ui/core/Paper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    paddingLeft: "70px",
    backgroundColor: "rgb(168, 166, 160)",
    margin: "50px",
  },
  inner: {
    paddingBottom: "10px",
    backgroundColor: "rgb(168, 166, 160)",
  },
  text: {
    textAlign: "left",
    paddingTop: "10px",
  },
}));
export default function MultipleItems() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <Grid item xs={12}>
      <Paper className={classes.root}>
        <h2 className={classes.text}> Most Recent Items </h2>

        <Paper className={classes.inner}>
          <Slider {...settings}>
            <div>
              <MediaCard />
            </div>
            <div>
              <MediaCard />
            </div>
            <div>
              <MediaCard />
            </div>
            <div>
              <MediaCard />
            </div>
            <div>
              <MediaCard />
            </div>
            <div>
              <MediaCard />
            </div>
            <div>
              <MediaCard />
            </div>
            <div>
              <MediaCard />
            </div>
            <div>
              <MediaCard />
            </div>
          </Slider>
        </Paper>
      </Paper>
    </Grid>
  );
}
