(function () {
	"use strict";

	angular
	.module('app')
	.component('inputNaturalNumber', {
		bindings: {
  			'inputValue': '='
  		},		
  		controller: function () {},
  		templateUrl: 'views/inputNaturalNumber.view.html'
	});

	angular
	.module('app')
	.component('inner', {
		require: {
			inputNaturalNumber: '^inputNaturalNumber'
		},
		bindings: {
  			'value': '<'
  		},		
  		controller: InnerController,
  		template: ''
	});

	function InnerController () {
		let regNumber = /^-?\d*$/;
		this.$onChanges = function (changesObj) {
			if (changesObj.value) {
				if (! regNumber.exec(changesObj.value.currentValue)) {
					this.inputNaturalNumber.inputValue = changesObj.value.previousValue;
				}
			}
		}
	}
})();
