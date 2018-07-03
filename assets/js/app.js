let app =  angular.module('app', []);
app.controller('myCtrl', function ($scope, $http) {
    this.constructor = () => {
        $scope.test();
        $scope.getLstSkills();
    }
    $scope.test = function () {
        console.log("quyendeptrai");
    }
    $scope.getLstSkills = function () {
        $http.get("../assets/data/vi.json").then(function (d) {
            console.log(d);
    });
    }
    this.constructor();
})