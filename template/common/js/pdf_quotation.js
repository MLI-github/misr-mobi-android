angular.module('mainApp', ['pascalprecht.translate'])
    .controller('Ctrl', function($scope) {

        $scope.data =  JSON.parse(Android.getDataAndroid());
        //filter rider list for INP product
        if($scope.data.quotation.metaData.productName == 'inp'){
            var newRidersINPList = new Array();
            for(var i = 0; i < $scope.data.quotation.ridersINP.length; i ++){
                for(var j = 0; j < $scope.data.quotation.ridersINP[i].riderInformations.length; j ++){
                    if($scope.data.quotation.ridersINP[i].riderName == 'TPDR'){
                        $scope.data.quotation.ridersINP[i].riderInformations[j].idLifeInsured = 1;
                        var item = $scope.data.quotation.ridersINP[i].riderInformations[j];
                        item.riderName = $scope.data.quotation.ridersINP[i].riderName;
                        newRidersINPList.push(item);
                    }
                    else{
                        if($scope.data.quotation.ridersINP[i].riderInformations[j].isLifeAssuredChecked != 'true'){
                            $scope.data.quotation.ridersINP[i].riderInformations.splice(j,1);
                            j == 0 ? j -- : j;
                        }
                        else{
                            $scope.data.quotation.ridersINP[i].riderInformations[j].idLifeInsured = parseInt($scope.data.quotation.ridersINP[i].riderInformations[j].idLifeInsured.slice(-1)) + 1;
                            var item = $scope.data.quotation.ridersINP[i].riderInformations[j];
                            item.riderName = $scope.data.quotation.ridersINP[i].riderName;
                            newRidersINPList.push(item);
                        }
                    }
                }
            }

            $scope.data.quotation.newRidersINPList = newRidersINPList.sort(function(a, b){
                                                                     return a.idLifeInsured - b.idLifeInsured;
                                                                 });
        }
       $scope.getCurrentDate = function (){
            return new Date();
       }
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
