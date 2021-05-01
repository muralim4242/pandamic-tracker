export default {
  typography: {
    // In Japanese the characters are usually larger.
    fontFamily: `Poppins`,
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#90db42",
      contrastText: "#fff",
    },
    secondary:{
      main:"#46c676",
      contrastText: "#fff",
    },
    error:{
      main:"#f44336",
      contrastText: "#fff",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiCardContent: {
      // Name of the rule
      root: {
        // Some CSS
        padding: '16px 8px 16px 8px !important',
      },
    },
    MuiButton:{
      root:{
        margin:"4px",
        // width:"240px",
        height:"40px"
      }
    },
    MuiTextField:{
      root:{
        margin:"8px"
      },
    },
    MuiTypography:{
      root:{
        margin:"4px"
      },
    },
    // MuiFormLabel:{
    //   root:{
    //     color:"black",
    //     margin:"10px 0px 10px 4px",
    //     fontWeight:400
    //   }
    // },
    MuiStepper:{
      root:{
        padding:"35px"
      }
    },
    // MuiGrid:{
    //   root:{
    //     backgroundColor:"white"
    //   }
    // }
  },
}
