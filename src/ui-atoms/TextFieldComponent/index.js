import React from 'react';
import './index.css';
import { IconButton, InputAdornment } from '@material-ui/core';
//import { Visibility, VisibilityOff } from '@material-ui/icons';


class TextFieldComponent extends React.Component {
    state={
        showPassword:false
    }
    render() {
        const {
            handleChange,
            fieldValue,
            placeholder,
            type,
            fullwidth,
            classes,
            isValid=false,
            hasEndAdornment = false,
            adormentPosition,
            icon,
            rootCss,
            ...rest
        } = this.props;
        console.log("is valid", isValid);
        return (
            //<div className={isValid ? "paperRoot" : "paperRooterror"}>
                <input
                className="input"
                type={
                  type === "password" ? (this.showPassword ? "text" : "password") : type
                }
                    value={fieldValue}
                    onChange={handleChange}
                    placeholder={placeholder}
                    fullwidth={fullwidth}
                    className={rootCss}

                    // inputLabelProps={{ className: classes.input }}
                    {...rest}
                // endAdornment={
                //     hasEndAdornment && (
                //         <InputAdornment position={adormentPosition}>
                //             <IconButton
                //                 aria-label="Toggle password visibility"
                //                 onClick={this.handleClickShowPassword}
                //             >
                //                 {icon}
                //             </IconButton>
                //         </InputAdornment>
                //     )
                // }
                />

           // </div>


        );
    }

}

export default TextFieldComponent;