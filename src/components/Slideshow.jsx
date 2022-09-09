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
    label: "Keep track of your plant's needs",
    imgPath:
"https://ucfdbeec93061b5e830bf4edc846.previews.dropboxusercontent.com/p/thumb/ABgWxZjm3u_dR5ASrC560O9EpKm6zvBLm--1Qm3dG49iEEEdKA99EwagCgoaiqPCQY6DCfqpMj1G503akDt6dRGkcokGcLCi49Cf1B88x3fefvYsemExQOsagLuFWoPxD365363mpeRLIYqLOyOjMIKQn9d5ZdO7unk2v73YRr4JX_NB_Lht4nfGWaoiV-hTZbkgvrJzuDCqTWBYfj_TIeflPkucQQWvProbnhng4-LUJvBuJoBVjEOZXBryY8Nt7Mu_WVEds_rWkMkqjfvbuz59XypkxiurteKA0WaCKD7U908Na1Rgd2jsor97glwZjTb9eHbyJGKtH3UW5MWhRQaVJ-kGgBpJiDsVflbxfxdd01300QTEay7L_1ZnjfHfpZrxiDGFPY2PzTU_MTrIQxh80LKzqZSDZntrsMor7g-XGA/p.jpeg",
  },
  {
    label: "Never forget to water your plants again",
    imgPath:
"https://ucddf3e0c64f5f6c535f4453979e.previews.dropboxusercontent.com/p/thumb/ABiNF6sF4VrOVB-zuwwHpYVpn5hGx2a9nVIxZ8TNAd3aa735g94O4KssN0EcaFpeYMDJIXyAv-cdYaGJyt8pf3mBMlY0ZVtnzBVlUylpzAykUnytjEWc59aneGFi2EuBfN6-2CbYY8NAsFVvk3ocTJ4jsNHAjPl5gm-6-HjXDUk2Tny5eO8LXV-hL3xpJhLRO1Q6AXHbss7IjIpC0K5CNz11DgkNBweQ7uqSXCYAIVDIUPYirdwqlyjOzV9edjdEEDfGU1RxNuuEr1wvRedC1md7M_Mwmm_G-8xdwNYSWyDex9gHqeWJt0TYCK2CmAi-cV3bg9cuGH8FKvCfS0oATufxmJAJselGPr3kMLSks4vGQnUG5t0C5mHXOfNGNPXeCC_Y50i1de1bN_RRpbpTjcE-OFcL6g5ey9qogO9bfuo7hw/p.jpeg",
  },
  {
    label: "Make yourself a pro gardener!",
    imgPath:
"https://ucb80abb049578eaa9b3397cc2d8.previews.dropboxusercontent.com/p/thumb/ABhfiNXnXtsfNxYaWmcOfO8p5khdJIFBiYjXenyzsXbWW2sw4KBRwwkv5wsI9kdGmJrOFzyLfd972-zt8fGoF_Wfh4EXykhEXhiDSavW5NR4Kw5m5urE4wPPOrSflfoFlm0tnURuM1ilqnGe0Yj0xVRgRHpAK5nReHJvi8D1K5ESXlE_jitG3-nLPhlhQ-otmwoIReLWYUt70PL3TdiBTP2IJKFC7cgrBG8-0BfyO_OAQDZ2-44CU-Qxhiin9DdLffTduvVlJEP-Ow0F96u_gv8OdLBv8fKu2mGYMkrfGJ3v7horloxjbz3aqESFV3A-NcOGZpUCmZxiuxTxl3J82ZcnF9gDPAjZAcy-lVTt7y2aEj-ns8p_fS3wAfjn9_EVY-HlosY_0Vl9qOI1Oc9oS8TLLkiqVmyFe6uzunRbKTAY1A/p.jpeg",
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
    <div class="d-flex justify-content-center">
      <div >
      <h2>Welcome to PlantPlanner!</h2>
        <Paper
          square
          style={{
            height: 25,
            display: "flex center",
            backgroundColor: theme.palette.background.default,
          }}
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
        <img
          src={MyCollection[index].imgPath}
          alt={MyCollection[index].label}
        />
      </div>
    </div>
  );
};
 
export default Slideshow;

