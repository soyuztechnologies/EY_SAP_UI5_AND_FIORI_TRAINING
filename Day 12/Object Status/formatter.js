sap.ui.define([
], function(require, factory) {
    'use strict';
    return {
        getStatus: function(status){
            switch (status) {
                case 'Available':
                    return 'Success';
                    break;
                case 'Out Of Stock':
                    return 'Warning';
                    break;
                default:
                    return 'Error';
                    break;
            }
        }
    }    
});