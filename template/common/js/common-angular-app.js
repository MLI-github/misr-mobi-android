/*
 * //*******************************************************************************
 * // * Copyright (c) 2011-2014 CSC.
 * // * Copyright (C) 2010-2016 CSC - All rights reserved.
 * // *
 * // * The information contained in this document is the exclusive property of
 * // * CSC.  This work is protected under USA copyright law
 * // * and the copyright laws of given countries of origin and international
 * // * laws, treaties and/or conventions. No part of this document may be
 * // * reproduced or transmitted in any form or by any means, electronic or
 * // * mechanical including photocopying or by any informational storage or
 * // * retrieval system, unless as expressly permitted by CSC.
 * //
 * // * Design, Develop and Manage by Team Integral Point-of-Sales & Services
 * // ******************************************************************************
 */

'use strict';

var mainApp = angular.module('mainApp',['pascalprecht.translate', 'filterUIModule']);

mainApp.config(function ($translateProvider) {
  $translateProvider.translations('en', enTranslation);
  $translateProvider.preferredLanguage('en');
});


mainApp.service('commonService',  [ function( ){
	function CommonService(){


	};
	
	CommonService.prototype.findElement_V3 = function(eleName, element){
		if (eleName =="") return undefined;
		var eleNameArray = eleName.split(":");
		for(var prop in element) {
			var originalProp = prop;
        	if(prop != undefined){ 
        		if(eleNameArray.length < 2){
        			var propArray = prop.split(":");
        			if(propArray.length > 1){
        				var keyProp = propArray[1];
        				prop = keyProp;
        			}
        		}
        	}
            if(prop === eleName) {
            	eleName = originalProp;
                return element[eleName];
            }
            prop = originalProp;
            if(angular.isObject(element[prop])) {
                var rs = this.findElement_V3(eleName, element[prop]);
                if (rs !== undefined)
                    return rs;
            }
        }
        return undefined;
    };    

	CommonService.prototype.findElementInElement_V3 = function(element, elementsChain, options){
        if (element === undefined) return undefined;

        var errorOn = true;
        if (elementsChain[0] === 'MetadataDocument') errorOn = false;
        
        options = options || { 
        	'returnLastFound': true, //default want to return last found
        	'errorOn': errorOn //default error will show
        };

        var ele = element;
        for( var i = 0; i < elementsChain.length; i++) {
            var eleName = elementsChain[i];
            var newEle = this.findElement_V3(eleName, ele);
            if (newEle !== undefined){
                ele = newEle;
            }
            else{
            	if(!options.getlastFound)
            		ele = undefined;
            }
        }
        //if can't find any result for the first time
        if(ele === undefined && options.errorOn){	        	
        	/*$log.warn("Error: Can't find element in object by elementsChain: ["+ elementsChain + "]");
        	$log.warn(element);      */     
        }
        
        return ele;
    };

    CommonService.prototype.findElementInDetail_V3 = function(elementsChain, options){
        if (this.detail === undefined) return undefined;
        return this.findElementInElement_V3(this.detail, elementsChain, options);
    };
    
    CommonService.prototype.findValueInElement = function(element, elementsChain, options){
        if (element === undefined) return undefined;

        var errorOn = true;
        if (elementsChain[0] === 'MetadataDocument') errorOn = false;
        
        options = options || { 
        	'returnLastFound': true, //default want to return last found
        	'errorOn': errorOn //default error will show
        };

        var ele = element;
        for( var i = 0; i < elementsChain.length; i++) {
            var eleName = elementsChain[i];
            var newEle = this.findElement_V3(eleName, ele);
            if (newEle !== undefined){
                ele = newEle;
            }
            else{
            	if(!options.getlastFound)
            		ele = undefined;
            }
        }
        //if can't find any result for the first time
        if(ele === undefined && options.errorOn){	        	
        	/*$log.warn("Error: Can't find element in object by elementsChain: ["+ elementsChain + "]");*/
        	return "";
        }
        
        return ele.toString();
    };
    
    CommonService.prototype.findValueInDetail = function(elementsChain, options){
        if (this.detail === undefined) return "";
        return this.findValueInElement(this.detail, elementsChain, options);
    };

	return new CommonService();
}])


mainApp.service('translateService', ['$translate', '$q', function($translate, $q){
	/**
	 * This service is using for translate message with params
	 * Based on angular.translate service
	 * @param $http
	 * @param $log
	 */
	function TranslateService($translate, $q){
		var self = this;
		self.currentLanguageCode = 'en.translation';

		/**
		 * add parameters to result
		 */
		self.addParasToResult = function (result, params) {
			if(params){
	        	for (var i = params.length - 1; i >= 0; i--) {
	        		result = result.replace("{" + i + "}", params[i]);
	        	};
	        	return result;
	        }
	        else return result;
		}

		self.prepareData = function (key, params) {
			var obj = undefined;
			params = key.split(";");
	   		//with params
	   		if(params.length > 1){
	   			key = params.shift();
	   		}
	   		//without params
	   		else{
	   			params = undefined;
	   		}
	   		obj = {key: key, params: params};
	   		return obj;
		}

		/**
		 * Translate synchronous, don't return promise
		 * @param  {String} key    message to translate
		 * @param  {String} prefix i18n prefix
		 * @return {String}        Translated string
		 */
		self.instant = function instant (key, prefix) {
			var params = undefined;
			var data = this.prepareData(key, params);
	   		if(prefix)
	            data.key = prefix + '.' + data.key;

	        var result = $translate.instant(data.key);
	        
	       	result = this.addParasToResult(result, data.params);

	        return result;
		}

		/**
		 * Translate aynchronous, return promise
		 * @param  {String} key    message to translate
		 * @param  {String} prefix i18n prefix
		 * @return {Object}        Angular promise
		 */
		self.translate = function translate(key, prefix){
			var self = this;
			var deferred = $q.defer();
			var params = undefined;

			var data = self.prepareData(key, params);
	   		if(prefix)
	            data.key = prefix + '.' + data.key;
			
	        var result = $translate(data.key).then(
	        	function hadResult (translatedText) {
	        		translatedText = self.addParasToResult(translatedText, data.params);
	        		deferred.resolve(translatedText);
	        	}
	        );

	        return deferred.promise;
		}
		
	};
	
	return new TranslateService($translate, $q);
	
}])