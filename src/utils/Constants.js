const Constants = {

	Register:
		{   name:{
				nameInputPlaceholder: 'For Example: John Doe',
				nameLabel: 'Your Full Name',
				ErrorMessage: 'Surely Your Name Spells Out More Than 3 Characters',
				NoError: ''
			},
			username:{
				usernameInputPlaceholder: 'For Example: doejohn123',
				usernameLabel: 'Your Username',
				NoError: '',
				ErrorMessage: 'Surely You Could Come up With a Username with More Than 3 Characters'
			},
			email:{
				emailInputPlaceholder: 'For Example: johndoe123@gmail.com',
				emailLabel: 'Your E-mail Address',
				NoError: '',
				ErrorMessage: 'Please Enter A Valid E-mail Address'
			},
			password:{
				passwordInputPlaceholder: 'For Example: 1923ewfdc1212',
				passwordLabel: 'Your Password',
				NoError: '',
				ErrorMessage: 'Your Password Must Contain a Symbol, a Number, an UpperCase and Lowercase Character'
			},
			re_enter_password:{
				rePasswordInputPlaceHolder: 'For Example: 1923ewfdc1212',
				rePasswordLabel: 'Re-Enter Your Password',
				NoError: '',
				ErrorMessage: 'Please Enter The Same Password You Entered in The Previous Field'
			},

			defaultClass: 'InputElement',
			default: 'Default',
			success: 'Success',
			failure: 'Failure'
		}
}

export default Constants