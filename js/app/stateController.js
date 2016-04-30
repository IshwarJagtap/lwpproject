app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise('login');
	$stateProvider	
	.state('login', {
		url: '/login',
		template: '<div ng-click="sendAjaxCall()">Click Me</div>',
		controller: 'loginController'
	})
	.state('home', {
		url: '/home',
		template: 'HomeLoaded',
		controller : 'stateParentController'
	})
}]);
