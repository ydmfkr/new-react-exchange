import React from 'react'
import './Input.css'

const Input = (props) => {

    let inputElement = null;

    switch (props.inputType) {

        case 'input':
            inputElement =
                <input
                    className="InputElement"
                    {...props.elementConfig}
                    onChange={props.onChange}
                    value={props.value}
                />
            break;
        case 'textarea':
            inputElement =
                <input
                    className="InputElement"
                    {...props.elementConfig}
                    onChange={props.onChange}
                    onBlur={props.onFocusOut}
                    value={props.value}
                />
            break;
        default:
            inputElement =
                <input
                    className="InputElement"
                    {...props.elementConfig}
                    onChange={props.onChange}
                    value={props.value}
                />
    }


    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input