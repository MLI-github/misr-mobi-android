var app = angular.module('mainApp', ['pascalprecht.translate','directiveModule']);
app.controller('Ctrl', function ($scope) {

	$scope.data =  JSON.parse(Android.getDataAndroid());
	var accNo = $scope.data.application.paymentDetails.savingCurrentAccountNumber;
	$scope.data.accNumber = [];
	if (accNo != null) {
		$scope.data.accNumber[1] = accNo.charAt(0);
		$scope.data.accNumber[2] = accNo.charAt(1);
		$scope.data.accNumber[3] = accNo.charAt(2);
		$scope.data.accNumber[4] = accNo.charAt(3);
		$scope.data.accNumber[5] = accNo.charAt(4);
		$scope.data.accNumber[6] = accNo.charAt(5);
		$scope.data.accNumber[7] = accNo.charAt(6);
		$scope.data.accNumber[8] = accNo.charAt(7);
		$scope.data.accNumber[9] = accNo.charAt(8);
		$scope.data.accNumber[10] = accNo.charAt(9);
		$scope.data.accNumber[11] = accNo.charAt(10);
		$scope.data.accNumber[12] = accNo.charAt(11);
		$scope.data.accNumber[13] = accNo.charAt(12);
	}
	//For Investment Plus
	if ($scope.data.quotation.metaData.productName == 'inp') {
		var dataType = { "isPolicyOwner": "", "listData": [] };
		$scope.data.smokerDrink = [];
		//Filter list for Smoker & Drink
		var filterSmokerDrink = function (healthQuestionList) {
			return ((healthQuestionList.questionKey == 'HQSmoker' || healthQuestionList.questionKey == 'HQDrink') && healthQuestionList.questionValue == 'Y');
		}
		for (var i = 0; i < $scope.data.application.lifeAssuredDetails.length; i++) {
			$scope.data.smokerDrink.push(angular.copy(dataType));
			$scope.data.smokerDrink[i].isPolicyOwner = $scope.data.application.lifeAssuredDetails[i].isPolicyOwner;
			$scope.data.smokerDrink[i].listData = $scope.data.application.lifeAssuredDetails[i].underwritingDetailsOfLifeAssured.healthQuestionnaire.healthQuestions.filter(filterSmokerDrink);
		}
	}

	$scope.checkRiderExisting = function(riders, riderName) {
		var result = riders.filter(rider => rider.riderName == riderName);
		if (result.length > 0) {
			return true;
		} else {
			return false;
		}
	}
    /*Add page number into template*/
    window.onbeforeprint = addPageNumbers;
    function addPageNumbers() {
        if ($scope.data.quotation.metaData.productName == 'pns') {
          addBorder();
        }
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
    };
    function addBorder() {
      var bodyTemplate = document.body.children[0].children[1].children[0].children[0].children[0].children;
      var totalHeight = 0;
      var totalHeightProductSummary = 0;
      for (var i = 0; i <= bodyTemplate.length; i++) {
         if (bodyTemplate[i].id == "table-productSummary") {
            totalHeightProductSummary = bodyTemplate[i].scrollHeight;
            break;
         } else {
             if(bodyTemplate[i].children[0] != null) {
                 totalHeight = totalHeight + bodyTemplate[i].children[0].scrollHeight + 10;
             } else {
                totalHeight = totalHeight + bodyTemplate[i].scrollHeight;
             }
         }
      }
      totalHeight = totalHeight - 10;
      console.log("totalHeight: " + totalHeight);
      console.log("totalHeightProductSummary: " + totalHeightProductSummary);
      var positionTable = 842 - (totalHeight%842);
      var bodyTableProductSummary = document.getElementById("table-productSummary");
      childOfTableProductSummary = bodyTableProductSummary.children[0].children;
      var totalHeightTr = 0;
      var totalHeightPage = 0;
      for (var j = 0; j < childOfTableProductSummary.length; j++) {
         totalHeightTr = totalHeightTr + childOfTableProductSummary[j].scrollHeight;
         if (totalHeightTr > positionTable) {
            childOfTableProductSummary[j - 1].classList.remove('non-bottom-border');
            childOfTableProductSummary[j].classList.remove('non-top-border');
            totalHeightTr = 0;
            positionTable = 825;
         } else if (totalHeightTr == positionTable) {
            childOfTableProductSummary[j - 1].classList.remove('non-bottom-border');
            childOfTableProductSummary[j].classList.remove('non-top-border');
            totalHeightTr = 0;
            positionTable = 825;
         }
      }
    }
});
app.config(["$translateProvider", function ($translateProvider) {
	$translateProvider.useStaticFilesLoader(
		{
			prefix: '../../common/i18n/en.',
			suffix: '.json'
		}
	);
	$translateProvider.preferredLanguage('translation');
}]);