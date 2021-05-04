import React from 'react';

class ButtonComponent extends React.Component {
    render() {
        const { rootCss, color, value, variant, handleOnClick } = this.props;
        return (
            <button
                className={rootCss}
                onClick={handleOnClick}
                variant={variant}
                color={color}
                defaultValue={value}
            >{value}</button>
        );
    }
}

export default ButtonComponent;