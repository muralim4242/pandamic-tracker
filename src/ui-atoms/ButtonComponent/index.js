import React from 'react';


class ButtonComponent extends React.Component {
    render() {
        const { rootCss,
            color,
            value,
            variant,
            handleonclick,
            type,
            Icon
        }

            = this.props;
        return (
            <button
                className={rootCss}
                onClick={handleonclick}
                variant={variant}
                color={color}
                type={type}
                defaultValue={value}
            >{value} {Icon}</button>
        );
    }
}

export default ButtonComponent;