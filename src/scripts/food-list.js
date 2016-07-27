//food-list view model
'use strict';
window.FoodList = (function (ko) {
	return {
		create: function (foods) {
			var viewmodel = {};
			//properties
			viewmodel.foods = foods;
			viewmodel.selectedFood = ko.observable(foods[0]);

			//methods
			viewmodel.selectFood = function (food) {
				this.selectedFood(food);
			};

			viewmodel.isSelected = function (food) {
				return this.selectedFood() === food;
			};

			return viewmodel;
		}
	};
}(window.ko));
