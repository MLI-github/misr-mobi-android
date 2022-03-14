var app = angular.module('mainApp', ['pascalprecht.translate','directiveModule']);
    app.controller('Ctrl', function($scope) {
        $scope.data = JSON.parse(Android.getDataAndroid());
        $scope.data.currentDate = new Date();
        var accNo = $scope.data.application.paymentDetails.savingCurrentAccountNumber;
        var mobileNo = $scope.data.application.policyOwnerDetails.proporserInformation.person.contacts.mobilePhone;
        $scope.data.accNumber = [];
        $scope.data.mobileNumber = [];
        if (mobileNo != null) {
            $scope.data.mobileNumber[1] = mobileNo.charAt(0);
            $scope.data.mobileNumber[2] = mobileNo.charAt(1);
            $scope.data.mobileNumber[3] = mobileNo.charAt(2);
            $scope.data.mobileNumber[4] = mobileNo.charAt(3);
            $scope.data.mobileNumber[5] = mobileNo.charAt(4);
            $scope.data.mobileNumber[6] = mobileNo.charAt(5);
            $scope.data.mobileNumber[7] = mobileNo.charAt(6);
            $scope.data.mobileNumber[8] = mobileNo.charAt(7);
            $scope.data.mobileNumber[9] = mobileNo.charAt(8);
            $scope.data.mobileNumber[10] = mobileNo.charAt(9);
            $scope.data.mobileNumber[11] = mobileNo.charAt(10);
            $scope.data.mobileNumber[12] = mobileNo.charAt(11);
            $scope.data.mobileNumber[13] = mobileNo.charAt(12);
            $scope.data.mobileNumber[14] = mobileNo.charAt(13);
            $scope.data.mobileNumber[15] = mobileNo.charAt(14);
            $scope.data.mobileNumber[16] = mobileNo.charAt(15);
        }
        var idNo = $scope.data.application.policyOwnerDetails.proporserInformation.person.basic.idList[0].value;
        $scope.data.idNumber = [];
        if (idNo != null) {
            $scope.data.idNumber[1] = idNo.charAt(0) ? idNo.charAt(0) :"";
            $scope.data.idNumber[2] = idNo.charAt(1) ? idNo.charAt(1) :"";
            $scope.data.idNumber[3] = idNo.charAt(2) ? idNo.charAt(2) :"";
            $scope.data.idNumber[4] = idNo.charAt(3) ? idNo.charAt(3) :"";
            $scope.data.idNumber[5] = idNo.charAt(4) ? idNo.charAt(4) :"";
            $scope.data.idNumber[6] = idNo.charAt(5) ? idNo.charAt(5) :"";
            $scope.data.idNumber[7] = idNo.charAt(6) ? idNo.charAt(6) :"";
            $scope.data.idNumber[8] = idNo.charAt(7) ? idNo.charAt(7) :"";
            $scope.data.idNumber[9] = idNo.charAt(8) ? idNo.charAt(8) :"";
            $scope.data.idNumber[10] = idNo.charAt(9) ? idNo.charAt(9) :"";
            $scope.data.idNumber[11] = idNo.charAt(10) ? idNo.charAt(10) :"";
            $scope.data.idNumber[12] = idNo.charAt(11) ? idNo.charAt(11) :"";
            $scope.data.idNumber[13] = idNo.charAt(12) ? idNo.charAt(12) :"";
            $scope.data.idNumber[14] = idNo.charAt(13) ? idNo.charAt(13) :"";
        }
        if (accNo != null) {
                $scope.data.accNumber[1] = accNo.charAt(0) ? accNo.charAt(0) :"";
                $scope.data.accNumber[2] = accNo.charAt(1) ? accNo.charAt(1) :"";
                $scope.data.accNumber[3] = accNo.charAt(2) ? accNo.charAt(2) :"";
                $scope.data.accNumber[4] = accNo.charAt(3) ? accNo.charAt(3) :"";
                $scope.data.accNumber[5] = accNo.charAt(4) ? accNo.charAt(4) :"";
                $scope.data.accNumber[6] = accNo.charAt(5) ? accNo.charAt(5) :"";
                $scope.data.accNumber[7] = accNo.charAt(6) ? accNo.charAt(6) :"";
                $scope.data.accNumber[8] = accNo.charAt(7) ? accNo.charAt(7) :"";
                $scope.data.accNumber[9] = accNo.charAt(8) ? accNo.charAt(8) :"";
                $scope.data.accNumber[10] = accNo.charAt(9) ? accNo.charAt(9) :"";
                $scope.data.accNumber[11] = accNo.charAt(10) ? accNo.charAt(10) :"";
                $scope.data.accNumber[12] = accNo.charAt(11) ? accNo.charAt(11) :"";
                $scope.data.accNumber[13] = accNo.charAt(12) ? accNo.charAt(12) :"";
                $scope.data.accNumber[14] = accNo.charAt(13) ? accNo.charAt(13) :"";
                $scope.data.accNumber[15] = accNo.charAt(14) ? accNo.charAt(14) :"";
                $scope.data.accNumber[16] = accNo.charAt(15) ? accNo.charAt(15) :"";
                $scope.data.accNumber[17] = accNo.charAt(16) ? accNo.charAt(16) :"";
                $scope.data.accNumber[18] = accNo.charAt(17) ? accNo.charAt(17) :"";
                $scope.data.accNumber[19] = accNo.charAt(18) ? accNo.charAt(18) :"";
                $scope.data.accNumber[20] = accNo.charAt(19) ? accNo.charAt(19) :"";
                $scope.data.accNumber[21] = accNo.charAt(20) ? accNo.charAt(20) :"";
                $scope.data.accNumber[22] = accNo.charAt(21) ? accNo.charAt(21) :"";
                $scope.data.accNumber[23] = accNo.charAt(22) ? accNo.charAt(22) :"";
                $scope.data.accNumber[24] = accNo.charAt(23) ? accNo.charAt(23) :"";
                $scope.data.accNumber[25] = accNo.charAt(24) ? accNo.charAt(24) :"";
                $scope.data.accNumber[26] = accNo.charAt(25) ? accNo.charAt(25) :"";
                $scope.data.accNumber[27] = accNo.charAt(26) ? accNo.charAt(26) :"";
                $scope.data.accNumber[28] = accNo.charAt(27) ? accNo.charAt(27) :"";
                $scope.data.accNumber[29] = accNo.charAt(28) ? accNo.charAt(28) :"";
                $scope.data.accNumber[30] = accNo.charAt(29) ? accNo.charAt(29) :"";
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