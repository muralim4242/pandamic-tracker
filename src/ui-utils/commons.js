import { prepareFinalObject } from "../ui-redux/screen-configuration/actions";

export const getPhonenumber = () => {
  const request = { nonce: 'nonce typically generated server-side' };
  window.microapps.getPhoneNumber(request).then(response => {
    const decoded = JSON.parse(atob(response.split('.')[1]));
    console.log('getPhoneNumber response: ', decoded);
    return decoded;
  }).catch(error => {
    console.error('An error occurred: ', error);
  });
}

export const getImageUrlByFile = file => {
  return new Promise(resolve => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      const fileurl = e.target.result;
      resolve(fileurl);
    };
  });
};

export const getFileSize = (file) => {
  const size = parseFloat(file.size / 1024).toFixed(2);
  return size;
};

export const isFileImage = (file) => {
  const mimeType = file["type"];
  return (mimeType && mimeType.split("/")[0] === "image") || false;
};

export const addQueryArg = (url, queries = []) => {
  const urlParts = url.split("?");
  const path = urlParts[0];
  let queryParts = urlParts.length > 1 ? urlParts[1].split("&") : [];
  queries.forEach(query => {
    const key = query.key;
    const value = query.value;
    const newQuery = `${key}=${value}`;
    queryParts.push(newQuery);
  });
  const newUrl = path + "?" + queryParts.join("&");
  return newUrl;
};


export const getUrlParameterValue = (key) => {
  let params = (new URL(document.location)).searchParams;
  let value = params.get(key);
  return value;
}

export const age = (dateString) => {
  let birth = new Date(dateString);
  let now = new Date();
  let beforeBirth = ((() => { birth.setDate(now.getDate()); birth.setMonth(now.getMonth()); return birth.getTime() })() < birth.getTime()) ? 0 : 1;
  return now.getFullYear() - birth.getFullYear() - beforeBirth;
}

//name = name.replace(/[\[\]]/g, "\\$&");

export const getQueryArg = (name, url = null) => {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setAppData: (jsonPath, data) => {
      dispatch(prepareFinalObject(jsonPath, data))
    }
  }
}
export const getMenu = (menus = [], path) => {
  let menuObj = {};
  let menuIndex=0;
  menuObj = menus.find(menu => menu.route === path);
  menuIndex = menus.findIndex(menu => menu.route === path);
  return {
    ...menuObj,
    menuIndex: menuIndex
  };
};


export let snackbarObj = {};
snackbarObj.open = true;
snackbarObj.variant = "error";


