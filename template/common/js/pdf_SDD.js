var app = angular.module('mainApp', ['pascalprecht.translate','directiveModule']);
    app.controller('Ctrl', function($scope) {

        $scope.data = JSON.parse(Android.getDataAndroid());
        $scope.data.currentDate = new Date();
        $scope.getDateDeduction = function() {
            var effectiveDate = new Date($scope.data.effectiveDate);
            effectiveDate.setFullYear(effectiveDate.getFullYear(), effectiveDate.getMonth() + 2, 1);
            return effectiveDate;
        }
    });
    app.config(["$translateProvider",function($translateProvider){
        $translateProvider.useStaticFilesLoader(
            {
                prefix: '../../common/i18n/en.',
                suffix: '.json'
            }
        );
        $translateProvider.preferredLanguage('translation');
    }]);