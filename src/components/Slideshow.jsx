import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
 
const MyCollection = [
  {
    label: <h4>Keep track of your plant's needs.</h4>,
    imgPath:
"https://github.com/DavittBarry/PlantPlanner/blob/PlantPlanner2.1/src/static_files/img1.jpg?raw=true",
  },
  {
    label: <h4>Never forget to water your plants again.</h4>,
    imgPath:
"https://github.com/DavittBarry/PlantPlanner/blob/PlantPlanner2.1/src/static_files/img2.jpg?raw=true",
  },
  {
    label: <h4>Make yourself a pro gardener!</h4>,
    imgPath:
"https://github.com/DavittBarry/PlantPlanner/blob/PlantPlanner2.1/src/static_files/img3.jpg?raw=true",
  },
];

const Slideshow = () => {
const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);
 
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
 
  return (
    <div >
      <div className="color6 introduction slideshow-container">
        <h2 >Take care of your plants with one simple app!</h2>
        <Paper>
          <img
            src={MyCollection[index].imgPath}
            alt={MyCollection[index].label}
          />
          <Typography className="p-3">{MyCollection[index].label}</Typography>
        </Paper>
        <MobileStepper
          style={{justifyContent: 'center'}}
          variant="number"
          position="static"
          index={index}
          steps={CollectionSize}
          nextButton={
            <Button
              className="btn btn-success"
              size="small"
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1}
            >
              Next
              {theme.direction !== "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    </div>
  );
};
 
export default Slideshow;

