import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../ui-utils/commons";
import "./index.css";
import TextFieldComponent from "../../../../ui-atoms/TextFieldComponent";
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import ButtonComponent from "../../../../ui-atoms/ButtonComponent";
import Sidebar from "../../../../ui-atoms/SideBarComponent";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import TrainIcon from '@material-ui/icons/Train';
import FlightIcon from '@material-ui/icons/Flight';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import Select from '@material-ui/core/List';


const sidelist = (
  <div>
    <h3 className="header">Transport Type</h3>
    <Select className="unorder">
      <a href="register" className="listitem"> Auto  </a>
      <a href="register" className="listitem">car  {<DirectionsCarIcon style={{ fontSize: "xx-large" }} />} </a>
      <a href="register" className="listitem">Bus {< DirectionsBusIcon style={{ fontSize: "xx-large" }} />}</a>
      <a href="register" className="listitem">Train  {< TrainIcon style={{ fontSize: "xx-large" }} />} </a>
      <a href="register" className="listitem">plane{< FlightIcon style={{ fontSize: "xx-large" }} />} </a>
      <a href="register" className="listitem">Truck {< LocalShippingIcon style={{ fontSize: "xx-large" }} />}</a>
      <a href="register" className="listitem">Van {< AirportShuttleIcon style={{ fontSize: "xx-large" }} />} </a>
      <a href="register" className="listitem">Jeep </a>
      <a href="register" className="listitem">Other Vehicle </a>
    </Select>

  </div>
);
class TransportRegister extends React.Component {
  state = {
    errors: {},
    loader: true,
    show: false,
    onClose: false
  }

  validateRigister = (select_type, vehicle_number, name, phone_number, address, email) => {
    let formIsValid = true;
    let errors = {};
    if (!select_type || select_type === "") {
      formIsValid = false;
      errors["select_type"] = "please select vehicle ";
    }
    if (!vehicle_number || vehicle_number === "") {
      formIsValid = false;
      errors["vehicle_Number"] = "please enter vehicle number";
    }
    if (!name || name === "") {
      formIsValid = false;
      errors["name"] = "enter the full name";
    }
    if (!phone_number || phone_number === "") {
      formIsValid = false;
      errors["phone_number"] = "phone number is invalid";
    }
    if (!address || address === "") {
      formIsValid = false;
      errors["address"] = "address is invalid";
    }
    if (!email || email === "") {
      formIsValid = false;
      errors["email"] = "email is invalid"
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  SuccessfullyAdded = () => {
    const { select_type, vehicle_number, name, phone_number, address, email } = this.props;
    if (this.validateRigister(select_type, vehicle_number, name, phone_number, address, email)) {
      this.setState({ loader: true });
    }
  }

  BackToMenu = () => {
    this.setState({ loader: true });
  }

  componentDidMount = () => {
    this.props.setAppData('dashboard.appbarName', "fill the information");
  }

  OpenSideBar = () => {
    this.setState({ show: true });
  }

  closeSideBar = () => {
    this.setState({ show: false });
  }

  // handleChange = (e) => {
  //   this.setState({
  //     data: {
  //       ...this.state.data,
  //       [e.target.userName]: e.target.value
  //     }
  //   });
  // }

  validate = () => {
    // const { data } = this.state;
    // let errors = {};

  }
  render() {
    console.log("error", this.state.errors);
    console.log("closeSideBar", this.closeSideBar);


    const {  setAppData, select_type, vehicle_number, name, phone_number, address, email, back, submit } = this.props;
    return (
      <div className="transfort_root" >
        <Sidebar
          show={this.state.show}
          sidelist={sidelist}
          onClose={this.closeSideBar}
        />
        <TextFieldComponent
          rootCss="selector"
          value={select_type}
          placeholder={"Select Transport Type "}
          handleChange={(e) => { setAppData('register.Select', e.target.value) }}
          hasError={!select_type || !this.state.errors.select_type ? true : false}
          errorMessage={this.state.errors.select_type}
          icon={<DoubleArrowRoundedIcon style={{ fontSize: "22px", color: "#3ea1a5" }} />}
          iconPosition={"transfort-input-icon-right"}
          type="text"
          handleOnClick={this.OpenSideBar}
          hasButton={true}
        //handleOnClick = {this.closeSideBar}
        />
        <TextFieldComponent
          rootCss="vehiclenumber_textfield"
          value={vehicle_number}
          hasError={!vehicle_number || !this.state.errors.vehicle_number ? true : false}
          errorMessage={this.state.errors.vehicle_number}
          handleChange={(e) => { setAppData('register.vehicle_number', e.target.value) }}
          placeholder={"Vehicle Number"}
          type={"text"}
        />
        <div className={"heading1"}>Contact Information</div>
        <div className={"subscreen"}>
          <div>
            <TextFieldComponent
              className="contact_input"
              value={name}
              hasError={!name || !this.state.errors.name ? true : false}
              errorMessage={this.state.errors.name}
              handleChange={(e) => { setAppData('register.name', e.target.value) }}
              placeholder={"Name"}
              type={"text"}
            />
            <TextFieldComponent
              className="contact_input"
              value={phone_number}
              hasError={!phone_number || !this.state.errors.name ? true : false}
              errorMessage={this.state.errors.phone_number}
              handleChange={(e) => { setAppData('register.phone_number', e.target.value) }}
              placeholder={"Phone Number"}
              type="number"
              maxLength="10"
              minlength="10"
            />
            <TextFieldComponent
              className="contact_input"
              value={address}
              hasError={!address || !this.state.errors.address ? true : false}
              errorMessage={this.state.errors.address}
              handleChange={(e) => { setAppData('register.address', e.target.value) }}
              placeholder={"Address"}
              type="text"
            />
            <TextFieldComponent
              className="contact_input"
              value={email}
              hasError={!email || !this.state.errors.email ? true : false}
              errorMessage={this.state.errors.email}
              handleChange={(e) => { setAppData('register.email', e.target.value) }}
              placeholder={"Mail Id"}
              type="email"
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonComponent
            rootCss={"back"}
            value={"back"}
            color={"white"}
            handleonclick={() => { this.BackToMenu() }}
            type={back}
          />
          <ButtonComponent
            rootCss={"submit"}
            value={"submit"}
            handleonclick={() => { this.SuccessfullyAdded() }}
            type={submit}
          />
        </div>

      </div>

    );
  }
}
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { register } = preparedFinalObject;
  const { select_type, vehicle_number, name, phone_number, address, email } = register;
  return { select_type, vehicle_number, name, phone_number, address, email }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TransportRegister));

