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
        $http.get("http://cnysa.github.io/profile/assets/data/Vi/keyword.json").then(function (d) {
            console.log(d.data);
            $scope.thongtin = d.data;
            console.log($scope.thongtin)
    });
    }
    this.constructor();
})