import * as screenActionTypes from "./actionTypes";
import { prepareFinalObject } from "./utils";

const intialState = {
  preparedFinalObject: {
    appConfig: {
      menus: []
    },
    snackbar: {
      open: false,
      variant: "success",
      message: ""
    },
    dashboard: {
      appbarName: ""
    },
    login: {
      userName: "",
      password: ""
    },
    signup: {
      userName: "",
      emailId: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    },
    Shop_register: {
      select_type: "",
      vehicle_number: "",
      name: "",
      phone_number: "",
      address: "",
      email: "",
      sidelist: []
    },

    spinner: false,
    selectedLanguage: window.localStorage.getItem("selectedLanguage") || "en"
  },
};

const screenConfiguration = (state = intialState, action) => {
  switch (action.type) {
    case screenActionTypes.PREPARE_FINAL_OBJECT:
      const updatedPreparedFinalObject = prepareFinalObject(
        state.preparedFinalObject,
        action.jsonPath,
        action.value
      );
      return {
        ...state,
        preparedFinalObject: updatedPreparedFinalObject
      };
    default:
      return state;
  }
};

export default screenConfiguration;
