import React from "react";
// import {Divider,Typography} from "@material-ui/core";
import Auth from "./Auth/Auth";

const SocialLoginIn=(props)=>{
  return (
    <React.Fragment>
      <div className={"custom-scoialLogin"}>
        <Auth setAppData={props.setAppData}/>
        {/*<img src="/assets/images/Google/bitmap.png" alt="google" />
        <div className={"custom-line"} />
        <img src="/assets/images/facebook-2.svg" alt="facebook" />*/}
      {/*  <div className={"custom-line"} />
        <img src="/assets/images/instagram-2.svg" alt="instagram" />*/}
      </div>
      {/*<div className="custom-flex-row custom-width-100-per">
        <Divider classes={{ root: "custom-width-40-per" }} />
        <Typography
          variant="h6"
          classes={{ root: "custom-margin-16-px" }}
        >
          Or
        </Typography>
        <Divider classes={{ root: "custom-width-40-per" }} />
      </div>*/}
    </React.Fragment>
  )
}

export default SocialLoginIn;
