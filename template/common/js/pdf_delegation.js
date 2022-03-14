 angular.module('mainApp', ['pascalprecht.translate','directiveModule'])
    .controller('Ctrl', function($scope) {

        $scope.data = JSON.parse(Android.getDataAndroid());

        $scope.data.currentDate = new Date();
        var accNo = $scope.data.application.delegationInfo.accountNo;
        if(accNo != null){
            $scope.data.number13 = accNo.charAt(12);
            $scope.data.number12 = accNo.charAt(11);
            $scope.data.number11 = accNo.charAt(10);
            $scope.data.number10 = accNo.charAt(9);
            $scope.data.number9 = accNo.charAt(8);
            $scope.data.number8 = accNo.charAt(7);
            $scope.data.number7 = accNo.charAt(6);
            $scope.data.number6 = accNo.charAt(5);
            $scope.data.number5 = accNo.charAt(4);
            $scope.data.number4 = accNo.charAt(3);
            $scope.data.number3 = accNo.charAt(2);
            $scope.data.number2 = accNo.charAt(1);
            $scope.data.number1 = accNo.charAt(0);
        }

        angular.element(document).ready(function () {
            var branchElement = $('#branch');
                branchElement.css("margin-top",(branchElement.parent().height() - branchElement.height())/2 + "px");
            var bankManagerElement = $('#bankManager');
                bankManagerElement.css("margin-top",(bankManagerElement.parent().height() - bankManagerElement.height())/2 + "px");
            var branchInfoElement = $('#branch-info');
                branchInfoElement.css("margin-top",(branchInfoElement.parent().height() - branchInfoElement.height())/2 + "px");
            var bankManagerInfoElement = $('#bankManager-info');
                bankManagerInfoElement.css("margin-top",(bankManagerInfoElement.parent().height() - bankManagerInfoElement.height())/2 + "px");
        });
        /*Add page number into template*/
        window.onbeforeprint = addPageNumbers;
        function addPageNumbers() {
            var totalPages = Math.ceil(document.body.children[0].children[1].scrollHeight / 842);  //842px A4 pageheight for 72dpi, 1123px A4 pageheight for 96dpi,
            for (var i = 1; i <= totalPages; i++) {
               var pageNumberDiv = document.createElement("div");
               var pageNumber = document.createTextNode("Page " + i + " of " + totalPages);
               pageNumberDiv.style.position = "absolute";
               pageNumberDiv.style.top = "calc((" + i + " * (297mm - 0.5px)) - 40px)"; //297mm A4 pageheight; 0,5px unknown needed necessary correction value; additional wanted 40px margin from bottom(own element height included)
               pageNumberDiv.style.height = "16px";
               pageNumberDiv.appendChild(pageNumber);
               document.body.insertBefore(pageNumberDiv, document.getElementById("content"));
               pageNumberDiv.style.right = "calc(100% - (" + pageNumberDiv.offsetWidth + "px + 390px))";
            }
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