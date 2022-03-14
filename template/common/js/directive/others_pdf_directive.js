'use strict';

var directiveModule = angular.module('directiveModule',[])
    .directive('agentDeclaration', function () {
        return {
            templateUrl: '../../common/template-directive/AD.html'
        };
    })
    .directive('fatcaDeclaration', function () {
        return {
            templateUrl: '../../common/template-directive/FATCA.html'
        };
    })
    .directive('beneficiaryDeclaration', function () {
        return {
            templateUrl: '../../common/template-directive/BD.html'
        };
    })
    .directive('fatcaQuestion', function () {
        return {
            templateUrl: '../../common/template-directive/FATCA-Question.html'
        };
    })
    .directive('moneyLaundering', function () {
        return {
            templateUrl: '../../common/template-directive/ML.html'
        };
    })
    .directive('methodMandate', function () {
        return {
            templateUrl: '../../common/template-directive/ACHM.html'
        };
    })
    .directive('templateFna', function () {
        return {
            templateUrl: '../../common/template-directive/FNA.html'
        };
    })
    .directive('salaryDeduction', function () {
        return {
            templateUrl: '../../common/template-directive/SDD.html'
        };
    })
    .directive('appDelegation', function () {
        return {
            templateUrl: '../../common/template-directive/APP_DELEGATION.html'
        };
    });