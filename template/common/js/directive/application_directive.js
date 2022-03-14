'use strict';

var directiveModule = angular.module('directiveModule',[])
    .directive('medicalDeclarations', function () {
        return {
            templateUrl: '../../common/template-directive/MedicalDeclarations.html'
        };
    })
    .directive('familyHistory', function () {
        return {
            templateUrl: '../../common/template-directive/FamilyHistory.html'
        };
    })
    .directive('residenceAndTravel', function () {
        return {
            templateUrl: '../../common/template-directive/ResidenceAndTravel.html'
        };
    })
    .directive('dangerousActivities', function () {
        return {
            templateUrl: '../../common/template-directive/DangerousActivities.html'
        };
    })
    .directive('poInformation', function () {
        return {
            templateUrl: '../../common/template-directive/PO_Information.html'
        };
    })
    .directive('liInformation', function () {
        return {
            templateUrl: '../../common/template-directive/InsuredDetail.html'
        };
    })
    .directive('beneficiaryDetails', function () {
        return {
            templateUrl: '../../common/template-directive/BeneficiaryDetails.html'
        };
    })
    .directive('signatureApplication', function () {
        return {
            templateUrl: '../../common/template-directive/SignatureApplication.html'
        };
    })
    .directive('forBancaApplication', function () {
        return {
            templateUrl: '../../common/template-directive/ForBancaApplication.html'
        };
    });