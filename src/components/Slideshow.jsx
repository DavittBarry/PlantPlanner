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
    label: "Keep track of your plant's needs.",
    imgPath:
"https://previews.dropbox.com/p/thumb/ABqP2DXpRidGyXt8rP8G9XJpMLwRYd8rIqoWPj0EoSqV-uSnzlftcWgXx_3gwWh7qHXiV0U7eblE_lcO_ys3fXlt5VDf2w4gjn4ldJzgEVk1V1ZdqY6qYTwg8ZK4lCDkdgiGZ95teDjAyuA7jwiL1YhWRSx2-YAQEoXbshHYC1moRWI8h7UKSs01TH--AGreRStzXh28lJ1bsxTJv4-uG0PMMbeGDxHXxdWVphv0Szf9V5KeRKY2RauH6F11X5UH86A4-a6K3d_QYQmVNt5jXWK3I-CK-j_2Z5cs7FnFUBI0a5jzareByP72Wqbs5vkTMvDYF_SJOBLf3MfR1KEcFKGK-ePoWARITPsHf4_TQx-mOlT3B7wPmzaLH4CcUpvkmYs/p.jpeg",
  },
  {
    label: "Never forget to water your plants again.",
    imgPath:
"https://previews.dropbox.com/p/thumb/ABrPUnjJ2k3uLEPqtjfPhvCYNHN_NHql51O-39n-_-VSSbfJHFWABrkG5f91v72igRIv_RRyhvlgVpGnG5TmPH_yLA6q5cBT8UgqGWG3nokrI-aLC9fVJM5SxVfkGBHRlSN2kYfIC8D793FVYRmtoY2P3DPPzUqAGgopEoJGHa4nLORZJ16WA7Tr3x_-SR5tYqPVmBqnP3LSLt0Z5hfmn2SMcWixQGDOvLKV65FbvQCz0OuBgGB8HR8qC-Op-zZmHvp06_8e1OqjdsjWWIGZ0rhcSMgOm3UcIyPJAwzRpRBEQYBgDqZNbAbgY7hSY9ovEyYaXvKvCXY2sVPtBfioHqeq7Elpckj8fhP7OkBAC_XLNuQC01nW4kYIlL8oXr7fSXY/p.jpeg",
  },
  {
    label: "Make yourself a pro gardener!",
    imgPath:
"https://previews.dropbox.com/p/thumb/ABrK68KaU5rqmfIOye2ziQvd_e3quxiFSuQI_zujtXp9rMTOgqf4SK4GvEHAFduSyYf23JeRCHJgGclGtV7WffMAWGlD0pbTojcW4Qj_CY3YgCluDS2OqD7i45VGBJikWVTemwoE_UKzkhveWCgusLumK3tQ5RTM3sCHG_fGWnU3X0wcFx468HoMt_NaKbVLQx__8u9RzMetEMi9wXm47oVYpc9KVTWEWDRa2KfVNxoD6lxIrhfEzjniiUdOz8wpi0j8gKoRNDMFtCUnEyNvF0YwEo6GLezoJcZKIJ6m1tzhxbw3jZkCklNXmewLI4DxK_pTDlnBrkejkqJhdrIsY495oXWtC_33LaiQDuwrsFpnCa44KmzpCpEgUVK7t03WkIE/p.jpeg",
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
      <div className="color6 introduction">
      <h2 >Take care of your plants with one simple app!</h2>
        <div className="slideshow-container">
          <Paper
          >
            <Typography>{MyCollection[index].label}</Typography>
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
        <img
          src={MyCollection[index].imgPath}
          alt={MyCollection[index].label}
        />
      </div>
    </div>
  );
};
 
export default Slideshow;

