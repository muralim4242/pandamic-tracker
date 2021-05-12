import React from 'react';

class ButtonComponent extends React.Component {
    render() {
        const { rootCss, color, value, variant, handleonclick,type,icon,iconPosition } = this.props;
        return (
            <button
                className={rootCss}
                onClick={handleonclick}
                variant={variant}
                color={color}
                type={type}
                defaultValue={value}
            >{value}</button>
        );
    }
}

export default ButtonComponent;