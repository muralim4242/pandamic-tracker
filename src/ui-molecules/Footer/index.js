import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
// import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
    width: "100%",
    height: "10%",
    backgroundColor: "#414141",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
    // position:"absolute",
    // bottom:0
  },
  connectUs: {
    fontWeight: "500",
    color: "#ffffff",
    width: "40%",
  },
  socialMedia: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginLeft: "4px",
  },
  privacy: {
    textAlign: "center",
    fontWeight: "500",
    color: "#ffffff",
    fontSize: "14px",
    textTransform: "none",
  },
};

const Footer = (props, history) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item md={10} xs={11}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ textAlign: "center" }}
          >
            <Grid item xs={11} md={3} style={{ cursor: "pointer" }}>
              <img
                onClick={(e) => {
                  props.history.push("/user-home/home");
                }}
                src="/assets/images/group-4-white.svg"
                alt="logo"
                width="110px"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid container justify="center">
                <Button
                  href="/assets/pdfs/privacy-cookie-policy.pdf"
                  target="_blank"
                >
                  <Typography className={classes.privacy}>
                    Privacy & Cookie Policy
                  </Typography>
                </Button>
                <Button href="/assets/pdfs/terms-of-use.pdf" target="_blank">
                  <Typography className={classes.privacy}>
                    Terms Of Use
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={11} md={3}>
              <Typography variant="h6" classes={{ root: classes.socialMedia }}>
                {" "}
                <p className={classes.connectUs}>Connect us</p>
                <img
                  className={classes.img}
                  src="assets/images/instagram.svg"
                  alt="instagram"
                />{" "}
                <img
                  className={classes.img}
                  src="assets/images/facebook.svg"
                  alt="fb"
                />{" "}
                <img
                  className={classes.img}
                  src="assets/images/youtube.svg"
                  alt="youtube"
                />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(Footer);

export default withRouter(withStyles(styles)(Footer));
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Blog)));
/* <div className={classes.root}>
<div className="custom-width-50-per">
  <img src="/assets/images/group-4-white.svg" alt="logo" />
</div>
<div className={classes.connectUs}>
  <Typography align="right" variant="h6" classes={{root:classes.socialMedia}}>Connect us <img className={classes.img} src="assets/images/instagram.svg" alt="instagram"/> <img className={classes.img} src="assets/images/facebook.svg" alt="fb"/> <img className={classes.img} src="assets/images/youtube.svg" alt="youtube"/></Typography>
</div>
</div> */
