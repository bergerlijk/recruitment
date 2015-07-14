// create the controller and inject Angular's $scope
recruitmentApp.controller('loginController', function($scope, $http, $location, userLoginProcess) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.submitted = false;
    $scope.login = function () {
 
        if ($scope.loginForm.$valid) {
            // Submit as normal
            console.log('submitting form...');
        } else {
            $scope.submitted = true;
            var paramsObj = {};
            paramsObj.userId = $("#email").val();
            paramsObj.password = $("#email").val();
            var headers = {headers: { 'Content-Type': 'application/json', 'TGTSIG': "adasdasd" }};
            
            // Simple POST request example (passing data) :
            $userLoginProcess.registerUser(paramsObj, headers).then(function (data) {
                if(data.status == 'false'){
                    $scope.errorMsg = "Invalid Credentials!";
                }
            },
            function (errorMessage) {
                $scope.errorMsg = "Invalid Credentials!";
            });
        }
    }
});