import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ButtonComponent from '../../ui-atoms/ButtonComponent';
import { mapDispatchToProps } from '../../ui-utils/commons';
import "./index.css";

class Welcome extends React.Component{

    LoginOPen=()=>{
        this.props.history.push("./login");
    }
    SignupOPen=()=>{
        this.props.history.push("./register");
    }
    render(){
       
        return(
            <div className="root1">
                <ButtonComponent
                    rootCss={"buttonWelcome"}
                    value={"Login"}
                    type="text"
                    handleonclick={this.LoginOPen}
                />
                <h2 className={"welcomeHeader"}>Welcome to MIHY covid tracker</h2>
                  <ButtonComponent
                  rootCss={"buttonWelcome"}
                    value={"Signup"}
                    type="text"
                    handleonclick={this.SignupOPen}

                />
            </div>
        )
    };
};

export default connect(null, mapDispatchToProps)(withRouter((Welcome)));