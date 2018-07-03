let app =  angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    this.constructor = () => {
        $scope.lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'Vi';
        $scope.getdata();
    }

    $scope.change = function (_lang){
        localStorage.setItem('lang',_lang);
        $scope.lang = _lang;
        $scope.getdata();
    }

    $scope.getdata = function () {
        $http.get('https://cnysa.github.io/profile/assets/data/'+$scope.lang+'/keyword.json').then(function (d) {
            $scope.thongtin = d.data;
            console.log($scope.thongtin)
        });
        $http.get('https://cnysa.github.io/profile/assets/data/'+$scope.lang+'/content.json').then(function (f) {
            $scope.about = f.data.aboutme;
            $scope.skill = f.data.skill;
            $scope.info = f.data.infomation;
            $scope.edu = f.data.education;
            console.log($scope.edu)
        });
    }
    this.constructor();
})