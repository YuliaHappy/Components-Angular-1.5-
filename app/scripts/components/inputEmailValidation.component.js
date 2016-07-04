(function () {
	"use strict";

	angular
	.module('app')
	.component('inputEmailValidation', {
		bindings: {
  			'labelText': '<',
  			'inputValue': '<'
  		},	
		templateUrl: 'views/inputEmailValidation.view.html',
		controller: inputEmailValidationController
	});

	function inputEmailValidationController () {
		let errorDefs = {
			required: "A number is required",
			email: "It isn`t email"
		}
		let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		this.errorValue = false;
		this.errorMessage = "";

		this.blur = function () {
			if (this.inputValue == "" || 
				typeof this.inputValue === 'undefined') {
				this.errorValue = true;
				this.errorMessage = errorDefs.required;
			} else if (! regEmail.exec(this.inputValue)) {
				this.errorValue = true;
				this.errorMessage = errorDefs.email;
			} else {
				this.errorValue = false;
			}
		}
	};
})();