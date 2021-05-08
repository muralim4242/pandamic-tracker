import React from 'react';
import { InputAdornment, InputBase } from '@material-ui/core';

class InputField extends React.Component {
    render() {
        const {
            fieldValue,
            placeholder,
            fullWidth,
            hasEndAdornment = false,
            adornmentPosition,
            icon,
            rootCss,
            handleChange,
            hasstartAdornment,
        } = this.props;
        return (
            <InputBase
                value={fieldValue}
                placeholder={placeholder}
                fullWidth={fullWidth}
                className={rootCss}
                onChange={handleChange}
                startAdornment={
                    hasstartAdornment && (
                        <InputAdornment position={adornmentPosition}>
                            {icon}
                        </InputAdornment>
                    )
                }
                endAdornment={
                    hasEndAdornment && (
                        <InputAdornment position={adornmentPosition}>
                            {icon}
                        </InputAdornment>
                    )
                }
            />


        );
    }

}

export default InputField;