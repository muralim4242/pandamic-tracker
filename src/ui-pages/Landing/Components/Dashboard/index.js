import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../ui-utils/commons";
import ButtonComponent from "../../../../ui-atoms/ButtonComponent";
import PersonIcon from '@material-ui/icons/Person';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import StorefrontIcon from '@material-ui/icons/Storefront';
import "./index.css";


// const iconButton=[{ name: "Individual", value: false, hasIcon: true, icon: <PersonIcon style={{ fontSize: "x-large", color:"black"}} /> },
// { name: "Transport", value: false, hasIcon: true, icon:<DirectionsBusIcon style={{ fontSize: "x-large", color:"black"}} />, },
// { name: "Shop", value: false, hasIcon: true, icon:<StorefrontIcon style={{ fontSize: "x-large", color:"black"}} />, },
// { name: "Health Center", value: false, hasIcon: true, icon:<LocalHospitalIcon style={{ fontSize: "x-large", color:"black"}} />, },
// ];

const styles = (theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    justifyContent: "center"
  }
});

class Dashboard extends React.Component {

  componentDidMount = () => {
    this.props.setAppData('dashboard.appbarName', "Select User Type");
  }

  IndividualOpen = () =>{
    this.props.history.push('/user-home/transport-register');
  }

  TransportOpen = () => {
   this.props.history.push('/user-home/transport-register');
  }

  ShopOpen = () =>{
    this.props.history.push('/user-home/transport-register');
  }

  HealthCenterOpen = () =>{
    this.props.history.push('/user-home/transport-register');
  }


  render() {
    const { classes} = this.props;
    return (
      <div className={classes.root}>
        <div>
          <ButtonComponent
            rootCss="individualButton"
            variant={"contained"}
            Icon={< PersonIcon style={{ width:"2em", height:"2em" }}/>}
            iconposition={"transfort-input-icon-right"}
            value={"Individual"}
            handleonclick={this.IndividualOpen}
          >
          </ButtonComponent>
          <ButtonComponent
            rootCss="TransportButton"
            variant={"contained"}
            Icon={< DirectionsBusIcon style={{ width:"2em", height:"2em" }} />}
            value={"Tansport"}
            handleonclick={ this.TransportOpen}
          />
          <ButtonComponent
            rootCss="ShopButton"
            variant={"contained"}
            Icon={< StorefrontIcon style={{ width:"2em", height:"2em" }}/>}
            value={"Shop"}
            handleonclick={ this.ShopOpen}
          />
          <ButtonComponent
            rootCss="HealthButton"
            variant={"contained"}
            Icon={< LocalHospitalIcon style={{ width:"2em", height:"2em" }}/>}
            value={"Health Center"}
            handleonclick={ this.HealthCenterOpen}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Dashboard)));


// import React from "react"; 
// import { storiesOf } from "@storybook/react"; 
// import Icon from "../components/Icon/Index"; 
// import { iconTypes } from "../components/Icon/Index"; 
// storiesOf("Icon", module) . add("Arrow Right", () => ( <Icon type={iconTypes. arrowRight}> </Icon> )) 