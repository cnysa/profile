let app =  angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    this.constructor = () => {
        $scope.getkeyword();
        $scope.Vietnamese();
    }
    $scope.getkeyword = function () {
        $http.get("https://cnysa.github.io/profile/assets/data/Vi/keyword.json").then(function (d) {
            $scope.thongtin = d.data;
            console.log($scope.thongtin)
        });
    }
    $scope.english = function (){
        $http.get("https://cnysa.github.io/profile/assets/data/eng/content.json").then(function (f) {
            $scope.about = f.data.aboutme;
            $scope.skill = f.data.skill;
            $scope.info = f.data.infomation;
            $scope.edu = f.data.education;
            console.log($scope.edu)
        });
    }
    $scope.Vietnamese = function () {
        $http.get("https://cnysa.github.io/profile/assets/data/Vi/content.json").then(function (f) {
            $scope.about = f.data.aboutme;
            $scope.skill = f.data.skill;
            $scope.info = f.data.infomation;
            $scope.edu = f.data.education;
            console.log($scope.edu)
        });
    }
    this.constructor();
})