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


// const sidelist = (
//   <div>
//     <h3 className="header">Transport Type</h3>
//     <Select className="unorder">
//       <a href="register" className="listitem"> Auto  </a>
//       <a href="register" className="listitem">car  {<DirectionsCarIcon style={{ fontSize: "xx-large" }} />} </a>
//       <a href="register" className="listitem">Bus {< DirectionsBusIcon style={{ fontSize: "xx-large" }} />}</a>
//       <a href="register" className="listitem">Train  {< TrainIcon style={{ fontSize: "xx-large" }} />} </a>
//       <a href="register" className="listitem">plane{< FlightIcon style={{ fontSize: "xx-large" }} />} </a>
//       <a href="register" className="listitem">Truck {< LocalShippingIcon style={{ fontSize: "xx-large" }} />}</a>
//       <a href="register" className="listitem">Van {< AirportShuttleIcon style={{ fontSize: "xx-large" }} />} </a>
//       <a href="register" className="listitem">Jeep </a>
//       <a href="register" className="listitem">Other Vehicle </a>
//     </Select>

//   </div>
// );

const sidelistdata = [{ name: "Auto", value: false, hasIcon: false, },
{ name: "Car", value: false, hasIcon: true, icon: <DirectionsCarIcon style={{ fontSize: "xx-large" }} /> },
{ name: "Bus", value: false, hasIcon: true, icon: <DirectionsBusIcon style={{ fontSize: "xx-large" }} /> },
{ name: "Train", value: false, hasIcon: true, icon: <TrainIcon style={{ fontSize: "xx-large" }} /> },
{ name: "Plane", value: false, hasIcon: true, icon: <FlightIcon style={{ fontSize: "xx-large" }} /> },
{ name: "Truck", value: false, hasIcon: true, icon: <LocalShippingIcon style={{ fontSize: "xx-large" }} /> },
{ name: "Van", value: false, hasIcon: true, icon: <AirportShuttleIcon style={{ fontSize: "xx-large" }} /> },
{ name: "Jeep", value: false, hasIcon: false },
{ name: "Other Vehicle", value: false, hasIcon: false },

];


class TransportRegister extends React.Component {
  state = {
    errors: {},
    loader: true,
    show: false,
    onClose: false,

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
    this.props.history.push('/user-home/dashboard');
    this.setState({ loader: true });
  }

  componentDidMount = () => {
    this.props.setAppData('dashboard.appbarName', "Fill Your Information");
    this.props.setAppData('transportregister.sidelist', sidelistdata);
  }

  OpenSideBar = () => {
    this.setState({ show: true });
  }

  closeSideBar = () => {
    this.setState({ show: false });
  }
  handleClickItem = (key) => {
    const { transportregister, setAppData, sidelist } = this.props;
    let dummyList = [];
    dummyList = sidelist.map((item, index) => {
      if (key === index) {
        return {
          ...item,
          value: true
        }
      } else {
        return {
          ...item,
          value: false
        }
      }
    });
    console.log({ dummyList });
    setAppData('transportregister', { ...transportregister, sidelist: dummyList, select_type: dummyList[key].name });
    this.setState({ show: false });
  };
  render() {
    const { setAppData, select_type, vehicle_number, name, phone_number, address, email, sidelist, back, submit } = this.props;
    return (
      <div className="transfort_root" >
        <Sidebar
          show={this.state.show}
          sidelist={sidelist}
          onClose={this.closeSideBar}
          handleClickItem={this.handleClickItem}
          header={"Transport Type"}
        />
        <TextFieldComponent
          rootCss="selector"
          fieldValue={select_type}
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
          fieldValue={vehicle_number}
          hasError={!vehicle_number || !this.state.errors.vehicle_number ? true : false}
          errorMessage={this.state.errors.vehicle_number}
          handleChange={(e) => { setAppData('transportregister.vehicle_number', e.target.value) }}
          placeholder={"Vehicle Number"}
          type={"text"}
        />
        <div className={"heading1"}>Contact Information</div>
        <div className={"subscreen"}>
          <div>
            <TextFieldComponent
              className="contact_input"
              fieldValue={name}
              hasError={!name || !this.state.errors.name ? true : false}
              errorMessage={this.state.errors.name}
              handleChange={(e) => { setAppData('transportregister.name', e.target.value) }}
              placeholder={"Name"}
              type={"text"}
            />
            <TextFieldComponent
              className="contact_input"
              fieldValue={phone_number}
              hasError={!phone_number || !this.state.errors.name ? true : false}
              errorMessage={this.state.errors.phone_number}
              handleChange={(e) => { setAppData('transportregister.phone_number', e.target.value) }}
              placeholder={"Phone Number"}
              type="phone"
              maxLength={10}
              minlength={10}
            />
            <TextFieldComponent
              className="contact_input"
              fieldValue={address}
              hasError={!address || !this.state.errors.address ? true : false}
              errorMessage={this.state.errors.address}
              handleChange={(e) => { setAppData('transportregister.address', e.target.value) }}
              placeholder={"Address"}
              type="text"
            />
            <TextFieldComponent
              className="contact_input"
              fieldValue={email}
              hasError={!email || !this.state.errors.email ? true : false}
              errorMessage={this.state.errors.email}
              handleChange={(e) => { setAppData('transportregister.email', e.target.value) }}
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
  const { transportregister } = preparedFinalObject;
  const { select_type, vehicle_number, name, phone_number, address, email, sidelist } = transportregister;
  return { select_type, vehicle_number, name, phone_number, address, email, sidelist: [...sidelist], transportregister: { ...transportregister } }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TransportRegister));

