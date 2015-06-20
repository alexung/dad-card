dadApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: "app/components/card-2015/views/dadCard2015View.html",
      controller: "dadCard2015Ctrl"
    })
    .when('/info', {
      templateUrl: "app/components/card-2015/views/infoView.html",
      controller: "dadCard2015Ctrl"
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
