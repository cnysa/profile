let app =  angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    this.constructor = () => {
        $scope.test();
        $scope.getLstSkills();
    }
    $scope.test = function () {
        console.log("quyendeptrai");
    }
    $scope.getLstSkills = function () {
        $http.get("../data/vi.json").then(function (d) {
            console.log(d);
    });
    }
    this.constructor();
})