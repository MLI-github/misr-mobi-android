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

/* Filters */
var filterUIModule = angular.module('filterUIModule',[])

.filter('datetimeFilter', function() {
	var existingDateList = ["YYYY-MM-DD hh-mm-ss","YYYY-MM-DD-hh-mm-ss", "YYYY-MM-DD", "DD-MM-YYYY hh-mm-ss", "DD-MM-YYYY-hh-mm-ss", "DD-MM-YYYY"];
    return function(data,format){
    	if(data==undefined || data=="" || format==undefined || data==null)
			return;
    	if(!moment(data,existingDateList).isValid()){
    		data = moment.unix(data/1000); 
  	  	} 
    	//var date =  moment(data,existingDateList).format(format); //comment out: don't need to format first, in case, format == 'DD-MM-YYYY', cannot parse to utc local
    	var date =  moment(data,existingDateList).format('YYYY-MM-DD HH:mm:ss'); //format time of data from hh-mm-ss to HH:mm:ss. Cannot parse utc with hh-mm-ss
    	var localTime  = moment.utc(date).toDate(); 
		localTime = moment(localTime).format(format);
		return localTime;
    };
})
.filter('v3Currency', ['commonService', '$translate', '$filter', function(commonService, $translate, $filter) {	
	return function(data, decimal) {
		if(data == undefined || data == '')
			return "";
		if(decimal == undefined || decimal == '')
			decimal = 0;
    	if(angular.isString(data)){
    		var value = data.replace(/,/gi,'')
    		return $filter('currency')(value, "", decimal);
    	}
    	else
    		return $filter('currency')(data, "", decimal);
    }
}])
;//End



