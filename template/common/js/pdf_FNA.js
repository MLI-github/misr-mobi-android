var app = angular.module('mainApp', ['pascalprecht.translate','directiveModule']);
    app.controller('Ctrl', function($scope) {
        $scope.data = JSON.parse(Android.getDataAndroid());
        $scope.data.currentDate = new Date();
       $scope.getCurrentDate = function (){
            return new Date();
       }
    })
    .config(["$translateProvider",function($translateProvider){
        $translateProvider.useStaticFilesLoader(
            {
                prefix: '../../common/i18n/en.',
                suffix: '.json'
            }
        );
    $translateProvider.preferredLanguage('translation');

    }])