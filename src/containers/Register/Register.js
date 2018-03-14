import React, {Component} from 'react'
import Input from "../../components/UI/Input/Input";

class Register extends Component {

    state = {
        orderForm: {

            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'For Example: John Doe'
                },
                value: '',
                label: 'Your Full Name',
                validation: {
                    required: true,
                    minLength: 3
                },
                valid: false
            },
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'For Example: 1johndoe1'
                },
                value: '',
                label: 'Your Username',
                validation: {
                    required: true,
                    minLength: 3,
                    noCharacters: false
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'For Example: johndoe123@gmail.com'
                },
                value: '',
                label: 'Your E-mail Address',
                validation: {
                    required: true
                },
                valid: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'Password',
                    placeholder: 'For Example: 1923ewfdc1212'
                },
                value: '',
                label: 'Your Password',
                validation: {
                    required: true,
                    minLength: 6,
                    numbers: true,
                    capital: true,
                    special: true

                },
                valid: false
            },
            re_enter_password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'For Example: 1923ewfdc1212'
                },
                value: '',
                label: 'Re-Enter Your Password',
                validation: {
                    required: true,
                    samePassword: true
                },
                valid: false
            }
        }
    }

    onInputChangeHandler = (key, event) => {
        let order_form = this.state.orderForm
        order_form[key].value = event.target.value;
        order_form[key].valid = this.checkInput(key, order_form[key].value, order_form[key].validation);
        console.log(order_form[key].valid);
        this.setState({orderForm: order_form})
    }

    checkInput(key, value, rules) {
        let regExpNum = /\d/g //global check for numbers
        let regExpSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        let isValid = true
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.numbers) {
            isValid = regExpNum.test(value) && isValid
        }

        if (rules.special) {
            isValid = regExpSpecial.test(value) && isValid
        }

        if (rules.capital) {
            isValid = (value.toLowerCase() !== value) && isValid
        }
        return isValid;
    }

    render() {


        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form>
                {
                    formElementArray.map(formElement => (
                            <Input
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                label={formElement.config.label}
                                onChange={(event) => this.onInputChangeHandler(formElement.id, event)}
                                onFocusOut={(event) => this.checkInput(formElement.id, event)}
                            />
                        )
                    )
                }
            </form>
        )
        return (
            <div>
                <h2> Enter Details</h2>

                {form}

            </div>
        )
    }
}

export default Register