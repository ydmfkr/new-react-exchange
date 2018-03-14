import React from 'react'
import './Input.css'

const Input = (props) => {

    let inputElement = null
    switch (props.inputType) {

        case 'input':
            inputElement =
                <input
                    className={["InputElement", props.inputElementType].join(' ')}
                    {...props.elementConfig}
                    onChange={props.onChange}
                    value={props.value}
                />
            break;
        case 'textarea':
            inputElement =
                <textarea
                    className="InputElement"
                    {...props.elementConfig}
                    onChange={props.onChange}
                    value={props.value}
                />
            break;
        default:
            inputElement =
                <input
                    className={["InputElement", props.inputElementType].join(' ')}
                    {...props.elementConfig}
                    onChange={props.onChange}
                    value={props.value}
                />
    }


    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
            <label className="BottomLabel">{props.bottomLabel}</label>
        </div>
    )
}

export default Input