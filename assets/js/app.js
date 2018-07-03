let app =  angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    this.constructor = () => {
        $scope.getvikeyword();
    }
    $scope.getvikeyword = function () {
        $http.get("https://github.com/cnysa/profile/blob/master/assets/data/Vi/keyword.json").then(function (d) {
            $scope.thongtin = d.data;
            console.log($scope.thongtin);
            $scope.Vietnamese();
        });
    }
    $scope.Vietnamese = function () {
        $http.get("https://github.com/cnysa/profile/blob/master/assets/data/Vi/content.json").then(function (f) {
            $scope.about = f.data.aboutme;
            $scope.skill = f.data.skill;
            $scope.info = f.data.infomation;
            $scope.edu = f.data.education;
        });
    }
    this.constructor();
})