export const transferDropDownValues = (masterData = [], labelName, valueName, extraObject = []) => {
  let convertedArray = [];
  masterData.forEach(data => {
    let object = { label: data[labelName], value: data[valueName] }
    extraObject.forEach((item) => {
      object[item] = data[item]
    })
    convertedArray.push(object)
  });
  return convertedArray
};
export const StatesList = [
  {
    "StateCode": "AN",
    "StateName": "Andaman & Nicobar"
  },
  {
    "StateCode": "AP",
    "StateName": "Andhra Pradesh"
  },
  {
    "StateCode": "AR",
    "StateName": "Arunachal Pradesh"
  },
  {
    "StateCode": "AS",
    "StateName": "Assam"
  },
  {
    "StateCode": "BR",
    "StateName": "Bihar"
  },
  {
    "StateCode": "CH",
    "StateName": "Chandigarh"
  },
  {
    "StateCode": "CG",
    "StateName": "Chhattisgarh"
  },
  {
    "StateCode": "DN",
    "StateName": "Dadra and Nagar Haveli"
  },
  {
    "StateCode": "DD",
    "StateName": "Daman & Diu"
  },
  {
    "StateCode": "DL",
    "StateName": "Delhi"
  },
  {
    "StateCode": "GA",
    "StateName": "Goa"
  },
  {
    "StateCode": "GJ",
    "StateName": "Gujarat"
  },
  {
    "StateCode": "HR",
    "StateName": "Haryana"
  },
  {
    "StateCode": "HP",
    "StateName": "Himachal Pradesh"
  },
  {
    "StateCode": "JK",
    "StateName": "Jammu & Kashmir"
  },
  {
    "StateCode": "JH",
    "StateName": "Jharkhand"
  },
  {
    "StateCode": "KA",
    "StateName": "Karnataka"
  },
  {
    "StateCode": "KL",
    "StateName": "Kerala"
  },
  {
    "StateCode": "LD",
    "StateName": "Lakshadweep"
  },
  {
    "StateCode": "MP",
    "StateName": "Madhya Pradesh"
  },
  {
    "StateCode": "MH",
    "StateName": "Maharashtra"
  },
  {
    "StateCode": "MN",
    "StateName": "Manipur"
  },
  {
    "StateCode": "ML",
    "StateName": "Meghalaya"
  },
  {
    "StateCode": "MZ",
    "StateName": "Mizoram"
  },
  {
    "StateCode": "NL",
    "StateName": "Nagaland"
  },
  {
    "StateCode": "OR",
    "StateName": "Odisha"
  },
  {
    "StateCode": "PY",
    "StateName": "Pondicherry"
  },
  {
    "StateCode": "PB",
    "StateName": "Punjab"
  },
  {
    "StateCode": "RJ",
    "StateName": "Rajasthan"
  },
  {
    "StateCode": "SK",
    "StateName": "Sikkim"
  },
  {
    "StateCode": "TN",
    "StateName": "Tamil Nadu"
  },
  {
    "StateCode": "TS",
    "StateName": "Telangana"
  },
  {
    "StateCode": "TR",
    "StateName": "Tripura"
  },
  {
    "StateCode": "UP",
    "StateName": "Uttar Pradesh"
  },
  {
    "StateCode": "UK",
    "StateName": "Uttarakhand"
  },
  {
    "StateCode": "WB",
    "StateName": "West Bengal"
  }
];
export const VehicleClassList = [
  {
    "VehicleClassName": "Bus 2 axle",
    "VehicleClassCode": "7"
  },
  {
    "VehicleClassName": "Bus 3 axle",
    "VehicleClassCode": "8"
  },
  {
    "VehicleClassName": "Car/Jeep/Van",
    "VehicleClassCode": "4"
  },
  {
    "VehicleClassName": "Earth Moving Machinery",
    "VehicleClassCode": "16"
  },
  {
    "VehicleClassName": "Heavy Construction machinery",
    "VehicleClassCode": "17"
  },
  {
    "VehicleClassName": "Light Commercial vehicle 2 axle",
    "VehicleClassCode": "5"
  },
  {
    "VehicleClassName": "Mini Bus",
    "VehicleClassCode": "9"
  },
  {
    "VehicleClassName": "Tata Ace and Similar mini Light Commercial Vehicle",
    "VehicleClassCode": "20"
  },
  {
    "VehicleClassName": "Truck 2 axle",
    "VehicleClassCode": "10"
  },
  {
    "VehicleClassName": "Truck 3 axle",
    "VehicleClassCode": "11"
  },
  {
    "VehicleClassName": "Truck 4 axle",
    "VehicleClassCode": "12"
  },
  {
    "VehicleClassName": "Truck 5 axle",
    "VehicleClassCode": "13"
  },
  {
    "VehicleClassName": "Truck 6 axle",
    "VehicleClassCode": "14"
  },
  {
    "VehicleClassName": "Truck Multi axle  ( 7 and above)",
    "VehicleClassCode": "15"
  }
];
export const GendersList = [
  {
    "GenderDescription": "Female",
    "GenderCode": "Female"
  },
  {
    "GenderDescription": "Male",
    "GenderCode": "Male"
  },
  {
    "GenderDescription": "Transgender",
    "GenderCode": "Transgender"
  }
];
export const VehicleClassData = [
  {
    "name": "Car/Jeep/Van",
    "data": [
      {
        "vehicleType": "2 VC4",
        "vehicleClass": "Car/Jeep/Van",
        "tag": "Tag Class 4 - Violet Color Tag",
        "tagColor": "#7030a0",
        "wheelCount": "4"
      }],
    "icon": "ui-assets/images/car_cutout.png"
  },
  {
    "name": "Tata Ace/Mini LCV",
    "data": [
      {
        "vehicleType": "2 VC4",
        "vehicleClass": "Tata Ace and Similar mini Light Commercial Vehicle",
        "tag": "Tag Class 4 - Violet Color Tag",
        "tagColor": "#7030a0",
        "wheelCount": "20"
      }],
    "icon": "ui-assets/images/tata-ace_cutout.png"
  },
  {
    "name": "Bus",
    "data": [
      {
        "vehicleType": "2 Axle Mini Bus",
        "vehicleClass": "Mini Bus",
        "tag": "Tag Class 5 - Orange Color Tag",
        "tagColor": "#ffc000",
        "wheelCount": "9",
        "icon": "ui-assets/images/bus icons/bus_2xl.png"
      },
      {
        "vehicleType": "2 Axle Regular Bus",
        "vehicleClass": "Bus 2 axle",
        "tag": "Tag Class 7 - Green Color Tag",
        "tagColor": "#00b050",
        "wheelCount": "7",
        "icon": "ui-assets/images/bus icons/bus_2xl-regular.png"
      },
      {
        "vehicleType": "3 Axle Bus",
        "vehicleClass": "Bus 3 axle",
        "tag": "Tag Class 6 - Yellow Color Tag",
        "tagColor": "#ffff00",
        "wheelCount": "8",
        "icon": "ui-assets/images/bus icons/bus_3xl.png"
      }
    ],
    "icon": "ui-assets/images/bus_cutout.png"
  },
  {
    "name": "Truck",
    "data": [
      {
        "vehicleType": "LCV 2 Axle",
        "vehicleClass": "Light Commercial vehicle 2 axle",

        "tag": "Tag Class 5 - Orange Color Tag",
        "tagColor": "#ffc000",
        "wheelCount": "5",
        "icon": "ui-assets/images/truck icons/truck-2xl.png"
      },
      {
        "vehicleType": "2 Axle Regular Truck",
        "vehicleClass": "Truck 2 axle",

        "tag": "Tag Class 7 - Green Color Tag",
        "tagColor": "#00b050",
        "wheelCount": "10",
        "icon": "ui-assets/images/truck icons/truck-2xl.png"

      },
      {
        "vehicleType": "3 Axle Truck",
        "vehicleClass": "Truck 3 axle",
        "tag": "Tag Class 6 - Yellow Color Tag",
        "tagColor": "#ffff00",
        "wheelCount": "11",
        "icon": "ui-assets/images/truck icons/truck-3xl.png"

      },
      {
        "vehicleType": "4 Axle Truck",
        "vehicleClass": "Truck 4 axle",
        "tag": "Tag Class 12 - Pink Color Tag",
        "tagColor": "#ff0066",
        "wheelCount": "12",
        "icon": "ui-assets/images/truck icons/truck-4xl.png",

      },
      {
        "vehicleType": "5 Axle Truck",
        "vehicleClass": "Truck 5 axle",

        "tag": "Tag Class 12 - Pink Color Tag",
        "tagColor": "#ff0066",
        "wheelCount": "13",
        "icon": "ui-assets/images/truck icons/truck-5xl.png"
      },
      {
        "vehicleType": "6 Axle Truck",
        "vehicleClass": "Truck 6 axle",
        "tag": "Tag Class 12 - Pink Color Tag",
        "tagColor": "#ff0066",
        "wheelCount": "14",
        "icon": "ui-assets/images/truck icons/truck-6xl.png"
      },
      {
        "vehicleType": "7 or More Axle",
        "vehicleClass": "Truck Multi axle  ( 7 and above)",
        "tag": "Tag Class 15 - Light Blue Color Tag",
        "tagColor": "#2e75b5",
        "wheelCount": "15",
        "icon": "ui-assets/images/truck icons/truck-7xl.png"
      }
    ],
    "icon": "ui-assets/images/truck_cutout.png"
  },
  {
    "name": "Heavy Construction",
    "data": [
      {
        "vehicleType": "Earthmover",
        "vehicleClass": "Earth Moving Machinery",
        "tag": "Tag Class 16 - Black Color Tag",
        "tagColor": "#000000",
        "wheelCount": "16",
        "icon": "ui-assets/images/heavy-construction-vehicles/earthmover.png"
      },
      {
        "vehicleType": "Heavy Construction Machinery",
        "vehicleClass": "Heavy Construction machinery",
        "tag": "Tag Class 16 - Black Color Tag",
        "tagColor": "#000000",
        "wheelCount": "17",
        "icon": "ui-assets/images/heavy-construction-vehicles/heavy-construction-machinery.png"
      }
    ],
    "icon": "ui-assets/images/heavy-construction_cutout.png"
  }
];
export const TitlesList = [
  {
    "TitleDescription": "Dr",
    "TitleCode": "Dr"
  },
  {
    "TitleDescription": "Miss.",
    "TitleCode": "Miss"
  },
  {
    "TitleDescription": "Mr.",
    "TitleCode": "Mr"
  },
  {
    "TitleDescription": "Mrs",
    "TitleCode": "Mrs"
  },
  {
    "TitleDescription": "Ms",
    "TitleCode": "Ms"
  }
];
export const IdProofTypesList = [
  {
    "IdProofDescription": "Aadhaar Card",
    "IdProofCode": "Aadhaar"
  },
  {
    "IdProofDescription": "Driving Licence",
    "IdProofCode": "DL"
  },
  {
    "IdProofDescription": "Electoral Voters ID",
    "IdProofCode": "EVIC"
  },
  {
    "IdProofDescription": "Other",
    "IdProofCode": "Other"
  },
  {
    "IdProofDescription": "PanCard",
    "IdProofCode": "PC"
  },
  {
    "IdProofDescription": "Passport",
    "IdProofCode": "PP"
  }
];
export const AddressProofTypesList = [
  {
    "AddressProofDescription": "AADHAAR CARD",
    "AddressProofCode": "AADHAARCARD"
  },
  {
    "AddressProofDescription": "Driving Licence",
    "AddressProofCode": "DL"
  },
  {
    "AddressProofDescription": "Electoral Voters ID",
    "AddressProofCode": "EVIC"
  },
  {
    "AddressProofDescription": "Electricity Bill",
    "AddressProofCode": "EB"
  },
  {
    "AddressProofDescription": "Home Tax Bill",
    "AddressProofCode": "HTB"
  },
  {
    "AddressProofDescription": "Income Tax Certificate",
    "AddressProofCode": "ITC"
  },
  {
    "AddressProofDescription": "Lease Agreement",
    "AddressProofCode": "LA"
  },
  {
    "AddressProofDescription": "Passport",
    "AddressProofCode": "PP"
  },
  {
    "AddressProofDescription": "Ration Card",
    "AddressProofCode": "RC"
  },
  {
    "AddressProofDescription": "TelePhone Bill",
    "AddressProofCode": "TPB"
  },
  {
    "AddressProofDescription": "Water Bill",
    "AddressProofCode": "WB"
  }
];
export const ChannelCodesList = [
  {
    "ChannelDescription": "  NH100 SALES",
    "ChannelCode": "NH100SALES"
  },
  {
    "ChannelDescription": "Amazon",
    "ChannelCode": "Amzon_sales"
  },
  {
    "ChannelDescription": "App",
    "ChannelCode": "App"
  },
  {
    "ChannelDescription": "CC LEADS",
    "ChannelCode": "CCLEADS"
  },
  {
    "ChannelDescription": "CSPB",
    "ChannelCode": "CSPB"
  },
  {
    "ChannelDescription": "CV SALES",
    "ChannelCode": "CVSALES"
  },
  {
    "ChannelDescription": "CVDMA",
    "ChannelCode": "CVDMA"
  },
  {
    "ChannelDescription": "CVTD SALES",
    "ChannelCode": "CVTDSALES"
  },
  {
    "ChannelDescription": "DSA_SALES",
    "ChannelCode": "DSASALES"
  },
  {
    "ChannelDescription": "ETC POS",
    "ChannelCode": "ETCPOS"
  },
  {
    "ChannelDescription": "ETC SALES",
    "ChannelCode": "ETCSALES"
  },
  {
    "ChannelDescription": "Facebook",
    "ChannelCode": "FB_Sales"
  },
  {
    "ChannelDescription": "Flipkart",
    "ChannelCode": "FKart_sales"
  },
  {
    "ChannelDescription": "Google",
    "ChannelCode": "Google_sales"
  },
  {
    "ChannelDescription": "HPCLRO",
    "ChannelCode": "HPCLRO"
  },
  {
    "ChannelDescription": "iBIZZ",
    "ChannelCode": "iBIZZ"
  },
  {
    "ChannelDescription": "ICICI Bank i-Mobile",
    "ChannelCode": "IMB_sales"
  },
  {
    "ChannelDescription": "ICICI Bank website",
    "ChannelCode": "IB_online_sales"
  },
  {
    "ChannelDescription": "IHMCL",
    "ChannelCode": "IHMCL_sales"
  },
  {
    "ChannelDescription": "IMOBILE",
    "ChannelCode": "IMOBILE"
  },
  {
    "ChannelDescription": "LinkedIn",
    "ChannelCode": "Link_sales"
  },
  {
    "ChannelDescription": "NPCI App",
    "ChannelCode": "NPCI_Sales"
  },
  {
    "ChannelDescription": "OEM",
    "ChannelCode": "OEM"
  },
  {
    "ChannelDescription": "OLA",
    "ChannelCode": "OLA"
  },
  {
    "ChannelDescription": "Others",
    "ChannelCode": "Others"
  },
  {
    "ChannelDescription": "PASS CAMPAIGN",
    "ChannelCode": "PASSCAMPAIGN"
  },
  {
    "ChannelDescription": "Pockets",
    "ChannelCode": "Pockets"
  },
  {
    "ChannelDescription": "RIB",
    "ChannelCode": "RIB"
  },
  {
    "ChannelDescription": "SMS CAMPAIGN",
    "ChannelCode": "SMSCAMPAIGN"
  },
  {
    "ChannelDescription": "Twitter",
    "ChannelCode": "Tweet_sales"
  },
  {
    "ChannelDescription": "WEB CAMPAIGN",
    "ChannelCode": "WEBCAMPAIGN"
  }
]

