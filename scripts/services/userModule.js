/*
 * Author: dsutradhar
*/

recruitmentApp.factory('userLoginProcess',function($http, $q){
			return{
				apiPath:'/v1/userstate/',
                registerUser: function(json, headers){
                    var deferred = $q.defer();
                    $http.post(API_USERSTATE, json, headers).success(function(data){
                        deferred.resolve(data);
                    }).error(function(){
                        deferred.reject("An error occured");
                    });
                    return deferred.promise;
                }
		}
	});