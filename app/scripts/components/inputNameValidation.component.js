(function () {
	"use strict";

	angular
	.module('app')
	.component('inputNameValidation', {
		bindings: {
  			'labelText': '<',
  			'inputValue': '<',
  			'errorDefs': '<'
  		},
  		require: {
  			ngModel: '?ngModel'
  		},	
		templateUrl: 'views/inputNameValidation.view.html',
		controller: inputNameValidationController
	});

	function inputNameValidationController () {
		this.warning = "";
		this.hasError = false;
		this.blur = function () {
			debugger;
			if (this.inputValue == "" || 
				typeof this.inputValue === 'undefined') {
				this.hasError = true;
				this.warning = this.errorDefs.required;
				this.ngModel.$setValidity("required", false);
			} else if (this.inputValue.length <= 10) {				
				this.hasError = true;
				this.warning = this.errorDefs.minlength;
				this.ngModel.$setValidity("minlength", false);
			} else {
				this.hasError = false;
				this.ngModel.$setValidity("required", true);				
				this.ngModel.$setValidity("minlength", true);
			}
			this.ngModel.$setViewValue(this.inputValue);
		}
	};
})();