export const headings = [
  {
    id: "/user-home/exiting-fasttag-status",
    heading: "Existing FASTag Status",
  },
  {
    id: "/user-home/confirm-rc",
    heading: "Other Details",
  },
  {
    id: "/user-home",
    heading: "",
  },
  {
    id: "/user-home/vehicle-details-auto",
    heading: "Other Details",
  },
  {
    id: "/user-home/vehicle-details-manual",
    heading: "Update Vehicle Information",
  },
  {
    id: "/user-home/otp",
    heading: "",
  },
  {
    id: "/user-home/payment",
    heading: "Other Details",
  },
  {
    id: "/user-home/rc-upload",
    heading: "Upload RC",
  },
  {
    id: "/user-home/tracking",
    heading: "Tracking Details"
  },
];

export const classFourMakeList = ["Acura", "ALFAROMEO", "American", "ASTONMARTN", "AUDI", "BAJAJ", "Battronics", "BENTLEY", "BMW", "Braun", "Buick", "Cadillac", "Checker", "CHVT", "Chrysler", "Datsun", "Dodge", "Eagle", "EEVC", "ELDORADO", "Eu96/27/Ec", "EVA", "Ferrari", "Fiat", "FIPL", "FORD", "GEO", "HD", "HE", "HHML", "Holden", "Honda", "HMC", "Hummer", "HSG", "Hyundai", "HMCO", "Infiniti", "INFINITY", "Jaguar", "Jeep", "JET", "KIA", "LMB", "LandRover", "Lectra", "Lectric", "Lewis", "Lexus", "Lincoln", "LOTUS", "MMW", "MarutiSuzuki", "MSIL", "MASERATI", "MAYBACH", "Mercedes", "BENZ", "Mercury", "MG", "Mini", "Mitsubishi", "MBM", "Nissan", "NMCL", "Nor-Cal", "Oldsmobile", "Plymouth", "Pontiac", "PC", "Prevost", "Renault", "RECCO", "RRM", "ROLLSROYCE", "Rollx", "Saab", "Saturn", "SAIPL", "Smart", "Solectria", "Thomas", "Tiara", "Toyota", "Triumph", "TVS", "UM", "Volkswagen", "VW", "Wayne", "YMIPL", "Yugo"]
