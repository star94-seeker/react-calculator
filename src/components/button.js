import React from "react";

const Button = (props) => {
    return (
        <input onClick = {props.handleClick} type="button" value={props.label} />
    )
}

export default Button;