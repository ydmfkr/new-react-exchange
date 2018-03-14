import React, {Component} from 'react'
import Input from "../../components/UI/Input/Input";
import Constants from "../../utils/Constants"
import './Register.css'

class Register extends Component {

	state = {
		orderForm: {

			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: Constants.Register.name.nameInputPlaceholder
				},
				value: '',
				label: Constants.Register.name.nameLabel,
				bottomLabel: Constants.Register.name.nameInputNoError,
				validation: {
					required: true,
					minLength: 3
				},
				valid: false,
				className: Constants.Register.default
			},
			username: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: Constants.Register.username.usernameInputPlaceholder
				},
				value: '',
				label: Constants.Register.username.usernameLabel,
				bottomLabel: Constants.Register.username.usernameInputNoError,
				validation: {
					required: true,
					minLength: 3,
					noCharacters: false
				},
				valid: false,
				className: Constants.Register.default
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: Constants.Register.email.emailInputPlaceholder
				},
				value: '',
				label: Constants.Register.email.emailLabel,
				bottomLabel: Constants.Register.email.usernameInputNoError,
				validation: {
					required: true,
					validEmail: true
				},
				valid: false,
				className: Constants.Register.default
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'Password',
					placeholder: Constants.Register.password.passwordInputPlaceholder
				},
				value: '',
				label: Constants.Register.password.passwordLabel,
				bottomLabel: Constants.Register.password.usernameInputNoError,
				validation: {
					required: true,
					minLength: 6,
					numbers: true,
					capital: true,
					special: true

				},
				valid: false,
				className: Constants.Register.default
			},
			re_enter_password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: Constants.Register.re_enter_password.rePasswordInputPlaceHolder
				},
				value: '',
				label: Constants.Register.re_enter_password.rePasswordLabel,
				bottomLabel: Constants.Register.re_enter_password.usernameInputNoError,
				validation: {
					required: true,
					samePassword: true
				},
				valid: false,
				className: Constants.Register.default
			}
		}
	}

	onInputChangeHandler = (key, event) => {
		let order_form = this.state.orderForm
		order_form[key].value = event.target.value;
		order_form[key].valid = this.checkInput(key, order_form[key].value, order_form[key].validation);
		if (order_form[key].valid) {
			order_form[key].className = Constants.Register.success
			order_form[key].bottomLabel = Constants.Register[key].NoError
		} else {
			order_form[key].className = Constants.Register.failure
			order_form[key].bottomLabel = Constants.Register[key].ErrorMessage
		}
		console.log(order_form[key].valid)
		console.log(order_form[key].className)
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
		if (rules.validEmail) {
			isValid = this.ValidateEmail(value) && isValid
		}

		if (rules.samePassword) {
			isValid = this.state.orderForm['password'].value === value && isValid
		}

		return isValid;
	}

	ValidateEmail(mail) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
			return (true)
		}
		return (false)
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
								inputType={formElement.config.elementType}
								elementConfig={formElement.config.elementConfig}
								value={formElement.config.value}
								label={formElement.config.label}
								bottomLabel={formElement.config.bottomLabel}
								inputElementType={formElement.config.className}
								onChange={(event) => this.onInputChangeHandler(formElement.id, event)}
							/>
						)
					)
				}
			</form>
		)
		return (
			<div className="Register">
				<h2> Enter Details</h2>

				{form}

			</div>
		)
	}
}

export default Register