
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../ui-utils/commons";
import "./index.css";
import InputField from "../../../../ui-atoms/InputField/index";
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import ButtonComponent from "../../../../ui-atoms/ButtonComponent";
import Sidebar from "../../../../ui-atoms/SideBarComponent";

const sidelistdata = [{ name: "General Store", value: false, hasIcon: false, },
{ name: "saloon", value: false, hasIcon: false },
{ name: "Milk Dairy", value: false, hasIcon: false},
{ name: "Vegi-market", value: false, hasIcon: false },
{ name: "Electronics Shop", value: false, hasIcon: false },
{ name: "Hotel", value: false, hasIcon: false },
{ name: "Cloth Shop", value: false, hasIcon: false },
{ name: "Non-veg Shop", value: false, hasIcon: false },
{ name: "Other Shop", value: false, hasIcon: false },

];


class Shop_register extends React.Component {
  state = {
    errors: {},
    loader: true,
    show: false,
    onClose: false,

  }
  validateRigister = (select_type, Shop_name, name, phone_number, address, email) => {
    let formIsValid = true;
    let errors = {};
    if (!select_type || select_type === "") {
      formIsValid = false;
      errors["select_type"] = "please select a Shop ";
    }
    if (!Shop_name || Shop_name === "") {
      formIsValid = false;
      errors["Shop_name"] = "please enter Shop name";
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
    const { select_type, Shop_name, name, phone_number, address, email } = this.props;
    if (this.validateRigister(select_type, Shop_name, name, phone_number, address, email)) {
      this.setState({ loader: true });
    }
  }

  BackToMenu = () => {
    this.setState({ loader: true });
  }

  componentDidMount = () => {
    this.props.setAppData('dashboard.appbarName', "Fill the information");
    this.props.setAppData('Shop_register.sidelist', sidelistdata);
  }

  OpenSideBar = () => {
    this.setState({ show: true });
  }

  closeSideBar = () => {
    this.setState({ show: false });
  }
  handleClickItem = (key) => {
    const { Shop_register, setAppData, sidelist } = this.props;
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
    setAppData('Shop_register', { ...Shop_register, sidelist: dummyList, select_type: dummyList[key].name });
    this.setState({ show: false });
  };

  
 
  render() {
    const { setAppData, select_type, Shop_name, name, phone_number, address, email, sidelist, back, submit } = this.props;
    return (
      <div className="transfort_root">
        <Sidebar
          show={this.state.show}
          sidelist={sidelist}
          onClose={this.closeSideBar}
          handleClickItem={this.handleClickItem}
          header={"Shop Type"}
        />
        <InputField
          rootCss="selector"
          fieldValue={select_type}
          placeholder={"Select Shop Type "}
          handleChange={(e) => { setAppData('Shop_register.Select', e.target.value) }}
          hasError={!select_type || !this.state.errors.select_type ? true : false}
          errorMessage={this.state.errors.select_type}
          icon={<DoubleArrowRoundedIcon style={{ fontSize: "22px", color: "#3ea1a5" }} />}
          iconPosition={"Shop-input-icon-right"}
          type="text"
          handleOnClick={this.OpenSideBar}
          hasButton={true}
        //handleOnClick = {this.closeSideBar}
        />
        <InputField
          rootCss="Shop_textfield"
          fieldValue={Shop_name}
          handleChange={(e) => { setAppData('Shop_register.Shop_name', e.target.value) }}
          placeholder={"Shop name"}
          hasError={!Shop_name || !this.state.errors.Shop_name ? true : false}
          errorMessage={this.state.errors.Shop_name}
          type={"text"}
        />
        <div className={"heading1"}>Contact Information</div>
        <div className={"subscreen"}>
          <div>
            <InputField
              className="contact_input"
              fieldValue={name}
              hasError={!name || !this.state.errors.name ? true : false}
              errorMessage={this.state.errors.name}
              handleChange={(e) => { setAppData('Shop_register.name', e.target.value) }}
              placeholder={"Name"}
              type={"text"}
            />
            <InputField
              className="contact_input"
              fieldValue={phone_number}
              hasError={!phone_number || !this.state.errors.name ? true : false}
              errorMessage={this.state.errors.phone_number}
              handleChange={(e) => { setAppData('Shop_register.phone_number', e.target.value) }}
              placeholder={"Phone Number"}
              type="phone"
              maxLength={10}
              minlength={10}
            />
            <InputField
              className="contact_input"
              fieldValue={address}
              hasError={!address || !this.state.errors.address ? true : false}
              errorMessage={this.state.errors.address}
              handleChange={(e) => { setAppData('Shop_register.address', e.target.value) }}
              placeholder={"Address"}
              type="text"
            />
            <InputField
              className="contact_input"
              fieldValue={email}
              hasError={!email || !this.state.errors.email ? true : false}
              errorMessage={this.state.errors.email}
              handleChange={(e) => { setAppData('Shop_register.email', e.target.value) }}
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
  const { Shop_register } = preparedFinalObject;
  const { select_type, Shop_name, name, phone_number, address, email, sidelist } = Shop_register;
  return { select_type, Shop_name, name, phone_number, address, email,sidelist: [...sidelist], Shop_register: { ...Shop_register } }

}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Shop_register));
