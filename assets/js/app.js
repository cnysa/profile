let app =  angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    this.constructor = () => {
        $scope.keyURL;
        $scope.contenURL;
        $scope.setlenguage()
    }

    $scope.setlenguage = function () {
        if(typeof(Storage) !== "undefined")
        {
            $scope.kiemtra()
        }
        else{
            console.log("khong ho tro localstograge");
        }
    }
    $scope.kiemtra= function() {
        if(localStorage.ngonngu==1){
            $scope.setEng();
        }
        else{
            $scope.setVi();
            localStorage.setItem("ngonngu", 0);
        }
    }
    $scope.change = function(i) {
        if(i== 0 && i !== localStorage.ngonngu)
        {
            $scope.setVi();
            localStorage.setItem("ngonngu", 0);
        }
        else{
            $scope.setEng();
            localStorage.setItem("ngonngu", 1);
        }
    }
    $scope.setVi = function() {
        $scope.keyURL ="https://cnysa.github.io/profile/assets/data/Vi/keyword.json";
        $scope.contenURL = "https://cnysa.github.io/profile/assets/data/Vi/content.json";
        console.log('tieng viet');
        $scope.getdata();
    }
    $scope.setEng = function() {
        $scope.keyURL ="https://cnysa.github.io/profile/assets/data/Eng/keyword.json";
        $scope.contenURL ="https://cnysa.github.io/profile/assets/data/Eng/content.json";
        console.log('tieng anh');
        $scope.getdata()
    }
    // $scope.change = function (i) {
    //     if(i !== localStorage.ngonngu && localStorage.ngonngu !== 0){
    //         localStorage.ngonngu = 1;
    //         $scope.keyURL ="https://cnysa.github.io/profile/assets/data/Eng/keyword.json";
    //         $scope.contenURL ="https://cnysa.github.io/profile/assets/data/Eng/content.json";
    //         console.log('tieng anh');
    //         $scope.getdata()
    //     }
    //     else{
    //         localStorage.ngonngu =1;
    //         $scope.keyURL ="https://cnysa.github.io/profile/assets/data/Vi/keyword.json";
    //         $scope.contenURL = "https://cnysa.github.io/profile/assets/data/Vi/content.json";
    //         console.log('tieng viet');
    //         $scope.getdata()
    //     }
    // }

    $scope.getdata = function () {
        $http.get($scope.keyURL).then(function (d) {
            $scope.thongtin = d.data;
            console.log($scope.thongtin)
        });
        $http.get($scope.contenURL).then(function (f) {
            $scope.about = f.data.aboutme;
            $scope.skill = f.data.skill;
            $scope.info = f.data.infomation;
            $scope.edu = f.data.education;
            console.log($scope.edu)
        });
    }
    this.constructor();
})