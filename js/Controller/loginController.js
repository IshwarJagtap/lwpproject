app.controller('loginController', ['$scope','$state', function($scope,$state) {
	console.error('login Page loaded Successfully');
	$scope.loginDetails = {};
	$scope.sendAjaxCall = function(){


		var _object = {
			firstName : $scope.loginDetails.firstName,
			lastName : $scope.loginDetails.lastName,
			emailAddress : $scope.loginDetails.emailAddress,
			password : $scope.loginDetails.password,
			mobileNumber : $scope.loginDetails.mobileNumber,
		}
		$state.go('home');	
	};
}])

