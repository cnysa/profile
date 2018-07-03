let app =  angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    this.constructor = () => {
        $scope.test();
        $scope.getkeyword();
    }
    $scope.test = function () {
        console.log("quyendeptrai");
    }
    $scope.getkeyword = function () {
        $http.get("http://cnysa.github.io/profile/assets/data/Vi/keyword.json").then(function (d) {
            $scope.thongtin = d.data;
            console.log($scope.thongtin)
        });
    }
    $scope.getcontent = function () {
        $http.get("http://cnysa.github.io/profile/assets/data/Vi/content.json").then(function (f) {
            $scope.aboutme = f.data.aboutme;
            console.log($scope.aboutme)
        });
    }
    this.constructor();
})