let app =  angular.module('app', []);
app.controller('appCtrl', function ($scope, $http) {
    this.constructor = () => {
        $scope.test();
        $scope.getLstSkills();
    }
    $scope.test = function () {
        console.log("quyendeptrai");
    }
    $scope.getLstSkills = function () {
        $http.get('https://doannq01.github.io/jsonfile/skills.json').then(function (d) {
            console.log(d.data.records);
    });
    }
    this.constructor();
})