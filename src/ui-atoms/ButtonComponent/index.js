import React from 'react';

class ButtonComponent extends React.Component {
    render() {
        const { rootCss, color, value, variant, handleOnClick,type,icon,iconPosition } = this.props;
        return (
            <button
                className={rootCss}
                onClick={handleOnClick}
                variant={variant}
                color={color}
                type={type}
                defaultValue={value}
                icon={icon}
                iconPosition={iconPosition}
            >{value}</button>
        );
    }
}

export default ButtonComponent;