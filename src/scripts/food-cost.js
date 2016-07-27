'use strict';
window.FoodCost = (function (ko){
	return {
		create: function (cost) {
			var viewmodel = {};
			//add properties and methods
			viewmodel.name = ko.observable(foods.name);
			viewmodel.type = ko.observable(foods.type);
			viewmodel.quantity = ko.observable(foods.quantity);
			viewmodel.servings = ko.observable(foods.servings);
			viewmodel.unitCost = ko.observable(foods.cost);
			viewmodel.totalCost = ko.computed(function () {
				var q = parseInt(this.quantity()); var uc = parseInt(this.unitCost());
				return q * uc;
			},viewmodel);
			viewmodel.servingCost = ko.computed(function () {
				var uc = parseInt(this.unitCost()); var s = parseInt(this.servings());
				return uc/s;
			},viewmodel);

			return viewmodel;
		}
	};
}(window.ko));